import React, { Component } from 'react';
import styles from './slider.scss';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerFlag: true,
      slidePhotoList: [
        '/img/site_top/slide/image01.jpg',
        '/img/site_top/slide/image02.jpg',
        '/img/site_top/slide/image03.jpg',
        '/img/site_top/slide/image04.jpg',
        '/img/site_top/slide/image05.jpg'
      ]
    };
    this.timer = null;
  }

  componentWillMount() {
    this.props.actions.setSlider(this.state.slidePhotoList.length);

    this.startTimer = () => {
      if(this.state.timerFlag){ clearInterval(this.timer); }
      this.timer = setInterval(() => {
        this.props.actions.nextSlider();
      }, 7000);
      this.setState({
        timerFlag: true
      });
    };
    this.startTimer();
  }

  componentWillUnmount() {
    if(this.state.timerFlag){ clearInterval(this.timer); }
    this.setState({
      timerFlag: false
    });
  }

  render() {
    return (
      <div className={styles.sliderWrap}>
        <div className={styles.slider}>
          <CSSTransitionGroup
            component="div"
            transitionName="slider"
            transitionAppear={true}
            transitionAppearTimeout={7000}
            transitionEnter={true}
            transitionEnterTimeout={7000}
            transitionLeave={true}
            transitionLeaveTimeout={1000}>
            <div
              key={this.state.slidePhotoList[this.props.index]}
              className={styles.slide}
              style={{backgroundImage: 'url(' + this.state.slidePhotoList[this.props.index] + ')'}}>
            </div>
          </CSSTransitionGroup>
        </div>
        <div className={styles.textWrap}>
          <CSSTransitionGroup
            component="div"
            transitionName="sliderText"
            transitionAppear={true}
            transitionAppearTimeout={3000}
            transitionEnter={false}
            transitionLeave={false}>
            <div className={styles.text}><span className={styles.textCatch}>こんな高校を待っていた！</span><br />時代を先取りした、まったく新しいゼミ学習の学校です。</div>
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}
