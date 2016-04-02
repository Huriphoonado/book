class SongForm extends React.Component {
  render(){
    if (this.props.user) {
      return(
        <footer className="page-footer blue-grey darken-4">
            <div className="container">
              <div className="row">
                <div className="col m12 s12"><h5 className="white-text">Suggest a Song</h5></div>
                <div className="input-field col m4 s12">
                  <input placeholder="Song Name (Required)" id="songName" type="text" className="validate white-text"/>
                </div>
                <div className="input-field col m3 s12">
                  <input placeholder="Artist (Required)" id="artist" className="validate white-text" type="text"/>
                </div>
                <div className="file-path-wrapper input-field col m3 s12">
                  <input placeholder="Album (Optional)" id="album" className="file-path validate white-text" type="text"/>
                </div>
                <div className="card-action col m2 s12">
                  <a className="waves-effect waves-light btn-large grey darken-3" onClick={this.props.actions.submitSong}>SUBMIT</a>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2016 JUKEBOX
              <a className="grey-text text-lighten-4 right" href="http://williepayne.com">Willie Payne</a>
              </div>
            </div>
        </footer>
      );
    }
    else {
      return(
        <footer className="page-footer blue-grey darken-4">
            <div className="container">
              <div className="row">
                <div className="col m12 s12"><h5 className="white-text">Suggest a Song</h5></div>
                <div className="input-field col m4 s12">
                  <input placeholder="Song Name (Required)" id="songName" type="text" className="validate white-text"/>
                </div>
                <div className="input-field col m3 s12">
                  <input placeholder="Artist (Required)" id="artist" className="validate white-text" type="text"/>
                </div>
                <div className="file-path-wrapper input-field col m3 s12">
                  <input placeholder="Album (Optional)" id="album" className="file-path validate white-text" type="text"/>
                </div>
                <div className="card-action col m2 s12">
                  <a className="waves-effect waves-light btn-large grey darken-3" onClick={this.props.actions.login}>Login</a>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2016 JUKEBOX
              <a className="grey-text text-lighten-4 right" href="http://williepayne.com">Willie Payne</a>
              </div>
            </div>
        </footer>
      )
    }
  }
}

MyComponents.SongForm = SongForm
