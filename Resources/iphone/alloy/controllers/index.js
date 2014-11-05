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
        text: "To Do List",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    var __alloyId2 = {};
    Alloy.createController("templates/openItem", {
        __itemTemplate: __alloyId2
    });
    Alloy.createController("templates/closedItem", {
        __itemTemplate: __alloyId2
    });
    Alloy.createController("templates/spacer", {
        __itemTemplate: __alloyId2
    });
    $.__views.openSection = Ti.UI.createListSection({
        headerTitle: "open",
        id: "openSection"
    });
    var __alloyId12 = [];
    __alloyId12.push($.__views.openSection);
    var __alloyId14 = [];
    $.__views.__alloyId15 = {
        template: "spacerTemplate",
        properties: {
            id: "__alloyId15"
        }
    };
    __alloyId14.push($.__views.__alloyId15);
    $.__views.spacerSection = Ti.UI.createListSection({
        id: "spacerSection"
    });
    $.__views.spacerSection.items = __alloyId14;
    __alloyId12.push($.__views.spacerSection);
    $.__views.completedSection = Ti.UI.createListSection({
        headerTitle: "completed",
        id: "completedSection"
    });
    __alloyId12.push($.__views.completedSection);
    $.__views.todolist = Ti.UI.createListView({
        sections: __alloyId12,
        templates: __alloyId2,
        id: "todolist",
        width: "90%",
        height: "80%",
        backgroundColor: "white",
        defaultItemTemplate: "openTemplate"
    });
    $.__views.index.add($.__views.todolist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var openItems = [ {
        desc: {
            text: "put the rubbish out"
        },
        priority: {
            text: "high"
        }
    } ];
    var completedItems = [ {
        desc: {
            text: "put the cat out"
        },
        priority: {
            text: "high"
        }
    } ];
    $.openSection.setItems(openItems);
    $.completedSection.setItems(completedItems);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;