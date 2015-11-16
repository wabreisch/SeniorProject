if (Meteor.isClient) {
  Template.rest.events({
    "click #on": function () {
      var start = new Date().getTime();
      Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
        } else {
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
          return result;
        }
      });
    },
    "click #off": function () {
      var start = new Date().getTime();
      Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/0", function (error, result) {
        // attempt to make an HTTP call to another server and see what
        // type of response time we get
        if (error) {
          // handle error
          console.log("Handling some error...");
        } else {
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
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