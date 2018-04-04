import React, { Component } from 'react'
import { selectCategory, fetchVideosIfNeeded, invalidateCategory } from './../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Videos from './../../components/Videos/Videos'

class VideosContainer extends Component {
    static propTypes = {
        selectedCategory: PropTypes.string.isRequired,
        videos: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.handleChange(this.props.match.params.cat);
        const {dispatch, selectedCategory} = this.props
        dispatch(fetchVideosIfNeeded(selectedCategory))
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.cat !== this.props.match.params.cat) {
            this.handleChange(nextProps.match.params.cat);
        }
        if (nextProps.selectedCategory !== this.props.selectedCategory) {
            const {dispatch, selectedCategory} = nextProps
            dispatch(fetchVideosIfNeeded(selectedCategory))
        }
    }
    handleChange = nextCategory => {
        this.props.dispatch(selectCategory(nextCategory))
    }

    render() {
        const {selectedCategory, videos, isFetching, lastUpdated} = this.props
        const isEmpty = videos.length === 0
        return (
                <Videos videos={videos} />
                );
    }
}
const mapStateToProps = state => {
    const {selectedCategory, videosByCategory} = state
    const {
        isFetching,
        lastUpdated,
        items: videos
    } = videosByCategory[selectedCategory] || {
        isFetching: true,
        items: []
    }

    return {
        selectedCategory,
        videos,
        isFetching,
        lastUpdated
    }
}
export default connect(mapStateToProps)(VideosContainer)

