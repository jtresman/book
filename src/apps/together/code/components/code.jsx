class CodeView extends React.Component {

    componentDidMount() {
        var firepadRef = new Firebase('https://hello-jtresman.firebaseio.com/code/');
        var editor = ace.edit('firepad-container');
        var firepad = Firepad.fromACE(firepadRef, editor);
        editor.getSession().setMode("ace/mode/javascript");
    }
    
    render(){

        return <div> <div className="container">
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
