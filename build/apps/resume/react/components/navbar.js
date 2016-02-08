MyComponents.NavBar = React.createClass({
    render: function() {
        return (
            < nav className = "blue-grey darken-1 " >
            < div className = "nav-wrapper" >
            < a href = "#"
            className = "brand-logo" > Jacob Resman < /a> < ul id = "nav-mobile"
            className = "right hide-on-med-and-down" >
            < li > < a href = "#skills-heading" > Skills < /a></li >
            < li > < a href = "#tasks-heading" > Tasks < /a></li >
            < li > < a href = "#cities-heading" > Cities < /a></li >
            < /ul> < /div> < /nav>
        );
    }
});