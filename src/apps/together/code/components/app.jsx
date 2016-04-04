class App extends React.Component {
    render(){
        return <div>
            <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
            <MyComponents.LangSelector data={this.props.data} actions={this.props.actions}/>
            <MyComponents.CodeView data={this.props.data} actions={this.props.actions}/>
            
        </div>;
    }
}

MyComponents.App = App;

