import React from 'react';
import './App.css';
import Work from './Work.js';
import TypeIt from 'typeit';
import sun from './sun.png';
import moon from './moon.png';
import Tilt from 'react-tilt';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isWorkClicked: false,
    }
  }

  componentDidMount() {
    new TypeIt('#replaceStrings', {
      strings: ["¡hola!", "నమస్కారం", "hi!"],
      speed: 150,
      deleteSpeed: 150,
      lifeLike: true,
      breakLines: false,
      waitUntilVisible: true,
      cursor: false
    }).go();
  }

  onNameClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  onWorkClick = () => {
    this.setState({
      isWorkClicked: !this.state.isWorkClicked,
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.isClicked ? "#243447" : "#FFFFFF"}}>
        {
          this.state.isWorkClicked ?
            <div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <a href="#" onClick={this.onWorkClick}>
                  <h3 id="work" className="orange-text" style={{ fontWeight: 700, fontSize: 20, margin: 0, paddingTop: 25, paddingRight: 25 }}>
                    {this.state.isWorkClicked ? "about": "work"}
                  </h3>
                </a>
              </div>
              <Work isClicked={this.state.isClicked} />
            </div>
              :
            <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <img style={{ paddingTop: 25, paddingLeft: 25 }} onClick={this.onNameClick} src={this.state.isClicked ? moon : sun} alt="sun" height='30' width='30' />
              <a href="#" onClick={this.onWorkClick}>
                <h3 id="work" className="orange-text" style={{ fontWeight: 700, fontSize: 20, margin: 0, paddingTop: 25, paddingRight: 25 }}>
                  {this.state.isWorkClicked ? "about": "work"}
                </h3>
              </a>
            </div>
              <header className="App-header" style={{backgroundColor: this.state.isClicked ? "#243447" : "#FFFFFF"}}>
                <Tilt className="Tilt" options={{ max : 35 }}>
                <div className="masthead Tilt-inner">
                  <h2>
                    <span id="name" className="blue-text">rahul sompuram</span>
                    <br/>
                    {/*<small style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>designer. developer. doer.</small>*/}
                  </h2>
                </div>
                </Tilt>
              </header>
              <div className="main-container" style={{ paddingRight: 25, paddingLeft: 25 }}>
                <div className="about">
                  <h3 id="replaceStrings">hi!</h3>
                  <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>I'm Rahul, a product manager working on user growth at <span className="blue-text"><a id="underline" href="https://www.redfin.com/" target="_blank" rel="noopener noreferrer">Redfin</a></span>. I graduated from the University of Pennsylvania with a degree in computer science and economics.
                  In the past, I was a <span><a id="underline" href="http://fellows.kleinerperkins.com/meet-the-fellows" target="_blank" rel="noopener noreferrer">Kleiner Perkins Engineering Fellow</a></span> at <span><a id="underline" href="https://www.betterworks.com" target="_blank" rel="noopener noreferrer">BetterWorks</a></span>.
                  I started <span className="blue-text"><a id="underline" href="https://www.34st.com/article/2019/02/ego-rahul-sompuram-buzzhealth" target="_blank" rel="noopener noreferrer">Raft Health (formerly Buzz Health)</a></span>, a mobile resource app for patients with serious or chronic conditions and their supporters. We were grantees of
                  the 1517 Fund, finalists for Y-Combinator's W'19 batch, and worked with a couple of the top U.S. pediatric hospitals. </p>
                  <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>In my free time, I enjoy swinging my racquet on the <span style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}} className="gray-text">tennis</span> courts, playing my <span style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}} className="gray-text">saxophone</span> (jazz, funk, neo-soul),
                  and <span style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}} className="gray-text">traveling</span> to new places (RIP ~covid~).</p>
                  <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>I love connecting with fellow explorers, creators, and dreamers so please don't hesitate to reach out!</p>
                  <p style={{color: this.state.isClicked ? "#FFFFFF" : "#585858"}} className="connect"><span><a id="underline" href="https://www.linkedin.com/in/rahulsompuram" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>, <span><a id="underline" href="https://github.com/rahulsompuram" target="_blank" rel="noopener noreferrer">Github</a></span>, <span><a id="underline" href="https://twitter.com/rahul_sompuram" target="_blank" rel="noopener noreferrer">Twitter</a></span></p>
                </div>
                <div style={{ paddingTop: 5, paddingBottom: 25, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h4 style={{ fontStyle: "italic", fontWeight: 600, fontFamily: 'Inter', color: this.state.isClicked ? "#FFFFFF" : "#585858"}}>Currently listening to: <span style={{ fontWeight: 500 }}>JEWELZ - Anderson Paak</span></h4>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}
