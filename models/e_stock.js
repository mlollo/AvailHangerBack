var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/e_stock.json");
var associations = require("./options/e_stock.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '4_e_stock',
        classMethods: {
            associate: builder.buildAssociation('E_stock', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_stock', attributes, options);
    return Model;
};