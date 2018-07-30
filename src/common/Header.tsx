import {Layout, Menu} from "antd";
import * as React from "react";
import {Link} from "react-router-dom";


interface InterfaceLinks {
    links: string[],
    active: string
}


export default ({links, active}: InterfaceLinks): JSX.Element => (
    <Layout.Header>
        <Menu mode="horizontal" className="ant-header-menu" selectedKeys={[links.indexOf(active).toString()]}>
            {
                links.map((link, index) =>
                    <Menu.Item key={index}>
                        <Link to={
                            link.toLowerCase() === ('home' || 'main')
                                ? "/"
                                : "/" + link.toLowerCase()
                        }>
                            {link}
                        </Link>
                    </Menu.Item>
                )
            }
        </Menu>
    </Layout.Header>
);
