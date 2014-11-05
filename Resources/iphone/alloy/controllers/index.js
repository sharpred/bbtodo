function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#c5c5c7",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "10%",
        color: "#000",
        top: "10",
        text: "todo",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.open = Ti.UI.createListSection({
        headerTitle: "open",
        id: "open"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.open);
    $.__views.completed = Ti.UI.createListSection({
        headerTitle: "completed",
        id: "completed"
    });
    __alloyId2.push($.__views.completed);
    $.__views.todolist = Ti.UI.createListView({
        sections: __alloyId2,
        id: "todolist",
        width: "90%",
        height: "80%",
        backgroundColor: "white"
    });
    $.__views.index.add($.__views.todolist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;