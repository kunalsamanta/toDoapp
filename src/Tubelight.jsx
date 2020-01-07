import React from 'react';
class Tubelight extends React.Component{
     constructor(props){
         super(props);
         this.state={
             isOn:props.current
         };
     }


     render(){
         if(this.state.isOn===true){
             return<div>{this.props.colour}</div>;
         }
         else{
             return null;
         }
     }
}
export default Tubelight;