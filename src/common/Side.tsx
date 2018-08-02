import { Layout, Menu, Icon } from "antd";
import * as React from "react";


interface SiderProps {
    collapsed: boolean
}


class Side extends React.Component<SiderProps> {
    public render() {
        return (
            <Layout.Sider
                trigger={null}
                collapsible={true}
                collapsed={this.props.collapsed}
            >
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <div className="ant-layout-sider-pad"/>
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file"/>
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}


export default Side;