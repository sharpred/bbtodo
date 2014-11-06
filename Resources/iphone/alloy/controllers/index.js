function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "bg/bg.png",
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
    $.__views.newentry = Ti.UI.createTextField({
        width: "90%",
        height: "30",
        id: "newentry",
        color: "black",
        backgroundColor: "white",
        opacity: "0.5",
        hintText: "Add an Item",
        paddingLeft: "10"
    });
    $.__views.index.add($.__views.newentry);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId2"
    });
    var __alloyId4 = {};
    Alloy.createController("templates/openItem", {
        __itemTemplate: __alloyId4
    });
    Alloy.createController("templates/closedItem", {
        __itemTemplate: __alloyId4
    });
    Alloy.createController("templates/spacer", {
        __itemTemplate: __alloyId4
    });
    $.__views.openSection = Ti.UI.createListSection({
        headerTitle: "open items",
        id: "openSection"
    });
    var __alloyId14 = [];
    __alloyId14.push($.__views.openSection);
    var __alloyId16 = [];
    $.__views.__alloyId17 = {
        template: "spacerTemplate",
        properties: {
            id: "__alloyId17"
        }
    };
    __alloyId16.push($.__views.__alloyId17);
    $.__views.spacerSection = Ti.UI.createListSection({
        id: "spacerSection"
    });
    $.__views.spacerSection.items = __alloyId16;
    __alloyId14.push($.__views.spacerSection);
    $.__views.completedSection = Ti.UI.createListSection({
        headerTitle: "completed items",
        id: "completedSection"
    });
    __alloyId14.push($.__views.completedSection);
    $.__views.todolist = Ti.UI.createListView({
        sections: __alloyId14,
        templates: __alloyId4,
        pullView: $.__views.__alloyId2,
        id: "todolist",
        separatorStyle: Titanium.UI.iPhone.ListViewSeparatorStyle.NONE,
        width: "90%",
        height: "300",
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
    }, {
        desc: {
            text: "water the flowers"
        },
        priority: {
            text: "high"
        }
    } ];
    $.openSection.setItems(openItems);
    $.completedSection.setItems(completedItems);
    var items = $.completedSection.getItems();
    var count = 0;
    _.each(items, function(item) {
        item.template = "closedTemplate";
        $.completedSection.updateItemAt(count, item);
        count++;
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;