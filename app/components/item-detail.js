import Ember from 'ember';
const {
  computed
} = Ember;

export default Ember.Component.extend({
  totalOrders: computed('item.orders', function() {
    let total = 0;
    this.get('item.orders').forEach((order) => {
    	total += order.get('quantity');
    });
    return total;
  }),

  // totalCustomers: computed('item.orders', function() {
  //   let customers = '';
  //   this.get('item.orders').forEach((order) => {
  //   	customers += order.get('customerName') + ' ,';
  //   });
  //   return customers;
  // })
  
});
