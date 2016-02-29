class User extends React.Component {

    render(){

        if (this.props.user){
            var u = this.props.user.name;
            // user is authenticated
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="../">Home</a></li>
                <li><a href={"https://github.com/" + u}>{u}</a></li>
                <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
                <li className ="active"><a href="index.html">Client</a></li>
                <li><a href="../admin/index.html">Admin</a></li>
            </ul>;
        } else {
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="../">Home</a></li>
                <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
                <li className ="active"><a href="index.html">Client</a></li>
                <li><a href="../admin/index.html">Admin</a></li>
            </ul>;
        }
    }

}
MyComponents.User = User;

/*

        <nav>
        <div class="nav-wrapper blue-grey darken-1">
          <a href="#" class="brand-logo"> Refresh Your Ride!</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right">
            <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
            <li><a href="client/">Map</a></li>
            <li><a href="admin/">Current Providers</a></li>

          </ul>
        </div>
      </nav>

*/
