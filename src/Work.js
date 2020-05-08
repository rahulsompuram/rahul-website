import React from 'react';
import './App.css';
import tennis from './tennis.png';
import pennbook from './pennbook.png';
import breadcrumbs from './breadcrumbs.png';
import vidsearch from './vidsearch.png';
import stayhome from './stayhome.png';
import raft from './raft.png';
import award from './award.png';


export default class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: props.isClicked
    }
  }

  render() {
    return (
      <div className="main-container" style={{ paddingRight: 25, paddingLeft: 25 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ alignSelf: 'center', fontFamily: 'Muli', fontWeight: 700, fontSize: 24 }}>
            <h2><span className="blue-text">some work</span></h2>
          </div>
          <div style={{ paddingBottom: 50 }}>
            <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700 }}>Volleys & Returns</h1>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>A web app that allows tennis fans to improve their betting decisions.</h4>
            <img src={tennis} alt="Volleys & Returns" height='100%' width='100%' />
            <br/>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>React, MaterialUI, Express, Pandas, SQL Developer, RDS</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>CIS 550 (graduate databases) final project</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>4</h4>
            <a id="underline-green" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 700 }} href="https://www.youtube.com/watch?v=DahoEc1vf8U&feature=youtu.be" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>

          <div style={{ paddingBottom: 50 }}>
            <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700  }}>Stay Home</h1>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>An iOS game that incentivizes users with rewards to stay home during the COVID-19 pandemic.</h4>
            <img src={stayhome} alt="Stay Home" height='100%' width='100%' />
            <br/>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>Swift5, SwiftUI, Firebase</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Design: </span>Figma</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>Open-source project to help mitigate the spread of COVID-19</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>4</h4>
            <a id="underline-pink" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 700 }} href="https://devpost.com/software/stay-home-pyqn19" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>

          <div style={{ paddingBottom: 50 }}>
            <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700  }}>Raft Health (formerly Buzz Health)</h1>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>A mobile resource app for patients going through serious illnesses and their supporters.</h4>
            <img src={raft} alt="Raft Health" height='100%' width='100%' />
            <br/>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>React Native (for v1), Swift5 (for v2), Firebase</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Design: </span>Figma</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>Passion project and business venture</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>2</h4>
            <a id="underline-purple" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 700 }} href="https://www.34st.com/article/2019/02/ego-rahul-sompuram-buzzhealth" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>

          <div style={{ paddingBottom: 50 }}>
            <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700  }}>Pennbook</h1>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>A scalable Facebook clone with news feed, friend recommendations, messaging, and profile pages.</h4>
            <img src={pennbook} alt="Pennbook" height='100%' width='100%' />
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>React, Semantic UI, Express, Socket IO, Hadoop, Dynamo DB, S3, EC2</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>NETS 212 (scalable & cloud computing) final project</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>3</h4>
          </div>

          <div style={{ paddingBottom: 50 }}>
            <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700  }}>Breadcrumbs</h1>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>A collaborative rich-text editing desktop app that allows users to create, view, edit, and share documents.</h4>
            <img src={breadcrumbs} alt="Breadcrumbs" height='100%' width='100%' />
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>Electron, Semantic UI, Express, Socket IO, MongoDB</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>Horizons School of Technology project</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>4</h4>
          </div>

          <div style={{ paddingBottom: 50 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <h1 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Muli', fontWeight: 700  }}>VidSearch</h1>
              <img src={award} alt="award" height='25' width='25' />
            </div>
            <h4 style={{ fontSize: 18, color: this.state.isClicked ? '#D3D3D3' : '#87898C', fontFamily: 'Inter', fontWeight: 600 }}>A web app that gives users CTRL-F functionality for videos.</h4>
            <img src={vidsearch} alt="VidSearch" height='100%' width='100%' />
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Tech stack: </span>React, Express, Google Speech-to-Text API</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Purpose: </span>Horizons School of Technology hackathon</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Team size: </span>5</h4>
            <h4 style={{ color: this.state.isClicked ? "#FFFFFF" : "#585858", fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}><span style={{ fontWeight: 700 }}>Award: </span>2nd place for "Best Overall"</h4>
            <a id="underline" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 700 }} href="https://drive.google.com/file/d/18zbb3dnpaaiMsMQbcltOG27nVfbG2lag/view" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        </div>
      </div>
    );
  }
}
