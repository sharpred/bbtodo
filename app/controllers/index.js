/**
 * fetch the items from the collection and format them for the listview
 */
Alloy.Collections.todo.fetch();
var update = function() {
    var openItems = [], completedItems = [], savedItems;
    Alloy.Collections.todo.each(function(item) {
        var completed = item.get('completed');
        if (!completed) {
            openItems.push({
                desc : {
                    text : item.get('desc')
                },
                priority : {
                    text : item.get('priority')
                },
                alloy_id : {
                    text : item.get('alloy_id')
                }
            });
        } else {
            completedItems.push({
                desc : {
                    text : item.get('desc')
                },
                priority : {
                    text : item.get('priority')
                },
                alloy_id : {
                    text : item.get('alloy_id')
                }
            });
        }
    });
    $.openSection.setItems(openItems);
    $.completedSection.setItems(completedItems);
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
    var desc = e.value, newTodo;
    newTodo = Alloy.createModel('todo', {
        'desc' : desc,
        'priority' : 'high'
    });
    newTodo.save();
    Alloy.Collections.todo.add(newTodo);
    $.newentry.value = '';
});
Alloy.Collections.todo.on("add", function(item) {
    var desc, priority, newItem;
    desc = item.get('desc');
    priority = item.get('priority');
    alloy_id = item.get('alloy_id');
    newItem = {
        'desc' : {
            text : desc
        },
        'priority' : {
            'text' : priority
        },
        alloy_id : {
            text : alloy_id
        }
    };
    $.openSection.appendItems([newItem]);
});
Alloy.Collections.todo.on('change', update);
/**
 * itemclick listener
 */
$.todolist.addEventListener('itemclick', function(e) {
    /**
     * completed defaults to false, onclick it toggles and view is updated
     */
    var item, model, completed = 0;
    if (e.section.id && e.section.id === 'openSection') {
        completed = 1;
    }
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = Alloy.Collections.todo.get(item.alloy_id.text);
    model.set("completed", completed);
    model.save();
});
$.config.addEventListener('click', function() {
    var menu = Alloy.createController("menu/side").getView();
    menu.open();
});
//finally load the page
update();
$.index.open();