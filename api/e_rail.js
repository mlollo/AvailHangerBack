var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_rail');
var options = require('../models/options/e_rail');
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

    models.E_rail.findAndCountAll({limit: answer.limit, offset: answer.offset}).then(function(e_rails) {
        answer["e_rails".substring(2)] = e_rails.rows || [];
        answer.totalCount = e_rails.count;
        answer.rowsCount = answer["e_rails".substring(2)].length;

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
    var id_e_rail = parseInt(req.params.id);

    models.E_rail.findById(id_e_rail).then(function(e_rail) {
        if (!e_rail) {
            answer.error = "No e_rail with ID "+id_e_rail;
            return res.status(404).json(answer);
        }
        answer["e_rail".substring(2)] = e_rail;

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
    var id_e_rail = req.params.id;
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

    models.E_rail.findOne({
        where: {id: id_e_rail},
        include: [include]
    }).then(function(e_rail) {
        if (!e_rail) {
            answer.error = "No e_rail with ID "+id_e_rail;
            return res.status(404).json(answer);
        }
        answer[association] = e_rail[include.as];

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
    createObject = enums.values("e_rail", createObject, req.body)

    models.E_rail.create(createObject).then(function(e_rail) {
        answer["e_rail".substring(2)] = e_rail;

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
    var id_e_rail = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);
    updateObject = enums.values("e_rail", updateObject, req.body);

    models.E_rail.findOne({where: {id: id_e_rail}}).then(function(e_rail) {
        if (!e_rail) {
            answer.error = "No e_rail with ID "+id_e_rail;
            return res.status(404).json(answer);
        }

        e_rail.update(updateObject, {where: {id: id_e_rail}}).then(function() {
            answer["e_rail".substring(2)] = e_rail;

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
    var id_e_rail = req.params.id;

    models.E_rail.destroy({where: {id: id_e_rail}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
