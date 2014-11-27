var update = function() {
    var items,
        count;
    $.openSection.setItems(Alloy.Collections.todo.getOpenItems());
    $.completedSection.setItems(Alloy.Collections.todo.getCompletedItems());
    $.openSection.headerTitle = Alloy.Collections.todo.open().length + ' open items';
    $.completedSection.headerTitle = Alloy.Collections.todo.completed().length + ' completed items';
    /**
     * change the completed item template
     */
    items = $.completedSection.getItems();
    count = 0;
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
var desc,
newTodo;
desc = e.value;
if (desc) {
newTodo = Alloy.createModel('todo', {
'desc' : desc,
'priority' : 'high'
});
newTodo.save();
Alloy.Collections.todo.add(newTodo);
//clear the textfield
$.newentry.value = '';
}
});


_.each(['add', 'change:completed'], function(event) {
Alloy.Collections.todo.on(event, update);
});

/**
 * itemclick listener
 */

 $.todolist.addEventListener('itemclick', function(e) {
 var item,
 model;
 //get the item from the relevant section
 item = $[e.section.id].getItemAt(e.itemIndex);
 //update the model and persist the update
 model = Alloy.Collections.todo.get(item.alloy_id.text); // jshint ignore:line
 model.toggle();
 });

//finally load the page
//update();
//fetch the up to date data
Alloy.Collections.todo.fetch();
$.index.open();
