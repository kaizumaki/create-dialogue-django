import React, { Component } from 'react';
import styles from './relatedPosts.scss';

export default class RelatedPosts extends Component {

  componentDidMount()
  {
    this.props.actions.initRelatedPosts();
  }

  render() {
    const listIsExists = this.props.list.length > 0;

    const posts = this.props.list.map((item, index) =>
      <li key={index} className={styles.relatedPostItem}>
        <a href={'/news/' + item.slug} className={styles.relatedPostLink}>
          <div className={styles.relatedPostLinkInner}>
            <div className={styles.relatedPostImgWrap}>
              <div className={styles.relatedPostBgImg} style={{backgroundImage: 'url(' + item._featured_media.source_url + ')'}} />
            </div>
            <div className={styles.relatedPostTitleWrap}>
              <h3 className={styles.relatedPostTitle}>{item.title.rendered}</h3>
              <div className={styles.relatedPostDate}>
                <time dateTime={item.date}>{item.date.split('T')[0].replace(/-/g, '.')}</time>
              </div>
            </div>
          </div>
        </a>
      </li>
    );

    return (
      <div>
        {listIsExists && <aside className={styles.related}>
          <h2 className={styles.relatedTitle}>関連記事</h2>
          <ul className={styles.relatedPostList}>
            {posts}
          </ul>
        </aside>
        }
      </div>
    );
  }
}
