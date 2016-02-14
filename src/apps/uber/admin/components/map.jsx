
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){

    const providers = this.props.providers
    const providerElements = _.map(providers, function(p,i){
      return <Marker position={p.pos} key={i}>
        <Popup>
          <span>{JSON.stringify(p)}</span>
        </Popup>
      </Marker>
    })

    let userElement
    if (this.props.user){
      userElement = <CircleMarker center={this.props.user.pos}/>
    } else {
      userElement = ''
    }

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    var token = 'pk.eyJ1Ijoibmljb3QiLCJhIjoiY2lqdnkzbGQyMGRqY3VjbTVwbDNyOGcxaiJ9.-tW3kDrfp15nLw82zErsjg'
    const mapurl = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + token
    return  <Map center={this.props.center}
          zoom={14}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url={mapurl}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {providerElements}
        {userElement}
      </Map>
  }


  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.MapView = MapView
