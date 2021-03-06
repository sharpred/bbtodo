//fetch the up to date data
var todo = Alloy.Collections.todo;
todo.fetch();
//$.closedSection.headerTitle = todo.completed().length + ' completed items';
$.openSection.headerTitle = todo.open().length + ' open items';

function filterOpen(collection) {
    var open = collection.open();
    return open;
};

function filterClosed(collection) {
    var closed = collection.completed();
    return closed;
};

_.each(['add', 'change:completed', 'destroy'], function(event) {
    todo.on(event, function() {
        var completedCount,
            openCount;
        completedCount = todo.completed().length;
        openCount = todo.open().length;
        console.log(event + ' fired');
        //$.closedSection.headerTitle = completedCount + ' completed items';
        $.openSection.headerTitle = openCount + ' open items';
    });
});

$.newentry.addEventListener('return', function(e) {
    var desc,
        newTodo;
    desc = e.value;
    if (desc) {
        newTodo = Alloy.createModel('todo', {
            'desc' : desc,
            'priority' : 'high'
        });
        newTodo.save();
        todo.add(newTodo);
        $.newentry.value = '';
    }
});

_.each(['itemclick', 'delete'], function(event) {
    $.todolist.addEventListener(event, function(e) {
        var item,
            model;
        item = $[e.section.id].getItemAt(e.itemIndex);
        model = todo.get(item.alloy_id.text);
        if (event && event === "delete") {
            model.destroy();
        } else {
            model.toggle();
        }
    });
});

$.index.open();

// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
    $.destroy();
});