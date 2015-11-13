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
    // httpGet: function () {
    //   // Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/0")
    //   Meteor.call("makeRESTCall", "http://ser491arduino.local/arduino/digital/13/1", function (error, result) {
    //     if (error) {
    //       // handle error
    //       console.log("Handling some error...");
    //     } else {
    //       console.log(result);
    //       return result;
    //     }
    //   });
    // }
  }); 
}

if (Meteor.isServer) {
  Meteor.methods({
    makeRESTCall: function (url) {
      console.log("making REST call on the server");
      return HTTP.get(url);
    },
    simpleMethod: function () {
      return "Hello :)";
    }
  });

  Meteor.startup(function () {
    // console.log(HTTP.get("http://ser491arduino.local/arduino/digital/13/1"));
  });
}