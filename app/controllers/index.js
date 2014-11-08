/**
 * fetch the items from the collection and format them for the listview
 */
Alloy.Collections.todo.fetch();
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
        closedItems.push({
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
/**
 * itemclick listener
 */
$.todolist.addEventListener('itemclick', function(e) {
    var item;
    /*
     console.log((e.section.id));
     console.log((e.itemIndex));
     console.log((e.bindId));*/

    item = $[e.section.id].getItemAt(e.itemIndex);
    console.log(JSON.stringify(item));
});

//finally load the page
$.index.open();