import {Layout} from 'antd';
import * as React from 'react';
import BreadcrumbFragment from "../Breadcrumb/BreadcrumbFragment";
import FooterFragment from '../Footer/FooterFragment';
import HeaderFragment from '../Header/HeaderFragment';


const {Content} = Layout;


class AboutPage extends React.Component {
    public render() {
        return (
            <Layout>
                <HeaderFragment active='About' links={['Home', 'Places', 'About']} />
                <Content>
                    <BreadcrumbFragment elements={['About']}/>
                    <div className="container">
                        Content
                    </div>
                </Content>
                <FooterFragment/>
            </Layout>
        );
    }
}

export default AboutPage;
