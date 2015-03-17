/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-plottable',

  included: function(app) {
    this._super.included(app);

    var options = app.options.emberHighCharts || {includePlottableJS: true};

    if (options.includePlottableJS) {
      app.import('vendor/d3.min.js');
      app.import('vendor/plottable.min.js');
      app.import('vendor/plottable.css');
    }

  }
};
