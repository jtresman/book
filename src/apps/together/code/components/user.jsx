class User extends React.Component {

    componentDidMount() {
        $(".button-collapse").sideNav();
    }


    render(){

        if (this.props.user){
            var u = this.props.user.name;
            // user is authenticated
            return <div>
                <ul id="slide-out" className="side-nav">
                    <li><a href="../">Home</a></li>
                    <li><a href={"https://github.com/" + u}>{u}</a></li>
                    <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
                    <li className ="active"><a href="index.html">Code</a></li>
                    <li><a href="#!">Users</a></li>
                </ul>
                 <ul className="right hide-on-med-and-down">
                    <li><a href="../">Home</a></li>
                    <li><a href={"https://github.com/" + u}>{u}</a></li>
                    <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
                    <li className ="active"><a href="index.html">Code</a></li>
                    <li><a href="#!">Users</a></li>
                </ul>
                 <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
            </div>;
        } else {
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="../">Home</a></li>
                <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
                <li className ="active"><a href="index.html">Code</a></li>
            </ul>;
        }
    }

}
MyComponents.User = User;

/*

        <nav class="blue darken-2" role="navigation">
        <ul id="slide-out" class="side-nav">
            <li><a href="/">Home</a></li>
            <li><a href="code/">Code</a></li>
            <li><a href="#!">Users</a></li>
        </ul>
        <ul class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="code/">Code</a></li>
            <li><a href="#!">Users</a></li>
        </ul>
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
    </nav>

*/
