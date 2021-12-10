import React, { Components } from "react";

export default class PreLoadScreen extends Component {
    constructor(props) {
        super(props);

        this.PreLoadScreen = React.createRef();
    }
    componentDidMount() {
        const PreLoadScreen = this.PreLoadScreen.current;
        window.onload = function() {
            window.setTimeout(fadeout, 2500);
        };

        function fadeout() {
            PreLoadScreen.style.display = "none";
        }
    }
    render() {
        return (
            <div className="preload" id="preload" ref={this.PreLoadScreen}>
                <div className="logo">
                    <h1 className="preloadHeader">Space Project</h1>
                </div>
                <div className="loader-frame">
                    <div className="loader1" id="loader1" />
                    <div className="loader2" id="loader2" />
                </div>
            </div>
        );
    }
}