import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      deleteItem(item) {
          item.destroyRecord();
      }
    }
});
