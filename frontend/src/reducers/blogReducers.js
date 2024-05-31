import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/blogConstants";

export const blogsReducer = (state = { blog: [] }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
      return {
        loading: true,
        blog: [],
      };

    case ALL_BLOG_SUCCESS:
      return {
        loading: false,
        blog: action.payload.blog,
      };

    case ALL_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const blogDetailsReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BLOG_DETAILS_SUCCESS:
      return {
        loading: false,
        blog: action.payload,
      };
    case BLOG_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
