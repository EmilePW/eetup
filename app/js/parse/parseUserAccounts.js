// Parse User Data
Parse.initialize("6kefATqyYo58aeRFS13uZmZLHZNU2n2Qv2TDKEIf", "27V2QBahDDRH0kf0kgyqwR4Wm6brWzkio5KWQuWZ");

var user = new Parse.User();

user.set("username", "Emile Paffard-Wray");
user.set("password", "123pass");
user.set("email", "emilepw@hotmail.co.uk");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});