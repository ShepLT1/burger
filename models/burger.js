const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burger", function(data) {
            cb(data);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(data) {
            cb(data);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function(data) {
            cb(data);
        });
    }
}

module.exports = burger;