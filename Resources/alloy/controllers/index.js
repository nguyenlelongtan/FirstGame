function Controller() {
    function viewScore() {
        var viewScore = Alloy.createController("viewScore").getView();
        viewScore.open();
    }
    function startGame() {
        var gameScreen = Alloy.createController("gameScreen").getView();
        gameScreen.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: 50
        },
        height: "auto",
        width: "auto",
        top: 10,
        text: "Welcome to BiHallow Game",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        top: 300,
        height: 300,
        width: 300,
        image: "/img/troll1.jpg",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
        height: "auto",
        width: 200,
        top: 100,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        title: "Start Game",
        id: "__alloyId5"
    });
    $.__views.index.add($.__views.__alloyId5);
    startGame ? $.__views.__alloyId5.addEventListener("click", startGame) : __defers["$.__views.__alloyId5!click!startGame"] = true;
    $.__views.__alloyId6 = Ti.UI.createButton({
        bottom: 10,
        right: 10,
        title: "View Score",
        id: "__alloyId6"
    });
    $.__views.index.add($.__views.__alloyId6);
    viewScore ? $.__views.__alloyId6.addEventListener("click", viewScore) : __defers["$.__views.__alloyId6!click!viewScore"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId5!click!startGame"] && $.__views.__alloyId5.addEventListener("click", startGame);
    __defers["$.__views.__alloyId6!click!viewScore"] && $.__views.__alloyId6.addEventListener("click", viewScore);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;