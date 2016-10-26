import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createNewOrder(order) {
            order.save().then(() => {
                this.transitionTo('items.index');
            });
            console.log(this.get('order.item'));
            console.log(this.get('order.customerName'));
            console.log(this.get('order.quantity'));
        },
		selectItem(selectedItemId) {
            // this.set('selectedItemId', selectedItemId);
        	console.log(selectedItemId);
            let item = this.get('store').findRecord('item', selectedItemId);
            this.get('order').set('item', item);
            console.log(this.get('order.item'));
        }

	}
});
