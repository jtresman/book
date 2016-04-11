class Needs extends React.Component {
    render() {
        return <div id="needs">
            <h1>What do you need?</h1>
            <form action="#">
                <ul id="items">
                    <li>
                        <input onChange={this.props.actions.needsGas} type="checkbox" id="s1"/>
                        <label htmlFor="s1">Gas</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.needsFluid} type="checkbox" id="s2"/>
                        <label htmlFor="s2">Windshield Fluid</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.needsJump} type="checkbox" id="s3"/>
                        <label htmlFor="s3">Car Jump</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.needsOil} type="checkbox" id="s4"/>
                        <label htmlFor="s4">Oil Change</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.needsClean} type="checkbox" id="s5"/>
                        <label htmlFor="s5">Car Cleaning</label>
                    </li>
                </ul>
            </form>
        </div>;
    }
}

MyComponents.Needs = Needs;
