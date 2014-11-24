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