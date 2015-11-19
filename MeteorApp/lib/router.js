Router.configure({ // define some default templates
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/onoff/', {name: 'onoff'});
Router.route('/portal/', {name: 'portal'});