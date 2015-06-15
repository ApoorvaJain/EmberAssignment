window.Todos = Ember.Application.create();

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:9090/TodoAssignmentAPI'
});
