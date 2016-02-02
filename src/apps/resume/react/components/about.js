MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="../images/RaftPic.png" />
              <span className="card-title black-text">Willie Payne</span>
            </div>
            <div className="card-content">
              <p>Musician, composer, and computer scientist with roots in popular music and a passion for discovering interesting ways to combine music and technology.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/Huriphoonado" className="blue-text">GitHub</a><br />
              <a href="http://williepayne.com" className="blue-text">Personal Website</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
