export const REQUEST_VIDEOS = 'REQUEST_VIDEOS'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})

export const invalidateCategory = category => ({
  type: INVALIDATE_CATEGORY,
  category
})

export const requestVideos = category => ({
  type: REQUEST_VIDEOS,
  category
})

export const receiveVideos = (category, json) => ({
  type: RECEIVE_VIDEOS,
  category,
  videos: json,
  receivedAt: Date.now()
})

const fetchVideos = category => dispatch => {
  dispatch(requestVideos(category))
  return fetch(`http://clarified-darts.000webhostapp.com/${category}.php`)
    .then(response => response.json())
    .then(json => dispatch(receiveVideos(category, json)))
}

const shouldFetchVideos = (state, category) => {
  const videos = state.videosByCategory[category]
  if (!videos) {
    return true
  }
  if (videos.isFetching) {
    return false
  }
  return videos.didInvalidate
}

export const fetchVideosIfNeeded = category => (dispatch, getState) => {
  if (shouldFetchVideos(getState(), category)) {
    return dispatch(fetchVideos(category))
  }
}
