import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfo extends React.Component{
    state = {
        isShowListUser: true
    }

    handleShow = ()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    
    render(){
        const {listUser} = this.props;
        return(
            <div className = "display-container">
                <img src={logo} alt = "logo"></img>
                <div>
                    <span onClick={()=>{this.handleShow()}}>
                    {this.state.isShowListUser === true ? "Hide": "Show"}

                    </span>
                </div>

                {this.state.isShowListUser && 
                    <>
                        {listUser.map((user,index)=>{
                            return(
                                    <div className={+user.age > 18 ? "green": "red"}>
                                        <div >My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <br></br>
                                    </div>
                                )

                            
                        })}
                    </>
    }
            </div>
        )
    }

}

export default DisplayInfo;