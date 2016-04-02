class NavBar extends React.Component {

  render(){
    //actions.logged set appropriately in the data.jsx file
    if(this.props.actions.logged==true) {
      return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue-grey darken-4">
              <div className="container">
                <a href="#" className="brand-logo center">J U K E B O X</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="../">User</a></li>
                  <li className="active"><a href="#">Admin</a></li>
                  <li><a href="#" onClick={this.props.actions.logout}>Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }

    else {
      return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue-grey darken-4">
              <div className="container">
                <a href="#" className="brand-logo center">J U K E B O X</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="../">User</a></li>
                  <li className="active"><a href="#">Admin</a></li>
                  <li><a href="#" onClick={this.props.actions.login}>Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }

}
MyComponents.NavBar = NavBar
