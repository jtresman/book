class LangSelector extends React.Component {

    render(){

        return (<div className="row center">
            <div className="col s3 offset-s5">
                <label>Language Selector</label>
                  <select id="lang" className="browser-default" onChange={this.props.actions.updateLanguage}>
                    <option value="ace/mode/javascript">Javascript</option>
                    <option value="ace/mode/python">Python</option>
                    <option value="ace/mode/c">C and C++</option>
                  </select>
            </div>
        </div>);
    }

}
MyComponents.LangSelector = LangSelector
