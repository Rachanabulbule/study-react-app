import React, {Component} from 'react';
import {Media} from 'reactstrap'

class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            topics :[
                {
                    id: 0,
                    name: 'Scala',
                    image: "./images/Akka.jpeg",
                    category: 'Programing language',
                    label: "",
                    description: "Scala is a one of the popular programing language with number of features.",
                    },
                {
                    id:1,
                    name:'Play',
                    image: "./images/play.png",
                    category: 'Framework',
                    label: "",
                    description: "Play Framework is an open-source web application framework which follows the model–view–controller architectural pattern.",
                },  {
                    id: 2,
                    name: 'Gatling',
                    image: "./images/gatling.jpeg",
                    category: 'Tool',
                    label: "",
                    description: "Gatling is an open-source load and performance testing framework based on Scala, Akka and Netty. features.",
                },  {
                    id: 2,
                    name: 'ReactJs',
                    image: "./images/reactJs.png",
                    category: 'Library',
                    label: "",
                    description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
                }
            ]
        }

    }
render(){
    const menu = this.state.topics.map(topic=>{
        return(
            <div key={topic.id} className="col-12 mt-5">
                <Media  tag="li">
                  <Media left middle>
                      <Media object src={topic.image} alt={topic.name}/>
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
     </div>
    );
  }
}
export default Menu