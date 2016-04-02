class User extends React.Component {
  	render(){
	    if (this.props.user){
	      	// user is authenticated
	      	return(<div></div>);
	    }
	    else {
	      // user is not set
	      	return(<div></div>);
	    }
  	}
}
MyComponents.User = User
