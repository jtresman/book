class CodeView extends React.Component {

    componentDidMount() {
        var firepadRef = new Firebase('https://hello-jtresman.firebaseio.com/code/');
        var editor = ace.edit('firepad-container');
        var firepad = Firepad.fromACE(firepadRef, editor);
        var l = this.props.data.codeLang;
        console.log(this.props.data.codeLang);
        editor.getSession().setMode(this.props.data.codeLang);
    }

    componentDidUpdate() {
        // var firepadRef = new Firebase('https://hello-jtresman.firebaseio.com/code/');
        // var editor = ace.edit('firepad-container');
        // var firepad = Firepad.fromACE(firepadRef, editor);
        // var l = this.props.data.codeLang;
        // editor.getSession().setMode(this.props.data.codeLang);
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
