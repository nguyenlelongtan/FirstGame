function Controller() {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function answearTrue() {
        score++;
        Ti.Media.vibrate();
        newQuestion();
    }
    function newQuestion() {
        if (countQuest == quests.length) {
            clearInterval(intervalTime);
            intervalTime = null;
            var endScreen = Alloy.createController("endScreen", {
                score: score
            }).getView();
            endScreen.open();
        } else {
            countTime = 4;
            quest = quests[countQuest];
            $.lbQuest.text = quest.questName;
            countQuest++;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gameScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.gameScreen = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "gameScreen"
    });
    $.__views.gameScreen && $.addTopLevelView($.__views.gameScreen);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        width: "350",
        height: "250",
        top: "150",
        image: "/img/quest.jpg",
        id: "__alloyId1"
    });
    $.__views.gameScreen.add($.__views.__alloyId1);
    $.__views.lbQuest = Ti.UI.createLabel({
        font: {
            fontSize: 50
        },
        id: "lbQuest",
        width: "auto",
        height: "auto",
        top: "400",
        color: "red"
    });
    $.__views.gameScreen.add($.__views.lbQuest);
    $.__views.lbTime = Ti.UI.createLabel({
        font: {
            fontSize: 50
        },
        id: "lbTime",
        right: "10",
        top: "10",
        color: "red"
    });
    $.__views.gameScreen.add($.__views.lbTime);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var quest;
    var countQuest = 0;
    var score = 0;
    var quests = [ {
        questName: "Plz Shake Ur Phone",
        name: "shake",
        type: "gesture"
    }, {
        questName: "Plz Click On Screen",
        name: "click",
        type: "win"
    }, {
        questName: "Swipe To Right",
        name: "right",
        type: "win"
    }, {
        questName: "Plz Double Click On Screen",
        name: "dblclick",
        type: "win"
    }, {
        questName: "Swipe To Left",
        name: "left",
        type: "win"
    }, {
        questName: "Swipe Up",
        name: "up",
        type: "win"
    }, {
        questName: "Swipe Down",
        name: "down",
        type: "win"
    }, {
        questName: "longpress",
        name: "longpress",
        type: "win"
    }, {
        questName: "twofingertap",
        name: "twofingertap",
        type: "win"
    } ];
    quests = shuffleArray(quests);
    var countTime = 4;
    var intervalTime = setInterval(function() {
        $.lbTime.text = "Time : " + countTime;
        countTime--;
        -1 == countTime && newQuestion();
    }, 1e3);
    $.gameScreen.addEventListener("click", function() {
        "click" == quest.name && answearTrue();
    });
    $.gameScreen.addEventListener("longpress", function() {
        "longpress" == quest.name && answearTrue();
    });
    $.gameScreen.addEventListener("swipe", function(e) {
        quest.name == e.direction && answearTrue();
    });
    $.gameScreen.addEventListener("dblclick", function() {
        "dblclick" == quest.name && answearTrue();
    });
    $.gameScreen.addEventListener("twofingertap", function() {
        "twofingertap" == quest.name && answearTrue();
    });
    Titanium.Gesture.addEventListener("shake", function() {
        "shake" == quest.name && answearTrue();
    });
    newQuestion();
    $.gameScreen.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;