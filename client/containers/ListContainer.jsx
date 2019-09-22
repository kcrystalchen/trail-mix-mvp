/**
 * ************************************
 *
 * @module  ListContainer
 * @author
 * @date
 * @description stateful component that renders ListDisplay and TrainContainer
 * ************************************
 */
import React, { Component } from "react";
import ListDisplay from "../components/ListDisplay.jsx";
import TrailContainer from "./TrailContainer.jsx";


class ListContainer extends Component {

    
    render() {

            const trails = this.props.trailData.map((trail, idx) => {
                
                return (
                    <ListDisplay id={idx} key={idx}
                    name = {trail.name}
                    location = {trail.location}
                    length = {trail.length}
                    difficulty = {trail.difficulty} 
                    id = {trail.id}
                    trailData = {this.props.trailData}/>
                )
            })
           
            return (
                < div className="listDisplay">
                    {trails}
                </div >
            ) 
       
        

}
}

export default ListContainer;