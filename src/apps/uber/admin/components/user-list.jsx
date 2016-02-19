
MyComponents.User = React.createClass({
 render: function() {
   return (
         <p>{this.props.user.name}</p>
   );
 }
});


MyComponents.UserList = React.createClass({
  render: function() {

    var users = this.props.users.map(function(u,i){
      if (u.status === "online"){
        return <MyComponents.User user={u} key={i}/>
      }
    })

    return (
      <div>
      	<h3>Clients</h3>
        	{users}
      </div>
    );
  }
});