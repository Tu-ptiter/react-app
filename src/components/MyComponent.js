// class component
//function component

import React from "react";
import UserInfor from "./UserInfor"
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    
    state = {
        listUser: [
            {name: "Tu", age: "19"},
            {name : "John", age: "30"},
            {name: "Quang", age: "15"}
        ]
    }
    //
    render(){


        return (
            <div >
                <UserInfor></UserInfor>
                <br/><br/>
                <DisplayInfo listUser = {this.state.listUser}></DisplayInfo>
            </div>
        )

    }
}

export default MyComponent;