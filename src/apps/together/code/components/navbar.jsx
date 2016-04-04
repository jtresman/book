class NavBar extends React.Component {

    render(){
        return (
            <nav className="blue darken-2" role="navigation">
                <div className="nav-wrapper container">

                    <a id="logo-container" href="../index.html" className="brand-logo">Code Together</a>
                    
                    <MyComponents.User
                        user={this.props.data.user}
                        loginAction={this.props.actions.login}
                        logoutAction={this.props.actions.logout}/>
                </div>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar;
