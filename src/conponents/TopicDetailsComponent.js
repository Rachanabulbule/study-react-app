import React, { Component } from 'react'
import { Media } from 'reactstrap'
import YouTube from '@u-wave/react-youtube';

class TopicDetails extends Component {

    renderTopic(topic) {
        if (topic != null)
            return (
                <div><hr color="#008000" />
                    <Media >
                        <Media object src={topic.image} alt={topic.name} />
                        <Media body>
                            <Media heading>{topic.name}</Media>
                            <p>{topic.description}</p>
                            <YouTube height="300" width="500" video="ml7sLpUtEYM" />
                        </Media>
                    </Media></div>
            )
        else
            return (
                <div></div>
            );
    }
    render() {
        const topic = this.props.topicDetail
        return (
            <div className="col-12">
                {this.renderTopic(topic)}
            </div>
        )
    }
}
export default TopicDetails