const connection = require("./connection.js");

const orm = {
    selectAll: function(table) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function(table, res) {
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, res], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    updateOne: function(table, devoured, burgerId) {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, devoured, burgerId], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
}

module.exports = orm;