// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [37.78, -122.41], // San Francisco
  premProviders: [],
  stdProviders: [],
  user: null
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  )
}

//
// DATA
//

var firebaseRef = new Firebase('https://cookit.firebaseio.com/')

// Real-time Data (load constantly on changes)
firebaseRef.child('providers/premium')
  .on('value', function(snapshot){

    data.premProviders = _.values(snapshot.val())

    render()

  })

firebaseRef.child('providers/standard')
  .on('value', function(snapshot){

    data.stdProviders = _.values(snapshot.val())

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
      actions.logged = false
      actions.loggedFB = false
    } else {
      actions.logged = true
      actions.loggedFB = false
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        username: authData.github.username,
        id: authData.github.id,
        status: 'online',
        pos: data.center  // position, default to the map center
      }

      var userRef = firebaseRef.child('users').child(user.username)

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

actions.loginFB = function(){

  firebaseRef.authWithOAuthPopup("facebook", function(error, authData){

    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
      actions.loggedFB = false
      actions.logged = false
    } else {
      actions.loggedFB = true
      actions.logged = false
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        displayName: authData.facebook.displayName,
        id: authData.facebook.id,
        pos: data.center,
        status: "online"  // position, default to the map center
      }

      var userRef = firebaseRef.child('users').child(user.displayName)

      
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

    actions.logged = false
    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()
  }
}
actions.logoutFB = function(){

  if (data.user){

    actions.loggedFB = false
    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.displayName)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()

  }

}
