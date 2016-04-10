class CodeView extends React.Component {

    constructor() {
        super();
        this.state = {language: ""};
    }

    componentDidMount() {
        var firepadRef = new Firebase('https://hello-jtresman.firebaseio.com/code/');
        this.editor = ace.edit('firepad-container');
        var firepad = Firepad.fromACE(firepadRef, this.editor);
        this.editor.getSession().setMode(this.props.data.codeLang);
    }

    componentDidUpdate() {
        //console.log("Changed Lang!");
        if (this.props.data.codeLang != this.state.language) {
            console.log(this);
            this.editor.getSession().setMode(this.props.data.codeLang);
            this.setState({language: this.props.data.codeLang});
        }
    }
    
    render(){

        return <div id="code"> <div className="container">
            <div className="row">
                <div className="col s5">
                    <iframe id="gitter" src="https://gitter.im/nicot/book/~embed"></iframe>
                </div>
                <div className="col s7">
                    <div id="firepad-container"></div>
                </div>
            </div>
        </div></div>;
    }

}

MyComponents.CodeView = CodeView;
