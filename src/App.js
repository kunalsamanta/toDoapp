import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import User from './User';
import { string } from 'prop-types';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // { main: 'jQuary 1.0 released', second: 'Aug 26th,2016' },
      ],
      label1: "",
      label2: "",
      userIsEditing:"",
      predicate: false
    }
    this.handleChange = this.handleChange.bind(this);
    //this.handleChange2 = this.handleChange2.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
   deletEvent = () => {
     const { data } = this.state;
     let newList = data.splice(0,1);
     this.setState({ data:data })
   }
    addEvent = () => {
      //var newArray = this.state.data.slice();
    // newArray.push({main:"hello", second:"1996 23th 06"},{main:"hi",second:"1203 th 1990"});
    this.setState({
      //data: newArray,
      predicate: true
    })
    }
    cancelEvent = () =>{
      this.setState({
        predicate: false
      })
    }
    handleSave = () =>{
      const { data, label1, label2 } =this.state;
      data.push({ main: label1, second: label2 });
      this.setState({data:data, predicate:false})
    }
   /* handleChange (event) {
      this.setState({label1: event.target.value})
    }
    handleChange2(event){
      this.setState({label2: event.target.value})
    }*/
    handleChange (operation,event) {
      if (operation ==='firstLabel'){
        this.setState({label1: event.target.value})
      }
      else {
        this.setState({label2: event.target.value})
      }
    }
    // handleSubmit(event){
    //   const data1 = this.state.data
    //   let saveData = this.state.data
    //   data1.push(saveData)
    //   this.setState({data:data1})
    // }
    deleteItem(key){
      const items= this.state.data.filter(item =>
        item.main !== key);
      this.setState({data: items})
    }
    handleEditSave = (storeVlue1,storeVale2,index) =>{
      const {data} =this.state
      data[index].main=storeVlue1
      data[index].second=storeVale2
      this.setState({data:data})
    }
  render() {
    // const { predicate } = this.state;
    console.log(this.state.data);
    return (
      <div className="App">
          {
            this.state.data.map((users,key) =>  (
              <User
              // deleteItem={key}
              main={users.main}
              second={users.second}
              handleSave={this.handleEditSave}
              index={key}
            />
            ))
          }
         {
           this.state.predicate ?
           (
            <form >
              <label>
                <input type = "text"   onChange = {(event) => this.handleChange('firstLabel', event)} value={this.state.label1} />
                <input type = "text"  onChange={(event) => this.handleChange('secondLable',event)} value={this.state.label2} />
              </label>
               <input type="button" value="save" onClick={this.handleSave} />
              <input type ="button" value ="cancel" onClick = {this.cancelEvent}  />
            </form>
           )
           :
           (null)
         }
         <button onClick={this.deletEvent}>Remove from top</button>
         <button onClick={this.addEvent}>Add</button>
      </div>
    );
  }
}
export default App;
