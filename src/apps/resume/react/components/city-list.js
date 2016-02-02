MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img src={this.props.city.imageRef} />
                  <span className="card-title">{this.props.city.name}</span>
                </div>
                <div className="card-content">
                  <p>{this.props.city.currentCondition}</p>
                </div>
              </div>
            </div>
            <div className="col s8 m8">
              <p>
              Temperature: {this.props.city.temperature}<br />
              Wind Speed: {this.props.city.windSpeed}<br />
              Humidity: {this.props.city.humidity}<br />
              Cloud Cover: {this.props.city.cloudCover}<br />
              Ozone: {this.props.city.ozone}<br />
              Pressure: {this.props.city.pressure}<br />
              Visibility: {this.props.city.visibility}<br />
              Dew Point: {this.props.city.dewPoint}<br />
              Nearest Storm Distance: {this.props.city.nearestStormDistance}<br />
              Forecast: {this.props.city.forecast}<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {cityElements}
        </div>
      </div>
    );
  }
});
