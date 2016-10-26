import DS from 'ember-data';

export default DS.Model.extend({
  customerName: DS.attr('string'),
  tableNumber: DS.attr('number'),
  quantity: DS.attr('number'),
  item: DS.belongsTo('item')
});


// me@LFw1f!###
