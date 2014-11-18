var update = function() {
    var openItems = [],
        completedItems = [],
        savedItems,
        totalOpen,
        totalClosed;
    $.openSection.setItems(Alloy.Collections.todo.getOpen());
    $.completedSection.setItems(Alloy.Collections.todo.getCompleted());
    $.openSection.headerTitle = Alloy.Collections.todo.open().length + ' open items';
    $.completedSection.headerTitle = Alloy.Collections.todo.completed().length + ' completed items';
    /**
     * change the completed item template
     */
    var items = $.completedSection.getItems();
    var count = 0;
    _.each(items, function(item) {
        item.template = 'closedTemplate';
        $.completedSection.updateItemAt(count, item);
        count++;
    });
};
/**
 * listeners
 */
$.newentry.addEventListener('return', function(e) {
    var desc = e.value,
        newTodo;
    newTodo = Alloy.createModel('todo', {
        'desc' : desc,
        'priority' : 'high'
    });
    newTodo.save();
    Alloy.Collections.todo.add(newTodo);
    //clear the textfield
    $.newentry.value = '';
});
Alloy.Collections.todo.on("add", update);
Alloy.Collections.todo.on('change', update);
/**
 * itemclick listener
 */
$.todolist.addEventListener('itemclick', function(e) {
    /**
     * completed defaults to false, onclick it toggles and view is updated
     */
    var item,
        model;
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = Alloy.Collections.todo.get(item.alloy_id.text);
    model.toggle();
});

//finally load the page
update();
$.index.open();