import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from './../Card/VideoCard';

const Videos = ({videos}) => (
  <ul>
    {videos.map((video, i) =>
      <VideoCard video={video} id={i}/>
    )}
  </ul>
)
Videos.propTypes = {
  videos: PropTypes.array.isRequired
}

export default Videos
