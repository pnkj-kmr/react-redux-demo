import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  /**
   * Fetching data from RESTful API
   */
  // console.log('Actions >>>>>');
  const postUrl = 'https://jsonplaceholder.typicode.com/posts';
  fetch(postUrl)
    .then(resp => resp.json())
    .then(data => {
      // console.log('>>>>> data', data);
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    })
}
