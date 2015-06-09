Todos.Router.map(function(){
	this.resource('todos', { path: '/'});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('todo');
	},

	actions: {
	    showModal: function(name, model) {
	      this.render(name, {
	        into: 'application',
	        outlet: 'modal',
	        path: '/xyz',
	        model: model
	      });
	    },
	    removeModal: function() {
	      this.disconnectOutlet({
	        outlet: 'modal',
	        parentView: 'application'
	      });
	    }
  	}
});
