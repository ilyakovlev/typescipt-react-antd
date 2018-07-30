import * as React from "react";
import { Card, Col, Row } from "antd";

import Breadcrumb from "../common/Breadcrumb";
import Template from "../common/TemplateHOC";


class About extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Row type="flex" align="top">
                    <Col span={1}>
                        <Breadcrumb elements={['About']}/>
                    </Col>
                </Row>
                <Row type="flex" align="middle" justify="center">
                    <Col xs={{span: 22}} sm={{span: 16}}>
                        <Card title="About this" className="ant-about">
                            So this is it.
                        </Card>

                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}


export default Template(About)('About');