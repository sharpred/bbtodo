exports.definition = {
    config : {
        columns : {
            "desc" : "TEXT",
            "reminder" : "INTEGER",
            "priority" : "INTEGER",
            "type" : "TEXT",
            "completed" : "INTEGER"
        },
        adapter : {
            type : "sql",
            collection_name : "todo"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
            modelWibble: function() {}
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
            wibble : function() {
            }
        });

        return Collection;
    }
}; 