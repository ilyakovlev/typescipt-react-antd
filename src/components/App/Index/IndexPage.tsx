import {Layout} from 'antd';
import * as React from 'react';
import Breadcrumb from '../Breadcrumb/BreadcrumbFragment';
import FooterFragment from '../Footer/FooterFragment';
import HeaderFragment from '../Header/HeaderFragment';


const {Content} = Layout;

class IndexPage extends React.Component {
    public render() {
        return (
            <Layout>
                <HeaderFragment active='Home' links={['Home', 'Places', 'About']}/>
                <Content>
                    <Breadcrumb elements={['Home']}/>
                    <div className="container">
                        Content
                    </div>
                </Content>
                <FooterFragment/>
            </Layout>
        );
    }
}

export default IndexPage;
