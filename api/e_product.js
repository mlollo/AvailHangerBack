var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_product');
var options = require('../models/options/e_product');
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

    models.E_product.findAndCountAll({limit: answer.limit, offset: answer.offset}).then(function(e_products) {
        answer["e_products".substring(2)] = e_products.rows || [];
        answer.totalCount = e_products.count;
        answer.rowsCount = answer["e_products".substring(2)].length;

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
    var id_e_product = parseInt(req.params.id);

    models.E_product.findById(id_e_product).then(function(e_product) {
        if (!e_product) {
            answer.error = "No e_product with ID "+id_e_product;
            return res.status(404).json(answer);
        }
        answer["e_product".substring(2)] = e_product;

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
    var id_e_product = req.params.id;
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

    models.E_product.findOne({
        where: {id: id_e_product},
        include: [include]
    }).then(function(e_product) {
        if (!e_product) {
            answer.error = "No e_product with ID "+id_e_product;
            return res.status(404).json(answer);
        }
        answer[association] = e_product[include.as];

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
    createObject = enums.values("e_product", createObject, req.body)

    models.E_product.create(createObject).then(function(e_product) {
        answer["e_product".substring(2)] = e_product;

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
    var id_e_product = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);
    updateObject = enums.values("e_product", updateObject, req.body);

    models.E_product.findOne({where: {id: id_e_product}}).then(function(e_product) {
        if (!e_product) {
            answer.error = "No e_product with ID "+id_e_product;
            return res.status(404).json(answer);
        }

        e_product.update(updateObject, {where: {id: id_e_product}}).then(function() {
            answer["e_product".substring(2)] = e_product;

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
    var id_e_product = req.params.id;

    models.E_product.destroy({where: {id: id_e_product}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
