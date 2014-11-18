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
            toggle : function() {
                this.save({
                    completed : !this.get('completed')
                });
            }
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
            completed : function() {
                return this.filter(function(todo) {
                    return todo.get('completed');
                });
            },
            open : function() {
                return this.without.apply(this, this.completed());
            }
        });

        return Collection;
    }
};
