var updateUI = function(collection) {
    var items,
        count;
    $.openSection.setItems(collection.getOpenItems());
    $.closedSection.setItems(collection.getCompletedItems());
    $.openSection.headerTitle = collection.open().length + ' open items';
    $.closedSection.headerTitle = collection.completed().length + ' completed items';
    /**
     * change the completed item template
     */
    items = $.closedSection.getItems();
    count = 0;
    _.each(items, function(item) {
        item.template = 'closedTemplate';
        $.closedSection.updateItemAt(count, item);
        count++;
    });
};
function filterOpen(collection) {
    return collection.where({
        completed : 0
    });
};

function filterClosed(collection) {
    return collection.where({
        completed : 1
    });
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
    Alloy.Collections.todo.on(event, function() {
        updateUI(Alloy.Collections.todo);
    });
});



$.todolist.addEventListener('itemclick', function(e) {
    var item,
        model;
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = Alloy.Collections.todo.get(item.alloy_id.text);
    // jshint ignore:line
    model.toggle();
});

$.index.open();
//fetch the up to date data
Alloy.Collections.todo.fetch();