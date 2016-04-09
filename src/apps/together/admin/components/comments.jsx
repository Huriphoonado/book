MyComponents.Comment = React.createClass({
  render: function() {
    return (
      <div>
        <div className="chip blue-grey white-text">
          <img src={this.props.discuss.imageURL}/>
          <b>{this.props.discuss.userName}:</b> {this.props.discuss.comment}
        </div>
        <br/> <br/>
      </div>
    );
  }
});

class Comments extends React.Component {
  render(){
    var u = this.props.user
  	var comments = this.props.Comments.map(function(c,i){
      return <MyComponents.Comment discuss={c} key={i} user={u}/>
    })

    if (this.props.user) {
      return (
        <div>
          <div className="card grey hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Discussion</h6></div>
                <div className="progress blue-grey">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
              <div className="row blue-grey darken-4 z-depth-2">
                <div className="input-field col m8 s12">
                  <input placeholder="Your Thoughts" id="comment" className="validate white-text" type="text"/>
                </div>
                <div className="card-action col m4 s12">
                  <a className="waves-effect waves-light btn grey darken-3" onClick={this.props.actions.submitComment}>Post</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="card grey hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Discussion</h6></div>
                <div className="progress blue-grey">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
              <div className="row blue-grey darken-4 z-depth-2">
                <div className="input-field col m8 s12">
                  <input placeholder="Your Thoughts" id="comment" className="validate white-text" type="text"/>
                </div>
                <div className="card-action col m4 s12">
                  <a className="waves-effect waves-light btn grey darken-3" onClick={this.props.actions.login}>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
      $("#scrollable").animate({ scrollTop: 10000}, 100);
    });
  }
}
MyComponents.Comments = Comments
