import { Layout } from "antd";
import * as React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Side from "./Side";


const Template = <P extends object>(Component: React.ComponentType<P>) => (active: string) =>
    class extends React.Component<P> {
        public state = {
            collapsed: true
        };

        public onCollapse = () => {
            this.setState({
                collapsed: !this.state.collapsed
            } as object)
        };

        public render() {
            return (
                <Layout style={{height: '100vh'}}>
                    <Side {...this.state} />
                    <Layout>
                        <Header active={active} {...this.state} onCollapse={this.onCollapse} links={['Home', 'About']}/>
                        <Layout.Content>
                            <Component {...this.props} />
                        </Layout.Content>
                        <Footer/>
                    </Layout>
                </Layout>
            )
        }
    };


export default Template;