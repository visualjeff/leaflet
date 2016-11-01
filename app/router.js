import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('leaflet-container');
  this.route('adding-layers');
  this.route('actions-interactions');
  this.route('contextual-components');
});

export default Router;
