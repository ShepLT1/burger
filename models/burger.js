const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        });
    },
    create: function(table, res, cb) {
        orm.insertOne("burgers", res, function(data) {
            cb(data);
        });
    },
    update: function(table, devoured, id, cb) {
        orm.updateOne("burgers", res.devoured, res.id, function(data) {
            cb(data);
        });
    }
}

module.exports = burger;