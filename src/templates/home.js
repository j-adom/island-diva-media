import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {getPages, Link, safePrefix} from '../utils';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img')} />
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                <article className="post page post-full">
                    <header className="post-header">
                      <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                    <div className="post-content">
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                      <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                        className="contact-form">
                        <p className="screen-reader-text">
                          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Name *</label>
                          <input type="text" name="name" placeholder="Your name..." className="form-input"/>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Email *</label>
                          <input type="email" name="email" placeholder="Your email address..." className="form-input"/>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Message *</label>
                          <textarea name="message" placeholder="Your message..." className="form-textarea" rows="7" />
                        </p>
                        <input type="hidden" name="form-name" value="contactForm" />
                        <p className="form-row">
                          <button type="submit" className="button">Send Message</button>
                        </p>
                      </form>
                    </div>
                  </article>
                  {/* <div className="post-feed">
                    {_.map(display_posts, (post, post_idx) => (
                    <article key={post_idx} className="post">
                      <header className="post-header">
                        <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                        <div className="post-meta">
                          Published on <time className="published"
                            dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                      </header>
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <div className="post-content">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      </div>
                      <p className="read-more">
                        <Link className="read-more-link" to={safePrefix(_.get(post, 'url'))}>Keep reading <span className="icon-arrow-right" aria-hidden="true" /></Link>
                      </p>
                    </article>
                    ))}
                  </div> */}
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img')} />
              </div>
            </Layout>
        );
    }
}
