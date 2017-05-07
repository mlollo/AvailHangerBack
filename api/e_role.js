var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_role');
var options = require('../models/options/e_role');
var model_builder = require('../utils/model_builder');
var enums = require('../utils/enum.js');

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

//
// FIND ALL
//
router.get('/', function(req, res) {
    var answer = {
        limit: parseInt(req.query.limit || 50),
        offset: parseInt(req.query.offset || 0),
        error: null
    };

    models.E_role.findAndCountAll({limit: answer.limit, offset: answer.offset}).then(function(e_roles) {
        answer["e_roles".substring(2)] = e_roles.rows || [];
        answer.totalCount = e_roles.count;
        answer.rowsCount = answer["e_roles".substring(2)].length;

        res.status(200).json(answer);
    }).catch(function(err) {
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// FIND ONE
//
router.get('/:id', function(req, res) {
    var answer = {
        error: null
    };
    var id_e_role = parseInt(req.params.id);

    models.E_role.findById(id_e_role).then(function(e_role) {
        if (!e_role) {
            answer.error = "No e_role with ID "+id_e_role;
            return res.status(404).json(answer);
        }
        answer["e_role".substring(2)] = e_role;

        res.status(200).json(answer);
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// FIND ASSOCIATION
//
router.get('/:id/:association', function(req, res) {
    var answer = {
        error: null,
        limit: parseInt(req.query.limit || 50),
        offset: parseInt(req.query.offset || 0)
    };
    var id_e_role = req.params.id;
    var association = req.params.association;

    var include = null;
    for (var i = 0; i < options.length; i++) {
        if (options[i].as == 'r_'+association) {
            include = {
                model: models[capitalizeFirstLetter(options[i].target)],
                as: options[i].as,
                limit: answer.limit,
                offset: answer.offset
            };
            break;
        }
    }

    if (include == null) {
        answer.error = "No association with "+association;
        return res.status(404).json(answer);
    }

    models.E_role.findOne({
        where: {id: id_e_role},
        include: [include]
    }).then(function(e_role) {
        if (!e_role) {
            answer.error = "No e_role with ID "+id_e_role;
            return res.status(404).json(answer);
        }
        answer[association] = e_role[include.as];

        res.status(200).json(answer);
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// CREATE
//
router.post('/', function(req, res) {
    var answer = {
        error: null
    };

    var createObject = model_builder.buildForRoute(attributes, options, req.body);
    createObject = enums.values("e_role", createObject, req.body)

    models.E_role.create(createObject).then(function(e_role) {
        answer["e_role".substring(2)] = e_role;

        res.status(200).json(answer);
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// UPDATE
//
router.put('/:id', function(req, res) {
    var answer = {
        error: null
    };
    var id_e_role = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);
    updateObject = enums.values("e_role", updateObject, req.body);

    models.E_role.findOne({where: {id: id_e_role}}).then(function(e_role) {
        if (!e_role) {
            answer.error = "No e_role with ID "+id_e_role;
            return res.status(404).json(answer);
        }

        e_role.update(updateObject, {where: {id: id_e_role}}).then(function() {
            answer["e_role".substring(2)] = e_role;

            res.status(200).json(answer);
        }).catch(function(err){
            answer.error = err;
            res.status(500).json(answer);
        });
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// DELETE
//
router.delete('/:id', function(req, res) {
    var answer = {
        error: null
    }
    var id_e_role = req.params.id;

    models.E_role.destroy({where: {id: id_e_role}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
