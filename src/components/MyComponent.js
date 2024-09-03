// class component
//function component

import React from "react";
import UserInfor from "./UserInfor"
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    
    state = {
        listUser:[
            {id: 1,name: "Tu",age: 19   },
            {id: 2,name: "Tommy",age: 20   },
            {id: 3,name: "John",age: 26   },

        ]
    }
    //
    render(){


        return (
            <div >
                <UserInfor></UserInfor>
                <br/><br/>
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div>
        )

    }
}

export default MyComponent;