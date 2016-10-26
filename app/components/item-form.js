import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createItem() {
      // this.get('item').save();
      this.sendAction('createItem', this.get('item'));
    }
  }
});
