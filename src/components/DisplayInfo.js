import React from "react";


class DisplayInfo extends React.Component{
    render(){
        //props --> properties
        const {listUser } = this.props;
        return (
            <div>
                {listUser.map((user,index)=>{
                    console.log(user)
                    return(
                        <div>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <br></br>
                        </div>
                    )
                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>

                <div>My name is {name}</div>
                <div>My age is {age}</div>

                <div>My name is {name}</div>
                <div>My age is {age}</div> */}
            </div>
            

        )
    }

}

export default DisplayInfo;