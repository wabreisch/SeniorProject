TestResults = new Mongo.Collection("testResults");

Meteor.methods({
	insertNewTest: function (testResult) {
		TestResults.insert(testResult);
	}
});