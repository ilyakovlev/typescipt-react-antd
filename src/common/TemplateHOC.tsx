import { Layout } from "antd";
import * as React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Side from "./Side";

const Template = <P extends object>(Component: React.ComponentType<P>) => (active: string) =>
    class extends React.Component<P> {
        public render() {
            return (
                <Layout style={{height: '100vh'}}>
                    <Side/>
                    <Layout>
                        <Header active={active} links={['Home', 'About']}/>
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