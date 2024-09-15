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
                                        <div >Muser.namey name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <button onClick={()=>this.props.handleDeleteUser(user.name)}>Delete</button>
                                        <br></br>

                                    </div>
                                    
                                )

                            
                        })}
                    </>
    }
                <img src={logo} alt = "logo"></img>

            </div>
        )
    }

}

export default DisplayInfo;