import Ember from 'ember';

export default Ember.Route.extend({
	selectedItemId : null,
    setupController(controller, item) {
        let items = this.get('store').findAll('item');
        controller.set('items', items);
    	let order = this.get('store').createRecord('order', {
            item: item
        });
        controller.set('order', order);
    }
    // actions: {
        // createNewOrder(order) {
        //     order.save().then(() => {
        //         this.transitionTo('items.index');
        //     });
        // },
        // selectItem(selectedItemId) {
        //     this.set('selectedItemId', selectedItemId);
        // 	console.log(selectedItemId);
         //    let item = this.get('store').findRecord('item', selectedItemId);
         //    console.log(item);

            // this.get('order').set('item', item);
        // }

    // }

});
