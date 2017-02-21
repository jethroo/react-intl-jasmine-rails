// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs

//= require 'react_components/dashboard'
//= require 'react_components/my_component'
//= require 'react_components/i18n_wrapper'

var locale_de = window.locale_de = global.locale_de  = require('react-intl/locale-data/de')
var ReactIntl = window.ReactIntl = global.ReactIntl = require('react-intl');

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and patch the constructors we need with the polyfill's.
      var IntlPolyfill    = require('intl');
      Intl.NumberFormat   = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl');
  require('intl/locale-data/jsonp/en.js');
}
