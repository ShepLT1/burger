const orm = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", res);

orm.updateOne("burgers", res.devoured, res.id);