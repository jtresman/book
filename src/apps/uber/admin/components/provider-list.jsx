
MyComponents.Provider = React.createClass({
 render: function() {
   return (
   		<div>
   			<h5>{this.props.provider.name}</h5>
   			<p>Gas: {JSON.stringify(this.props.provider.gas)}</p>
   			<p>Windshield Wiper Fluid: {JSON.stringify(this.props.provider.winwash)}</p>
   			<p>Car Jump: {JSON.stringify(this.props.provider.jump)}</p>
   			<p>Oil Change: {JSON.stringify(this.props.provider.airfresh)}</p>
   			<p>Car Cleaning: {JSON.stringify(this.props.provider.vacuum)}</p>
   		</div>

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
        	{providers}
      </div>
    );
  }
});
