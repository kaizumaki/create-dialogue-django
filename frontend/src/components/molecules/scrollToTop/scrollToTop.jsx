import React, { Component } from 'react';
import styles from './scrollToTop.scss';
import SmoothScroll from 'smooth-scroll';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.scroll_timer = null;
    this.resize_timer = null;
    this.toTop = this.toTop.bind(this);
    this.smoothScroll = new SmoothScroll('a[href*="#"]');
  }

  toTop() {
    if(this.state.isShow){ this.smoothScroll.animateScroll( 0 ) }
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    window.addEventListener('scroll', ()=>{
      clearTimeout(this.scroll_timer);
      this.scroll_timer = setTimeout(()=>{
        if(this.state.isShow !== window.pageYOffset > this.windowHeight)
        {
          this.setState({
            isShow: !this.state.isShow
          });
        }
      },300)
    },false);

    window.addEventListener('resize', ()=>{
      clearTimeout(this.resize_timer);
      this.resize_timer = setTimeout(()=>{
        this.windowHeight = window.innerHeight;
      },300)
    },false);
  }

  render() {
    return (
      <div className={styles.scrollToTop}>
        <div className={this.state.isShow ? styles.display : styles.toTop} onClick={this.toTop}>
          <img src="/img/common/icon/arrow-up.svg" width="30" height="30" alt="ページトップへ" className={styles.toTopIcon} />
        </div>
      </div>
    );
  }
}

export default ScrollToTop;
