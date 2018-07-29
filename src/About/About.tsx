import * as React from "react";
import { Card } from "antd";
import Template from "../common/TemplateHOC";


class About extends React.Component {
    public render() {
        return (
            <Card>
                So this is it.
            </Card>
        )
    }
}


export default Template(About);