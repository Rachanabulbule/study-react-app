import React from 'react';
import {Media} from 'reactstrap'

function RenderMenuComponent({topic,onClick}){
    return(
        <Media  tag="li">
        <Media left middle onClick={()=>onClick(topic)}>
            <Media object height={120} width={120} src={topic.image} alt={topic.name}/>
        </Media>
        <Media body className="ml-5">
          <Media heading>{topic.name}</Media>
          <p>{topic.description}</p>
        </Media>
      </Media>
    )
}

const Menu = (props)=>{
    const menu = props.topics.map((topic)=>{
        return(
            <div key={topic.id} className="col-12 mt-5">
            <RenderMenuComponent topic={topic} onClick={props.onClick} />
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
export default Menu