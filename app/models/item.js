import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  orders: DS.hasMany('order')
});
