var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/e_product.json");
var associations = require("./options/e_product.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '4_e_product',
        classMethods: {
            associate: builder.buildAssociation('E_product', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_product', attributes, options);
    return Model;
};