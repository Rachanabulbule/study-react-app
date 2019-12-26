import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { TOPICS } from '../shared/topicsDetails'
import TopicDetails from './TopicDetailsComponent'
import Menu from './MenuConponent'

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
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Tutorials</NavbarBrand>
                    </div>
                </Navbar>
                <Menu topics={this.state.topics} onClick={(topic) => this.onTopicSelect(topic)} />
                <TopicDetails topicDetail={this.state.topicSelect} />
            </div>
        )
    }
}
export default Main