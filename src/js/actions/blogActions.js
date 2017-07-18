import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const getBlogs = (data, page = 1, perPage = 10) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_BLOG,
    receiveType: actionTypes.RECEIVE_GET_BLOG,
    failType: actionTypes.FAIL_GET_BLOG
  });
  
  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented getting blogs',
    caller: 'blog',
    route: `/blogs?page=${page}&per_page=${perPage}`,
    requestMethod: 'GET'
  });
}

