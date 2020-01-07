import React, { Component } from 'react';
import _ from 'lodash'
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIsEditing: false,
            storeValue1: props.main,
            storeValue2: props.second,
        }
        this.editItem = this.editItem.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
    }
    editItem = () => {
        this.setState({ userIsEditing: true })
    }
    handleChangeUser(operation, event) {
        if (operation === 'first') {
            this.setState({ storeValue1: event.target.value })
        }
        else {
            this.setState({ storeValue2: event.target.value })
        }
    }
    cancelEventUser = () => {
        this.setState({userIsEditing:false, storeValue1: this.props.main, storeValue2: this.props.second })
    }
    // static getDerivedStateFromProps(props,state){
    //     if(  state.storeValue1 !== props.main || state.storeValue2 !== props.second  ){
    //         return{};
    //     }
    //     else{
    //         return{storeValue1:props.main, storeValue2:props.second}
    //     }
    // }
    handleSaveUser = () =>{
        const {storeValue1,storeValue2}=this.state
       this.props.handleSave(storeValue1,storeValue2,this.props.index)
        this.setState({userIsEditing:false })
    }
    render() {
        var userIsEditing = this.state.userIsEditing
        if (userIsEditing) {
            return (
                    <form >
                        <label>
                            <input type="text" onChange={(event) => this.handleChangeUser('first', event)} value={this.state.storeValue1} />
                            <input type="text" onChange={(event) => this.handleChangeUser('second', event)} value={this.state.storeValue2} />
                        </label>
                        <input type="button" value="save" onClick={this.handleSaveUser} />
                        <input type="button" value="cancel" onClick={this.cancelEventUser} />
                    </form>
            )
            }
        return (
            <div className="mainData">
                <h3>{this.props.main}</h3>
                {this.props.second}<span>
                    {this.props.main && this.props.second && <button type="button" onClick={() => {
                        this.props.deleteItem(this.props.main)
                    }}>Delete</button>}
                </span><button type="button" onClick={this.editItem}>edit</button>
            </div>
        )
    }
}
//export default User;