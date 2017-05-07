var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_hanger');
var options = require('../models/options/e_hanger');
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

    models.E_hanger.findAndCountAll({limit: answer.limit, offset: answer.offset}).then(function(e_hangers) {
        answer["e_hangers".substring(2)] = e_hangers.rows || [];
        answer.totalCount = e_hangers.count;
        answer.rowsCount = answer["e_hangers".substring(2)].length;

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
    var id_e_hanger = parseInt(req.params.id);

    models.E_hanger.findById(id_e_hanger).then(function(e_hanger) {
        if (!e_hanger) {
            answer.error = "No e_hanger with ID "+id_e_hanger;
            return res.status(404).json(answer);
        }
        answer["e_hanger".substring(2)] = e_hanger;

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
    var id_e_hanger = req.params.id;
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

    models.E_hanger.findOne({
        where: {id: id_e_hanger},
        include: [include]
    }).then(function(e_hanger) {
        if (!e_hanger) {
            answer.error = "No e_hanger with ID "+id_e_hanger;
            return res.status(404).json(answer);
        }
        answer[association] = e_hanger[include.as];

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
    createObject = enums.values("e_hanger", createObject, req.body)

    models.E_hanger.create(createObject).then(function(e_hanger) {
        answer["e_hanger".substring(2)] = e_hanger;

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
    var id_e_hanger = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);
    updateObject = enums.values("e_hanger", updateObject, req.body);

    models.E_hanger.findOne({where: {id: id_e_hanger}}).then(function(e_hanger) {
        if (!e_hanger) {
            answer.error = "No e_hanger with ID "+id_e_hanger;
            return res.status(404).json(answer);
        }

        e_hanger.update(updateObject, {where: {id: id_e_hanger}}).then(function() {
            answer["e_hanger".substring(2)] = e_hanger;

            res.status(200).json(answer);
        }).catch(function(err){
            answer.error = err;
            res.status(500).json(answer);
        });

        // if(e_hanger.f_onRail){
            
        // }

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
    var id_e_hanger = req.params.id;

    models.E_hanger.destroy({where: {id: id_e_hanger}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
