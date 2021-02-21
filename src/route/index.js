import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import Register from "../content/Register"
import Login from "../content/Login"
import Logout from "../content/Logout"
import ForgetPass from "../content/ForgetPass";
import ChangePass from "../content/ChangePass";
import Form from "../content/Form";
import ConfirmRegister from "../content/ConfirmRegister";

import Course1 from "../content/user/Course1";
import Course4 from "../content/user/Course4";
import HomeUser from "../content/user/HomeUser";
import ExamPre from "../content/user/ExamPre";
import ExamPost from "../content/user/ExamPost";

import AdminHome from "../content/Admin/AdminHome";
import AdminTopScore from "../content/Admin/AdminTopScore";
import AdminDetail from "../content/Admin/AdminDetail";
import AdminStatistic from "../content/Admin/Adminstatistic";

export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/HomeUser" component={HomeUser} />
                <Route exact path="/Course1" component={Course1} />
                <Route exact path="/Course4" component={Course4} />
                <Route exact path="/ExamPre" component={ExamPre} />
                <Route exact path="/ExamPost" component={ExamPost} />
                <Route exact path="/ChangePass" component={ChangePass} />
                <Route exact path="/Form" component={Form} />
                <Route exact path="/ConfirmRegister/:ConfirmRegisterKey" component={ConfirmRegister} />

                <Route exact path="/Register" component={Register} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ForgetPass" component={ForgetPass} />
                <Route exact path="/Logout" component={Logout} />

                <Route exact path="/Admin/Home" component={AdminHome} />
                <Route exact path="/Admin/TopScore" component={AdminTopScore} />
                <Route exact path="/Admin/Detail/:userId" component={AdminDetail} />
                <Route exact path="/Admin/Statistic" component={AdminStatistic} />
                
            </Switch>
        );
    }
}