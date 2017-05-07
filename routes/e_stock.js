var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');
// Datalist
var filterDataTable = require('../utils/filterDataTable');

// Sequelize
var models = require('../models/');
var attributes = require('../models/attributes/e_stock');
var options = require('../models/options/e_stock');
var model_builder = require('../utils/model_builder');
var entity_helper = require('../utils/entity_helper');
var file_helper = require('../utils/file_helper');
var global = require('../config/global');
// ENUM managment
var enums = require('../utils/enum.js');

// Winston logger
var logger = require('../utils/logger');


function error500(err, req, res, redirect) {
    var isKnownError = false;
    try {

        //Sequelize validation error
        if (err.name == "SequelizeValidationError") {
            req.session.toastr.push({level: 'error', message: err.errors[0].message});
            isKnownError = true;
        }

        // Unique value constraint error
        if (typeof err.parent !== "undefined" && err.parent.errno == 1062) {
            req.session.toastr.push({level: 'error', message: err.errors[0].message});
            isKnownError = true;
        }

    } finally {
        if (isKnownError)
            return res.redirect(redirect || '/');
        else
            console.error(err);
        logger.debug(err);
        var data = {};
        data.code = 500;
        data.message = err.message || null;
        res.render('common/error', data);
    }
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

router.get('/list', block_access.actionAccessMiddleware("stock", "read"), function (req, res) {
    var data = {
        "menu": "e_stock",
        "sub_menu": "list_e_stock"
    };

    data.toastr = req.session.toastr;
    req.session.toastr = [];

    res.render('e_stock/list', data);
});

router.post('/datalist', block_access.actionAccessMiddleware("stock", "read"), function (req, res) {

    /* Looking for include to get all associated related to data for the datalist ajax loading */
    var include = model_builder.getDatalistInclude(models, options);
    filterDataTable("E_stock", req.body, include).then(function (data) {
        // Replace data enum value by translated value for datalist
        var enumsTranslation = enums.translated("e_stock", req.session.lang_user);
        var todo = [];
        for (var i = 0; i < data.data.length; i++) {
            for (var field in data.data[i].dataValues) {
                for (var enumField in enumsTranslation)
                    if (field == enumField)
                        for (var k = 0; k < enumsTranslation[enumField].length; k++)
                            if (data.data[i].dataValues[enumField] == enumsTranslation[enumField][k].value)
                                data.data[i].dataValues[enumField] = enumsTranslation[enumField][k].translation;
                //get attribute value
                var value = data.data[i].dataValues[field];
                //for type picture, get thumbnail picture
                if (typeof attributes[field] != 'undefined' && attributes[field].newmipsType == 'picture' && value != null) {
                    var partOfFile = value.split('-');
                    if (partOfFile.length > 1) {
                        //if field value have valide picture name, add new task in todo list
                        //we will use todo list to get all pictures binary
                        var thumbnailFolder = global.thumbnail.folder;
                        var filePath = thumbnailFolder + 'e_stock/' + partOfFile[0] + '/' + value;
                        todo.push({
                            value: value,
                            file: filePath,
                            field: field,
                            dataIndex: i
                        });
                    }
                }
            }
        }
        //check if we have to get some picture buffer before send data
        if (todo.length) {
            var counter=0;
            for (var i = 0; i < todo.length; i++) {
                var _todo = todo[i];
                (function (task) {
                    file_helper.getFileBuffer64(task.file, function (success, buffer) {
                        counter++;
                        data.data[task.dataIndex].dataValues[task.field] = {
                            value: task.value,
                            buffer: buffer
                        };
                        if (counter === todo.length) 
                            res.send(data).end();
                        
                    });
                }(_todo));
            }
        } else
            res.send(data).end();
    }).catch(function (err) {
        console.log(err);
        logger.debug(err);
        res.end();
    });
});

router.post('/fieldset/:alias/remove', block_access.actionAccessMiddleware("stock", "delete"), function (req, res) {
    var alias = req.params.alias;
    var idToRemove = req.body.idRemove;
    var idEntity = req.body.idEntity;
    models.E_stock.findOne({where: {id: idEntity}}).then(function (e_stock) {
        if (!e_stock) {
            var data = {error: 404};
            return res.render('common/error', data);
        }

        // Get all associations
        e_stock['get' + capitalizeFirstLetter(alias)]().then(function (aliasEntities) {
            // Remove entity from association array
            for (var i = 0; i < aliasEntities.length; i++)
                if (aliasEntities[i].id == idToRemove) {
                    aliasEntities.splice(i, 1);
                    break;
                }

            // Set back associations without removed entity
            e_stock['set' + capitalizeFirstLetter(alias)](aliasEntities).then(function () {
                res.sendStatus(200).end();
            });
        });
    }).catch(function (err) {
        error500(err, req, res, "/");
    });
});

router.post('/fieldset/:alias/add', block_access.actionAccessMiddleware("stock", "write"), function (req, res) {
    var alias = req.params.alias;
    var idEntity = req.body.idEntity;
    models.E_stock.findOne({where: {id: idEntity}}).then(function (e_stock) {
        if (!e_stock) {
            var data = {error: 404};
            logger.debug("No data entity found.");
            return res.render('common/error', data);
        }

        var toAdd;
        if (typeof (toAdd = req.body.ids) === 'undefined') {
            req.session.toastr.push({
                message: 'message.create.failure',
                level: "error"
            });
            return res.redirect('/stock/show?id=' + idEntity + "#" + alias);
        }

        e_stock['add' + capitalizeFirstLetter(alias)](toAdd).then(function () {
            res.redirect('/stock/show?id=' + idEntity + "#" + alias);
        });
    }).catch(function (err) {
        error500(err, req, res, "/");
    });
});

router.get('/show', block_access.actionAccessMiddleware("stock", "read"), function (req, res) {
    var id_e_stock = req.query.id;
    var tab = req.query.tab;
    var data = {
        menu: "e_stock",
        sub_menu: "list_e_stock",
        tab: tab,
        enum: enums.translated("e_stock", req.session.lang_user)
    };

    /* If we arrive from an associated tab, hide the create and the list button */
    if (typeof req.query.hideButton !== 'undefined') {
        data.hideButton = req.query.hideButton;
    }

    /* Looking for two level of include to get all associated data in show tab list */
    var include = model_builder.getTwoLevelIncludeAll(models, options);

    models.E_stock.findOne({where: {id: id_e_stock}, include: include}).then(function (e_stock) {
        if (!e_stock) {
            data.error = 404;
            logger.debug("No data entity found.");
            return res.render('common/error', data);
        }

        /* Modify e_stock value with the translated enum value in show result */
        for (var item in data.enum)
            for (var field in e_stock.dataValues)
                if (item == field)
                    for (var value in data.enum[item])
                        if (data.enum[item][value].value == e_stock[field])
                            e_stock[field] = data.enum[item][value].translation;

        /* Update local e_stock data before show */
        data.e_stock = e_stock;
        var associationsFinder = model_builder.associationsFinder(models, options);

        Promise.all(associationsFinder).then(function (found) {
            for (var i = 0; i < found.length; i++) {
                data.e_stock[found[i].model + "_global_list"] = found[i].rows;
                data[found[i].model] = found[i].rows;
            }

            data.toastr = req.session.toastr;
            req.session.toastr = [];
            // Update some data before show, e.g get picture binary
            e_stock = entity_helper.update_local_data(e_stock, attributes, "e_stock");
            res.render('e_stock/show', data);
        });

    }).catch(function (err) {
        error500(err, req, res, "/");
    });
});

router.get('/create_form', block_access.actionAccessMiddleware("stock", "write"), function (req, res) {
    var data = {
        menu: "e_stock",
        sub_menu: "create_e_stock",
        enum: enums.translated("e_stock", req.session.lang_user)
    };

    if (typeof req.query.associationFlag !== 'undefined') {
        data.associationFlag = req.query.associationFlag;
        data.associationSource = req.query.associationSource;
        data.associationForeignKey = req.query.associationForeignKey;
        data.associationAlias = req.query.associationAlias;
        data.associationUrl = req.query.associationUrl;
    }

    var associationsFinder = model_builder.associationsFinder(models, options);

    Promise.all(associationsFinder).then(function (found) {
        for (var i = 0; i < found.length; i++)
            data[found[i].model] = found[i].rows;
        data.toastr = req.session.toastr;
        req.session.toastr = [];
        res.render('e_stock/create', data);
    }).catch(function (err) {
        error500(err, req, res, "/");
    });
});

router.post('/create', block_access.actionAccessMiddleware("stock", "write"), function (req, res) {

    var createObject = model_builder.buildForRoute(attributes, options, req.body);
    createObject = enums.values("e_stock", createObject, req.body);
    models.E_stock.create(createObject).then(function (e_stock) {
        var redirect = '/stock/list';
        req.session.toastr = [{
                message: 'message.create.success',
                level: "success"
            }];

        if (typeof req.body.associationFlag !== 'undefined') {
            redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;
            models[capitalizeFirstLetter(req.body.associationSource)].findOne({where: {id: req.body.associationFlag}}).then(function (association) {
                if (!association) {
                    e_stock.destroy();
                    var err = new Error();
                    err.message = "Association not found."
                    return error500(err, req, res, "/");
                }

                var modelName = req.body.associationAlias.charAt(0).toUpperCase() + req.body.associationAlias.slice(1).toLowerCase();
                if (typeof association['add' + modelName] !== 'undefined')
                    association['add' + modelName](e_stock.id);
                else {
                    var obj = {};
                    obj[req.body.associationForeignKey] = e_stock.id;
                    association.update(obj);
                }
            });
        }

        // We have to find value in req.body that are linked to an hasMany or belongsToMany association
        // because those values are not updated for now
        model_builder.setAssocationManyValues(e_stock, req.body, createObject, options);

        res.redirect(redirect);
    }).catch(function (err) {
        error500(err, req, res, '/stock/create_form');
    });
});

router.get('/update_form', block_access.actionAccessMiddleware("stock", "write"), function (req, res) {
    var id_e_stock = req.query.id;
    var data = {
        menu: "e_stock",
        sub_menu: "list_e_stock",
        enum: enums.translated("e_stock", req.session.lang_user)
    };

    if (typeof req.query.associationFlag !== 'undefined') {
        data.associationFlag = req.query.associationFlag;
        data.associationSource = req.query.associationSource;
        data.associationForeignKey = req.query.associationForeignKey;
        data.associationAlias = req.query.associationAlias;
        data.associationUrl = req.query.associationUrl;
    }

    var associationsFinder = model_builder.associationsFinder(models, options);

    Promise.all(associationsFinder).then(function (found) {
        models.E_stock.findOne({where: {id: id_e_stock}, include: [{all: true}]}).then(function (e_stock) {
            if (!e_stock) {
                data.error = 404;
                return res.render('common/error', data);
            }

            data.e_stock = e_stock;
            var name_global_list = "";

            for (var i = 0; i < found.length; i++) {
                var model = found[i].model;
                var rows = found[i].rows;
                data[model] = rows;

                // Example : Gives all the adresses in the context Personne for the UPDATE field, because UPDATE field is in the context Personne.
                // So in the context Personne we can found adresse.findAll through {#adresse_global_list}{/adresse_global_list}
                name_global_list = model + "_global_list";
                data.e_stock[name_global_list] = rows;

                if (rows.length > 1) {
                    for (var j = 0; j < data[model].length; j++) {
                        if (e_stock[model] != null) {
                            for (var k = 0; k < e_stock[model].length; k++) {
                                if (data[model][j].id == e_stock[model][k].id) {
                                    data[model][j].dataValues.associated = true;
                                }
                            }
                        }
                    }
                }
            }

            data.toastr = req.session.toastr;
            req.session.toastr = [];
            res.render('e_stock/update', data);
        }).catch(function (err) {
            error500(err, req, res, "/");
        });
    }).catch(function (err) {
        error500(err, req, res, "/");
    });
});

router.post('/update', block_access.actionAccessMiddleware("stock", "write"), function (req, res) {
    var id_e_stock = parseInt(req.body.id);

    if (typeof req.body.version !== "undefined" && req.body.version != null && !isNaN(req.body.version) && req.body.version != '')
        req.body.version = parseInt(req.body.version) + 1;
    else
        req.body.version = 0;

    var updateObject = model_builder.buildForRoute(attributes, options, req.body);
    updateObject = enums.values("e_stock", updateObject, req.body);

    models.E_stock.findOne({where: {id: id_e_stock}}).then(function (e_stock) {
        if (!e_stock) {
            data.error = 404;
            logger.debug("Not found - Update");
            return res.render('common/error', data);
        }

        e_stock.update(updateObject, {where: {id: id_e_stock}}).then(function () {

            // We have to find value in req.body that are linked to an hasMany or belongsToMany association
            // because those values are not updated for now
            model_builder.setAssocationManyValues(e_stock, req.body, updateObject, options);

            var redirect = '/stock/show?id=' + id_e_stock;
            if (typeof req.body.associationFlag !== 'undefined')
                redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;

            req.session.toastr = [{
                    message: 'message.update.success',
                    level: "success"
                }];

            res.redirect(redirect);
        }).catch(function (err) {
            error500(err, req, res, '/stock/update_form?id=' + id_e_stock);
        });
    }).catch(function (err) {
        error500(err, req, res, '/stock/update_form?id=' + id_e_stock);
    });
});

router.post('/delete', block_access.actionAccessMiddleware("stock", "delete"), function (req, res) {
    var id_e_stock = parseInt(req.body.id);

    models.E_stock.findOne({where: {id: id_e_stock}}).then(function (deleteObject) {
        models.E_stock.destroy({
            where: {
                id: id_e_stock
            }
        }).then(function () {
            req.session.toastr = [{
                    message: 'message.delete.success',
                    level: "success"
                }];

            var redirect = '/stock/list';
            if (typeof req.body.associationFlag !== 'undefined')
                redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;
            res.redirect(redirect);
            entity_helper.remove_files("e_stock", deleteObject, attributes);
        }).catch(function (err) {
            error500(err, req, res, '/stock/list');
        });
    }).catch(function (err) {
        error500(err, req, res, '/stock/list');
    });
});

module.exports = router;