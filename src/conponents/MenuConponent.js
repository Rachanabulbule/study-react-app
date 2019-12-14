import React, {Component} from 'react';
import {Media} from 'reactstrap'
import TopicDetails from './TopicDetailsComponent'

class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            topicSelect : null
        };
    }

    onTopicSelect(topic) {
        this.setState({
            topicSelect : topic
        });
    }

    // renderTopic(topic){
    //  if(topic != null)
    //  return(
    //      <div><hr color="#008000"/>
    //      <Media >
    //          <Media object src={topic.image} alt={topic.name}/>
    //          <Media body>
    //          <Media heading>{topic.name}</Media>
    //          <p>{topic.description}</p>
    //          <YouTube height="300" width="500" video="ml7sLpUtEYM" />
    //          </Media>
    //      </Media></div>
    //  )
    //  else
    //  return(
    //      <div></div>
    //  );
    // }

render(){
    const menu = this.props.topics.map((topic)=>{
        return(
            <div key={topic.id} className="col-12 mt-5">
                <Media  tag="li">
                  <Media left middle onClick={()=>this.onTopicSelect(topic)}>
                      <Media object height={120} width={120} src={topic.image} alt={topic.name}/>
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{topic.name}</Media>
                    <p>{topic.description}</p>
                  </Media>
                </Media>
            </div>
        )
    });

    return(
     <div className="container">
         <div className="row">
             <Media list>{menu}</Media>
         </div>
             <TopicDetails topicDetail={this.state.topicSelect}/>
     </div>
    );
  }
}
export default Menu