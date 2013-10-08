function Controller() {
    function viewScore() {
        var viewScore = Alloy.createController("viewScore").getView();
        viewScore.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "endScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.endScreen = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "endScreen"
    });
    $.__views.endScreen && $.addTopLevelView($.__views.endScreen);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: 50
        },
        text: "Thanks",
        top: "50",
        id: "__alloyId0"
    });
    $.__views.endScreen.add($.__views.__alloyId0);
    $.__views.lbScore = Ti.UI.createLabel({
        font: {
            fontSize: 50
        },
        id: "lbScore",
        top: "150"
    });
    $.__views.endScreen.add($.__views.lbScore);
    $.__views.imgDance = Ti.UI.createImageView({
        id: "imgDance",
        top: "300",
        width: "250",
        height: "150"
    });
    $.__views.endScreen.add($.__views.imgDance);
    $.__views.btnViewScore = Ti.UI.createButton({
        title: "View Score",
        id: "btnViewScore",
        bottom: "10",
        right: "10"
    });
    $.__views.endScreen.add($.__views.btnViewScore);
    viewScore ? $.__views.btnViewScore.addEventListener("click", viewScore) : __defers["$.__views.btnViewScore!click!viewScore"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lbScore.text = "Your Score : " + args.score.toString();
    var dance = true;
    setInterval(function() {
        if (dance) {
            $.imgDance.image = "/img/dance1.jpg";
            dance = false;
        } else {
            $.imgDance.image = "/img/dance2.jpg";
            dance = true;
        }
    }, 500);
    Titanium.Database.install("/BiHallowGame.db", "BiHallowGame");
    var db = Titanium.Database.open("BiHallowGame");
    db.execute("INSERT INTO Top VALUES(" + args.score.toString() + ")");
    db.close();
    $.endScreen.open();
    __defers["$.__views.btnViewScore!click!viewScore"] && $.__views.btnViewScore.addEventListener("click", viewScore);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;