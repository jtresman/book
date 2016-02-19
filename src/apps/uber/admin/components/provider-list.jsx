
MyComponents.Provider = React.createClass({
 render: function() {
   return (

        <tr>
          <td>{this.props.provider.name}</td>
          <td>{JSON.stringify(this.props.provider.gas)}</td>
          <td>{JSON.stringify(this.props.provider.winwash)}</td>
          <td>{JSON.stringify(this.props.provider.jump)}</td>
          <td>{JSON.stringify(this.props.provider.airfresh)}</td>
          <td>{JSON.stringify(this.props.provider.vacuum)}</td>
        </tr>


   );
 }
});


MyComponents.ProviderList = React.createClass({
  render: function() {

    var providers = this.props.providers.map(function(p,i){
      return <MyComponents.Provider provider={p} key={i}/>
    })

    return (
      <div>
        <h3>Providers</h3>
        <table>
          <thead>
            <tr>
              <th data-field="name">Name</th>
              <th data-field="gas">Gas</th>
              <th data-field="winwash">Windwhield Wiper Fluid</th>
              <th data-field="jump">Car Jump</th>
              <th data-field="airfresh">Oil Change</th>
              <th data-field="vacuum">Car Cleaning</th>
            </tr>
          </thead>
          <tbody>
            {providers}
          </tbody>
        </table>
      </div>
    );
  }
});

