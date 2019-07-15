import React from 'react';
import './App.css';
import TypeIt from 'typeit';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }

  componentDidMount() {
    new TypeIt('#replaceStrings', {
      strings: ["¡hola!", "నమస్తే", "hi!"],
      speed: 150,
      deleteSpeed: 150,
      lifeLike: true,
      breakLines: false,
      waitUntilVisible: true,
      cursor: false
    }).go();
  }

  onNameClick = (e) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.isClicked ? "#243447" : "#FFFFFF"}}>
        <header className="App-header" style={{backgroundColor: this.state.isClicked ? "#243447" : "#FFFFFF"}}
         onClick={this.onNameClick}>
          <div className="masthead">
            <h2>
              <span id="name" className="blue-text">rahul sompuram</span>
              <br/>
              <small style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>designer. developer. doer.</small>
            </h2>
          </div>
        </header>
        <div className="main-container">
          <div className="about">
            <h3 id="replaceStrings">hi!</h3>
            <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>I'm Rahul, a rising senior at the <span className="blue-text">University of Pennsylvania</span> studying computer science and economics.
            I'm currently a <span><a href="http://fellows.kleinerperkins.com/meet-the-fellows" target="_blank" rel="noopener noreferrer">Kleiner Perkins Engineering Fellow</a></span> working on software engineering and data science projects at <span><a href="https://www.betterworks.com" target="_blank" rel="noopener noreferrer">BetterWorks</a></span>.
            I've started <span className="blue-text"><a href="https://www.34st.com/article/2019/02/ego-rahul-sompuram-buzzhealth" target="_blank" rel="noopener noreferrer">Buzz Health</a></span>, a mobile resource app for patients with serious or chronic conditions and their supporters. We've been grantees of
            the 1517 Fund, finalists for Y-Combinator's W'19 batch, and have received strong interest from top U.S. hospitals. </p>
            <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>In my free time, I enjoy swinging my racquet on the <span className="blue-text">tennis</span> courts, playing my <span className="blue-text">saxophone</span> (jazz, funk, neo-soul),
            and <span className="blue-text">traveling</span> to new places (I most recently road-tripped around all of Iceland).</p>
            <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>My career interests lie in <span className="blue-text">product management</span>, <span className="blue-text">software engineering</span>, and <span className="blue-text">data science</span>. I love connecting with fellow explorers, creators, and dreamers so please don't hesitate to reach out!</p>
            <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}} className="connect"><span><a href="https://www.linkedin.com/in/rahulsompuram" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>, <span><a href="https://github.com/rahulsompuram" target="_blank" rel="noopener noreferrer">Github</a></span>, <span><a href="mailto:me@rahulsompuram.com">Email</a></span></p>
          </div>
        </div>
      </div>
    );
  }
}
