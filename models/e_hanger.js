var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/e_hanger.json");
var associations = require("./options/e_hanger.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '4_e_hanger',
        classMethods: {
            associate: builder.buildAssociation('E_hanger', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_hanger', attributes, options);
    return Model;
};