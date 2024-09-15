// class component
//function component

import React from "react";
import AddUserInfor from "./AddUserInfor"
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    
    state = {
        listUser: [
            {name: "Tu", age: "19"},
            {name : "John", age: "30"},
            {name: "Quang", age: "15"}
        ]
    }

    handleAddNewUser =  (userObj)=>{
        this.setState({
            listUser:[userObj,...this.state.listUser]
        })
    }
    handleDeleteUser = (userName) => {
        let listUserClone = this.state.listUser.filter(item => item.name !== userName);
        
        this.setState({
            listUser: listUserClone
        })
        
    }

    //
    render(){

        return (
        
            < >
                <br></br>
                <AddUserInfor handleAddNewUser = {this.handleAddNewUser}></AddUserInfor>
                <br/><br/>
                <DisplayInfo 
                listUser = {this.state.listUser}
                handleDeleteUser ={this.handleDeleteUser}
                
                ></DisplayInfo>
            </>
        )
 
    }
}

export default MyComponent;