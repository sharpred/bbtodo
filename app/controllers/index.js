var openItems = [{
    desc : {
        text : 'put the rubbish out'
    },
    priority : {
        text : 'high'
    }
}];
var completedItems = [{
    desc : {
        text : 'put the cat out'
    },
    priority : {
        text : 'high'
    }
}, {
    desc : {
        text : 'water the flowers'
    },
    priority : {
        text : 'high'
    }
},{
    desc : {
        text : 'This is a very, very long description that will overrun the text field.  I wonder how it will look.'
    },
    priority : {
        text : 'medium'
    }
}];
$.openSection.setItems(openItems);
$.completedSection.setItems(completedItems);
var items = $.completedSection.getItems();
var count = 0;
_.each(items, function(item) {
    item.template = 'closedTemplate';
    $.completedSection.updateItemAt(count, item);
    count++;
});
$.index.open();