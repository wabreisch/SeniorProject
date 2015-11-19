Router.configure({ // define some default templates
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/onoff/', {name: 'onoff'});
Router.route('/instructorportal/', {name: 'instructorPortal'});
Router.route('/studentportal/', {name: 'studentPortal'});