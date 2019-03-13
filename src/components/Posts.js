import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsAction';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  // componentDidMount() {
  //   /** 
  //    * Need to fetch data from URL 
  //    * Url : https://jsonplaceholder.typicode.com/posts
  //    * */
  //   const postUrl = 'https://jsonplaceholder.typicode.com/posts';
  //   fetch(postUrl)
  //     .then(resp => resp.json())
  //     .then(data => (
  //       this.setState({ posts: data })
  //     ))
  // }

  componentDidMount() {
    /** calling redux fetch api */
    this.props.fetchPosts();
  }

  render() {
    // const { posts } = this.state;
    const { posts } = this.props;
    // console.log('>>>>> posts', posts);
    const postList = posts.map(post => (
      <Fragment key={post.id}>
        <strong>{post.title}</strong>
        <p>{post.body}</p>
      </Fragment>
    ))
    return (
      <div>
        <h2>Posts</h2>
        {postList}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
}

const reduceStateToComponentProps = state => ({
  posts: state.postsData.data
});

export default connect(reduceStateToComponentProps, { fetchPosts })(Posts);
