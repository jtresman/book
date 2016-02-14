
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class ProviderMap extends React.Component {
  render(){
    const providers = this.props.providers
    const providerElements = _.map(providers, function(p,i){
      p.pos = [p.lat, p.lon]
      return <Marker position={p.pos} key={i}>
        <Popup>
          <span>{p.name}</span>
        </Popup>
      </Marker>
    })

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    var token = 'pk.eyJ1Ijoibmljb3QiLCJhIjoiY2lqdnkzbGQyMGRqY3VjbTVwbDNyOGcxaiJ9.-tW3kDrfp15nLw82zErsjg';
        const mapurl = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + token;
        return  <Map center={this.props.center}
                     zoom={13}>
            <TileLayer
                url={mapurl}
                attribution='&copy; <a href="Mapbox.com">Mapbox</a>'/>
        {providerElements}
        </Map>;
  }
}

MyComponents.ProviderMap = ProviderMap;

