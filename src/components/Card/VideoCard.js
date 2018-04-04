import React, { Component } from 'react';

class VideoCard extends Component {
    render() {
        let modalId = 'bd-example-modal-lg'+this.props.id 
        let modalTarget = '#'+modalId 
        return (
                <div>
                    <div className="card">
                        <a data-toggle="modal" data-target={modalTarget} > <img className="card-img-top" src={this.props.video.thumbnail} /></a>
                        <div className="card-body">
                        <a data-toggle="modal" data-target={modalTarget} ><h5 className="card-title">{this.props.video.title}</h5></a>
                        </div>
                    </div>
                    <div className="modal fade" id={modalId} role="dialog">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{this.props.video.title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src={this.props.video.url}></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                );
    }
}
export default VideoCard;

