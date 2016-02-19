class App extends React.Component {
  render(){
    return <div>
      <div className="card">
        <h3>Map</h3>
        <h6>Green dots are active providers, blue dots are active clients</h6>
        <MyComponents.MapView providers={this.props.data.providers} users={this.props.data.users} center={this.props.data.center}/>
      </div>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>


    </div>;
  }
}

MyComponents.App = App;
