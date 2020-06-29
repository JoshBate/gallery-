import React, { Component } from 'react';
import './homepage.css';
import Mayan from './Mayan.jpg';

class Home extends Component {
  render () {
    return(
      <div className= "homepage">
        <section className="mayan">
          <img src={Mayan} />
        </section>
      </div>
    );
  }
  // render() {
  //   return (
  //     <reactCSSTransitionGroup
  //       transitionName="example"
  //       transitionAppear={true}
  //       transitionAppearTimeout={500}
  //       transitionEnter={false}
  //       transitionLeave={false}>
  //       <h1>Fading at Initial Mount</h1>
  //     </reactCSSTransitionGroup>
  //   );
  // }
}

export default Home;
