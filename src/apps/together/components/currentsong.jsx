
class CurrentSong extends React.Component {
  render(){

  	var currentSong = this.props.currentSong.map(function(s,i){
      return (
		    <a key={i} className="brand-logo center">
          <i className="material-icons left">play_circle_outline</i>
          Now Playing: { s.songName } by { s.artist }
		    </a>
      )
    })

    return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        { currentSong }
        <ul className="right hide-on-med-and-down">
          <li><a href="playlist/" target="_blank"><i className="material-icons left">view_list</i>Make Playlist</a></li>
        </ul>
      </div>
    </nav>
    )
  }

}
MyComponents.CurrentSong = CurrentSong
