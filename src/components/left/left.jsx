import React, { useState } from 'react';
import './left.css';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { FiTarget, FiUser, FiLogOut } from "react-icons/fi"
import { BsFillGridFill, BsArrowsAngleContract,BsFillBarChartFill, } from "react-icons/bs";


class Left extends React.Component{ 


    constructor(){
        super();
        this.state={
            show: 'off',
        };
    }
      
    // scrollFunction() {
    //     const Top = window.scrollY < 250;
    //     if (Top == true) {
    //       this.setState({ topple: "true" });
    //     } else {
    //       this.setState({ topple: "false" });
    //     }
    //   }

    handleClick(){

        if(this.state.show == 'off'){
            this.setState({
                show: 'on'
            })
        }else{
            this.setState({
                show: 'off'
            })
        }
        
    }

    render(){
        return(
        <div className = 'left'>
            <div className='container' >
                <div className="inner-container">
                    <div className="logo-container mt-3">
                        
                        <RiMenu2Fill onClick={()=>this.handleClick()}/> 
                        <Link to ="/">
                        <h3 className={this.state.show}>FastKash</h3> 
                        </Link>
                    </div>
                </div>
                    
                <div className='links'>
                    <div className="links-container">
                        <Link to ="/">
                        <BsFillGridFill  /> 
                         <h4 className={this.state.show} >Home</h4 > 
                        </Link>
                    </div>
                    <div className="links-container">
                        <Link to ="/">
                        <BsArrowsAngleContract /> 
                        <h4 className={this.state.show}>Loan</h4 > 
                        </Link>
                    </div>
                    <div className="links-container">
                        <Link to ="/">
                        <FiTarget /> 
                        <h4 className={this.state.show}>Saving</h4 >
                        </Link>
                    </div>
                    <div className="links-container">
                        <Link to ="/">
                        <BsFillBarChartFill /> 
                         <h4 className={this.state.show}>Investment</h4 >
                        </Link>
                    </div>
                    <div className="links-container">
                        <Link to ="/">
                        <FiUser /> 
                        <h4 className={this.state.show}>Account</h4 > 
                        </Link>
                    </div>
                </div>

                <div className='logout'>
                    <div className="links-container">
                        <Link to ="/">
                        <FiLogOut /> 
                         <h4 className={this.state.show}>Logout</h4 > 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Left; 