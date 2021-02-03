import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            isModalVisible: false,
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({ isModalVisible: true });
    };

    render() {

        return (
            <Container fluid id="conflu">
                <Row id="row-header">
                    <Col xs={18} md={18} xl={18}>สัญลักษณ์</Col>
                    <Col xs={6} md={6} xl={6}>
                        <Row style={{ justifyContent: "space-between" }}>
                            <Col xs={24} md={24} xl={24} id="btn-header">
                                <Button type="primary" id="btn-sty" onClick={() => this.showModal()}>เข้าสู่ระบบ</Button>
                                <NavLink to="/Register"><Button type="primary" id="btn-sty1">สมัครสมาชิก</Button></NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                    width={450}
                >
                    <Form>
                        <Row>
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={16} md={16} xl={16}>
                                <Col xs={24} md={24} xl={24} id="LoginHeader">เข้าสู่ระบบ</Col>
                                <Col xs={24} md={24} xl={24} id="LoginDescrip">เมื่อคุณเข้าสู่ระบบคุณได้ทำตาม<span id="LoginDescrip-si">ข้อตกลงผู้ใช้</span></Col>
                                <Row  id="login-header">อีเมลล์</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                {
                                                    type: 'email',
                                                    message: 'รูปแบบอีเมลล์ไม่ถูกต้อง',
                                                },
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกอีเมลล์',
                                                },
                                                ]}>
                                                <Input placeholder="อีเมลล์" id="form-logininput"/>
                                            </Form.Item>
                                            </Col>
                                    <Row  id="login-header">รหัสผ่าน</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input type="password" placeholder="รหัสผ่าน" id="form-logininput"/>
                                            </Form.Item>   
                                        </Col>
                                    <Col xs={24} md={24} xl={24} id="row-login">
                                        <Button id="btn-login">SIGN IN</Button>
                                    </Col>   
                                    <Col xs={24} md={24} xl={24} id="row-login">
                                            <span id="ft-pass">ลืมรหัสผ่าน?</span>
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-login1">
                                        คุณยังไม่มีบัญชี <span id="link-regis"> ลงทะเบียนเข้าใช้ </span> 
                                    </Col>
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                        </Row>
                    </Form>
                </Modal>
            </Container>
        )
    }
})