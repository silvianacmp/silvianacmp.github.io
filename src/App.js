import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h2>Silviana Cimpian</h2>
                    <h3>Computer Science student</h3>
                </div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/silviana-ioana-cimpian/">LinkedIn</a>
                    <a href="mailto:silvianacimpian@gmail.com">Contact</a>
                </div>
            </div>
        );
    }
}

export default App;
