if (Meteor.isClient) {
  Template.rest.events({
    "click #on": function () {
      var start = new Date().getTime();
      var headers = {};
      headers['Access-Control-Allow-Origin'] = '"';
      
      HTTP.get("http://ser491arduino.local/arduino/digital/13/1", headers, function (error, result) {
      // HTTP.get("http://ser491arduino.local/arduino/digital/13/1", {headers: {AccessControlAllowOrigin: '*'}}, function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
        } else {
          return result;
        }
      });
      // HTTP.get("http://ser491arduino.local/arduino/digital/13/1");
    },
    "click #off": function () {
      var start = new Date().getTime();
      HTTP.get("http://ser491arduino.local/arduino/digital/13/0", function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
        } else {
          return result;
        }
      });
    }
  });

  Template.rest.helpers({
  }); 
}

if (Meteor.isServer) {
  Meteor.methods({
    makeRESTCall: function (url) {
      return HTTP.get(url);
    }
  });

  Meteor.startup(function () {
  });
}