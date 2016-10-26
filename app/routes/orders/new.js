import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
  	let order= this.get('store').createRecord('order', {
      item: model
    });
    console.log(model);
    controller.set('order', order);
  },
  actions:{
    createOrder(order){
      order.save().then(() => {
        this.transitionTo('items.index');
      });
    }
  }
  
});
