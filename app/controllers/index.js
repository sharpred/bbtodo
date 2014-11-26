//fetch the up to date data
var todo = Alloy.Collections.todo;
todo.fetch();

/*
 var updateUI = function(collection) {
 var items,
 count;
 $.openSection.setItems(collection.getOpenItems());
 $.closedSection.setItems(collection.getCompletedItems());
 $.openSection.headerTitle = collection.open().length + ' open items';
 $.closedSection.headerTitle = collection.completed().length + ' completed items';

 items = $.closedSection.getItems();
 count = 0;
 _.each(items, function(item) {
 item.template = 'closedTemplate';
 $.closedSection.updateItemAt(count, item);
 count++;
 });
 };*/

function filterOpen(collection) {
    var open = collection.open();
    return open;
};

function filterClosed(collection) {
    var closed = collection.completed();
    return closed;
};

function transformFunction(model) {
    var transform = model.toJSON();
    if (transform.completed === 1) {
        transform.template = "closedTemplate";
    } else {
        transform.template = "openTemplate";
    }
    return transform;
}

_.each(['add', 'change:completed'], function(event) {
    todo.on(event, function() {
        console.log(event + ' fired');
        updateUI();
    });
});

$.todolist.addEventListener('itemclick', function(e) {
    var item,
        model;
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = todo.get(item.alloy_id.text);
    // jshint ignore:line
    model.toggle();
});

$.index.open();

// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
    $.destroy();
});