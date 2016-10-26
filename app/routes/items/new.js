 import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('item');
  },
  actions:{
    createItem(item){
      item.save().then(() => {
        this.transitionTo('items.index');
      });
    }
  }
});

