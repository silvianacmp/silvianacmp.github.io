import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div className="header-content">
                        <h1>Hi, I'm Silviana</h1>
                    </div>
                </div>
                <div className="body">
                    <div className="about">
                        <h2>Software Engineer with an interest in Natural Language Processing and Structured information representation. </h2>
                        <h3>Currently based in Zürich, working at Google on text-based fact extraction/</h3>
                        <h4>ML enthusiast</h4>
                        <h4>Big data manipulator</h4>
                        <h4>Front End fiddler</h4>
                    </div>
                    <div className="links">
                        <list>
                            <li>
                                <i className="fa fa-linkedin small" aria-hidden="true"></i>
                                <a href="https://www.linkedin.com/in/silviana-ioana-cimpian/" target="_blank">LinkedIn</a>
                            </li>
                            <li>
                                <i className="fa fa-paper-plane large" aria-hidden="true"></i>
                                <a href="mailto:silvianacimpian@gmail.com">Contact</a>
                            </li>
                            <li>
                                <i className="fa fa-github small" aria-hidden="true"></i>
                                <a href="https://github.com/silvianacmp" target="_blank">Github</a>
                            </li>
                        </list>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
