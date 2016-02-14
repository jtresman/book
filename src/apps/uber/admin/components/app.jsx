class App extends React.Component {
  render(){
    return <div>
      <div className="card">
        <h3>Client Map</h3>
        <MyComponents.UserMap users={this.props.data.users} center={this.props.data.center}/>
      </div>
      <MyComponents.UserList users={this.props.data.users}/>
      <div className="card">
        <h3>Provider Map</h3>
        <MyComponents.ProviderMap providers={this.props.data.providers} center={this.props.data.center}/>
      </div>
      <MyComponents.ProviderList providers={this.props.data.providers}/>


    </div>;
  }
}

MyComponents.App = App;
