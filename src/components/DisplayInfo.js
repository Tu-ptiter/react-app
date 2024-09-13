import React from "react";


class DisplayInfo extends React.Component{
    state = {
        isShowListUser: true
    }

    handleShowHiden =()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render(){
        const {listUser} = this.props;
        return(
            <div>
                <div>
                    <span onClick={()=>{this.handleShowHiden()}}>
                    {this.state.isShowListUser === true ? "Hidden": "Show"}
                    </span>
                </div>

                {this.state.isShowListUser && 
                    <div>
                        {listUser.map((user,index)=>{
                            return(
                                    <div className={+user.age > 18 ? "green": "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                )

                            
                        })}
                    </div>
    }
            </div>
        )
    }

}

export default DisplayInfo;