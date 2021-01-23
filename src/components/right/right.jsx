import React from 'react';
import './right.css'
import { FiTarget } from "react-icons/fi";
import { BsFillGridFill, BsArrowsAngleContract,BsFillBarChartFill,BsBootstrapFill,BsCreditCard,BsBookmarkCheck } from "react-icons/bs";


function Right (){
    return(
        <div className = 'right'>
            <div className='cont'>
                <div className="tope">
                    <div className='text-cont'>
                    <h1>Welcome Back !</h1>
                    </div>

                    <div className="inner-top">
                        <button>Fast Save</button>
                    <img src='/images/img.jpg' ></img>     
                    </div>
                </div>
            </div>

            <div className = 'row mt-4'>
                <div className='col-lg-4 mb-3' >
                    <div className ='card-holder'>
                        <div className = 'inner-card'>
                        <FiTarget /> 
                        <h3>1,800,000</h3>
                        </div>
                        <div className = 'about'>
                            Total Savings
                        </div> 
                    </div>
                </div>
                <div className='col-lg-4 mb-3'>
                    <div className ='card-holder'>
                        <div className = 'inner-card'>
                        <BsFillBarChartFill />
                        <h3>1,800,000</h3>
                        </div>
                        <div className = 'about'>
                            Total Investments
                        </div> 
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className ='card-holder'>
                        <div className = 'inner-card'>
                        <BsArrowsAngleContract /> 
                        <h3>1,800,000</h3>
                        </div>
                        <div className = 'about'>
                            Total Loans
                        </div> 
                    </div>
                </div>
            </div>
            <div className = 'row mt-4'>

                <div className='col-lg-6 first mb-4 '>
                    <h3 className ='mb-3'> Verify Your Account </h3>

                    <div className='icons'>
                        <div className ='one'>
                        <BsBootstrapFill/>
                        <h5>Add BVN</h5>
                        </div>
                        <div className ='one two'>
                        <BsBookmarkCheck/>
                        <h5>Add Bank</h5>
                        </div>
                        <div className ='one two'>
                        <BsCreditCard/>
                        <h5>Add Card</h5>
                        </div>
                    </div>

                </div>
                <div className='col-lg-1 firs'></div>
            

            <div className='col-lg-5 second'  >
                <div className='text-container'>
                <h5>Introducing</h5>
                <h2>Saving Tips</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam explicabo dolorem temporibus voluptatum iure 
                </p>
                </div>
               
            </div>
            </div>

            <div className="row mt-3">
                <div className='col-lg-12 third'>

                    <div className='topp mb-4'>
                        <h5>Transactions</h5>
                        <h6>See All</h6>
                    </div>
                    <div className='bottomm'>
                        <div className='first-butt'>
                            <BsBookmarkCheck/>
                            <div className='inner-butt'>
                                <h4>Thrift Saving </h4>
                                <p> 15 Muintes</p> 
                            </div>
                        </div>
                        <div className='second-butt'>
                            <p>18,000,000</p>
                        </div>
                        
                    </div>
                    <div className='bottomm'>
                        <div className='first-butt'>
                            <BsBookmarkCheck/>
                            <div className='inner-butt'>
                                <h4>Thrift Saving </h4>
                                <p> 15 Muintes</p> 
                            </div>
                        </div>
                        <div className='second-butt'>
                            <p>18,000,000</p>
                        </div>
                        
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default Right; 