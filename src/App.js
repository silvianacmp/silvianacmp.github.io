import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h2>Silviana Cimpian</h2>
                    <h3>Computer Science student</h3>
                </div>
                <div className="links">
                    <list>
                        <li><i className="fa fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/silviana-ioana-cimpian/">LinkedIn</a></li>
                        <li><i className="fa fa-paper-plane" aria-hidden="true"></i><a href="mailto:silvianacimpian@gmail.com">Contact</a></li>
                    </list>
                </div>
            </div>
        );
    }
}

export default App;
