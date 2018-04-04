import { combineReducers } from 'redux'
import {
  SELECT_CATEGORY, INVALIDATE_CATEGORY,
  REQUEST_VIDEOS, RECEIVE_VIDEOS
} from '../actions'

const selectedCategory = (state = 'all', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

const videos = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.videos,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const videosByCategory = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
    case RECEIVE_VIDEOS:
    case REQUEST_VIDEOS:
      return {
        ...state,
        [action.category]: videos(state[action.category], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  videosByCategory,
  selectedCategory
})

export default rootReducer
