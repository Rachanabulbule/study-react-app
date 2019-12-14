import React, {Component} from 'react';
import {Media} from 'reactstrap'

class Menu extends Component{
    
render(){
    const menu = this.props.topics.map((topic)=>{
        return(
            <div key={topic.id} className="col-12 mt-5">
                <Media  tag="li">
                  <Media left middle onClick={()=>this.props.onClick(topic)}>
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
     </div>
    );
  }
}
export default Menu