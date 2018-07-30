import * as React from "react";
import { Button, Card, Checkbox, Col, Form, Icon, Input, Row } from "antd";
import { FormComponentProps } from "antd/lib/form";

import { User } from "./_user/types";
import Breadcrumb from "../common/Breadcrumb";
import Template from "../common/TemplateHOC";


class Login extends React.Component<FormComponentProps & any, User> {
    public handleSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                // tslint:disable
                console.log(values);
                this.props.actions.loginRequest(values.login, values.password);
            }
        });
    };

    public render(): JSX.Element {
        const {getFieldDecorator} = this.props.form;

        return (
            <React.Fragment>
                <Row type="flex" align="top">
                    <Col span={1}>
                        <Breadcrumb elements={['Home']} />
                    </Col>
                </Row>
                <Row type="flex" align="middle" justify="center" >
                    <Col xs={{span: 22}} lg={{span: 8}} >
                        <Card title="Login Page" className="ant-login-card">
                            <Form onSubmit={this.handleSubmit} className="ant-login-form">
                                <Form.Item>
                                    {
                                        getFieldDecorator("login", {
                                                rules: [{required: true, message: "Please input your login!"}],
                                            }
                                        )(
                                            <Input prefix={
                                                <Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>
                                            } placeholder="Login"/>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator("password", {
                                                rules: [{required: true, message: "Please input your password!"}],
                                            }
                                        )(
                                            <Input prefix={
                                                <Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>
                                            } type="password" placeholder="Password"/>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator("remember", {
                                                initialValue: true,
                                                valuePropName: "checked",
                                            }
                                        )(
                                            <Checkbox className="ant-login-form-remember">Remember me</Checkbox>
                                        )
                                    }
                                    <a className="ant-login-form-forgot" href="">Forgot password</a>
                                    <Button type="primary" htmlType="submit" className="ant-login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

}

const Templated = Template(Login)('Home');

export default Form.create()(Templated);
