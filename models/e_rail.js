var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/e_rail.json");
var associations = require("./options/e_rail.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '4_e_rail',
        classMethods: {
            associate: builder.buildAssociation('E_rail', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_rail', attributes, options);
    return Model;
};