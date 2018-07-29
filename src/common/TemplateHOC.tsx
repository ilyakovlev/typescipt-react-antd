import {Layout} from "antd";
import * as React from 'react';
import Footer from "./Footer";
import Header from "./Header";


const Template = <P extends object>(Component: React.ComponentType<P>) =>
    class extends React.Component<P> {
        public render() {
            return (
                <Layout>
                    <Header active='Home' links={['Home', 'About']} />
                    <Layout.Content>
                        <Component {...this.props} />
                    </Layout.Content>
                    <Footer />
                </Layout>
            )
        }
    };


export default Template;