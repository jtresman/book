MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        <ul className="collection">
          <li className="collection-header"><h4>{this.props.city.name}</h4></li>
          <li className="collection-item">Temperature: {this.props.city.temp}  <span>&deg;</span>F</li>
          <li className="collection-item">Summary: {this.props.city.summary}</li>
        </ul>
         
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
