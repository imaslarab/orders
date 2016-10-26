import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://dummy-rails-api-server.herokuapp.com/',
});
