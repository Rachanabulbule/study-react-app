import React, { Component } from 'react'
import { TOPICS } from '../shared/topicsDetails'
import TopicDetails from './TopicDetailsComponent'
import Menu from './MenuConponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: TOPICS,
            topicSelect: null
        }
    }

    onTopicSelect(topic) {
        this.setState({
            topicSelect: topic
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Menu topics={this.state.topics} onClick={(topic) => this.onTopicSelect(topic)} />
                <TopicDetails topicDetail={this.state.topicSelect} />
                <Footer />
            </div>
        )
    }
}
export default Main