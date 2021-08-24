import React, { Component } from 'react';
import '../assets/register.css';


class Register extends Component{

    render(){
        return(
            <React.Fragment>
                    
                    
            <div className="container">
                <div className="row main">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h1 className="title">Company Name</h1>
                            <hr />
                        </div>
                    </div> 
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">
                            
                            <div className="form-group">
                                <label for="name" className="cols-sm-2 control-label">Your Name</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="email" className="cols-sm-2 control-label">Your Email</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="username" className="cols-sm-2 control-label">Username</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="password" className="cols-sm-2 control-label">Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group ">
                                <button type="button" className="btn btn-primary btn-lg btn-block login-button">Register</button>
                            </div>
                            <div className="login-register">
                                <a href="index.php">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

		<script type="text/javascript" src="assets/js/bootstrap.js"></script>

            </React.Fragment>
        );
    }
   
}

export default Register