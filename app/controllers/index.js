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
}];
$.openSection.setItems(openItems);
$.completedSection.setItems(completedItems);
$.index.open();
