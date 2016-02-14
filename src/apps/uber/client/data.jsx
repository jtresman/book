// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [39.74, -104.99], // Denver
  providers: [],
  user: null,
  needs: []
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {};

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  );
}

//
// DATA
//

var firebaseRef = new Firebase('https://weekfour.firebaseio.com');

// Real-time Data (load constantly on changes)
firebaseRef.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val());
    render()

  })

//
// ACTIONS
//

// Actions
actions.setUserLocation = function(latlng){

  if (data.user){
    firebaseRef
      .child('users')
      .child(data.user.username)
      .child('pos')
      .set([latlng.lat, latlng.lng])
  }
}

actions.login = function(){

  firebaseRef.authWithOAuthPopup("github", function(error, authData){

    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        name: authData.github.username,
        id: authData.github.id,
        status: 'online',
        lat: 39.74,  // position, default to the map center
        lon: -104.99
      }

      var userRef = firebaseRef.child('users').child(user.name)

      // subscribe to the user data
      userRef.on('value', function(snapshot){
        data.user = snapshot.val()
        render()
      })

      // set the user data
      userRef.set(user)

    }
  })

}

actions.logout = function(){

  if (data.user){

    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.name)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()

  }

};

// Add the item if it isn't there, otherwise remove it.
function swap(item){
    var index = data.needs.indexOf(item);
    if (index > -1) {
        data.needs.splice(index, 1);
    } else {
        data.needs.push(item);
    }
}

actions.needsGas = function() {
    swap("gas");
    render();
};

actions.needsFluid = function() {
    swap("fluid");
    render();
};

actions.needsJump = function() {
    swap("jump");
    render();
};

actions.needsOil = function() {
    swap("oil");
    render();
};

actions.needsClean = function() {
    swap("clean");
    render();
};
