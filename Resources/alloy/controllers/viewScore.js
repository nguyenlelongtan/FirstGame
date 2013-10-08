function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "viewScore";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.viewScore = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "viewScore"
    });
    $.__views.viewScore && $.addTopLevelView($.__views.viewScore);
    $.__views.sectionScore = Ti.UI.createTableViewSection({
        font: {
            fontSize: 50
        },
        id: "sectionScore",
        headerTitle: "Top 10"
    });
    var __alloyId7 = [];
    __alloyId7.push($.__views.sectionScore);
    $.__views.tableScore = Ti.UI.createTableView({
        data: __alloyId7,
        id: "tableScore"
    });
    $.__views.viewScore.add($.__views.tableScore);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.Database.install("/BiHallowGame.db", "BiHallowGame");
    var db = Ti.Database.open("BiHallowGame");
    if (db) {
        var scores = db.execute("Select score FROM Top ORDER BY score DESC LIMIT 10");
        while (scores.isValidRow()) {
            $.sectionScore.add(Ti.UI.createTableViewRow({
                title: scores.fieldByName("score").toString(),
                font: {
                    fontSize: 50
                }
            }));
            scores.next();
        }
    }
    $.viewScore.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;