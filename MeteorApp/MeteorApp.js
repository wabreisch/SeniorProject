if (Meteor.isClient) {
  Template.rest.events({
    "click #on": function () {
      Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
        } else {
          alert(result.content);
          return result;
        }
      });
    },
    "click #off": function () {
      Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/0", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
        } else {
          alert(result.content);
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
      console.log("making REST call on the server");
      return HTTP.get(url);
    }
  });

  Meteor.startup(function () {
  });
}