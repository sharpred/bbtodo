//fetch the up to date data
var todo = Alloy.Collections.todo;
todo.fetch();
$.closedSection.headerTitle = todo.completed().length + ' completed items';
$.openSection.headerTitle = todo.open().length + ' open items';

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
    transform.template = '';
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
        $.closedSection.headerTitle = todo.completed().length + ' completed items';
        $.openSection.headerTitle = todo.open().length + ' open items';
    });
});

$.todolist.addEventListener('itemclick', function(e) {
    var item,
        model;
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = todo.get(item.alloy_id.text);
    model.toggle();
});

$.index.open();

// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
    $.destroy();
});