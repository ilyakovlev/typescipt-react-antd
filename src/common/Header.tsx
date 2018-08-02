import { Layout, Menu, Icon } from "antd";
import * as React from "react";
import {Link} from "react-router-dom";


interface InterfaceLinks {
    links: string[],
    active: string,
    collapsed: boolean,
    onCollapse: () => void
}


export default ({links, active, collapsed, onCollapse}: InterfaceLinks): JSX.Element => (
    <Layout.Header>
        <Menu mode="horizontal"  className="ant-layout-header-menu" selectedKeys={[links.indexOf(active).toString()]}>
            <Icon
                className="ant-layout-header-trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onCollapse}
            />
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
