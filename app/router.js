import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items', {path: '/'}, function() {
  });
  this.route('items', {path: 'items'}, function() {
    this.route('new');
    this.route('info',  {path: '/:item_id'});
    this.route('edit');
  });
  // this.route('orders',{path: 'items/:item_id/orders'}, function() {
  //   this.route('new');
  //   // this.route('new-order', {path: 'newOrder'});
  // });
  this.route('orders',{path: 'items/orders'}, function() {
    this.route('new', {path: '/:item_id'});
    this.route('new-order', {path: 'newOrder'});
  });


});

export default Router;
