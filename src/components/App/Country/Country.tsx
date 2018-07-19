import {Layout} from 'antd';
import * as React from 'react';
import {RouteComponentProps} from "react-router";
import BreadcrumbFragment from "../Breadcrumb/BreadcrumbFragment";
import FooterFragment from '../Footer/FooterFragment';
import HeaderFragment from '../Header/HeaderFragment';

const {Content} = Layout;

class Country extends React.Component<RouteComponentProps<any>>{
    public render(): JSX.Element {

        return (
            <Layout>
                 <HeaderFragment active='Places' links={['Home', 'Places', 'About']}/>
                 <Content>
                     <BreadcrumbFragment elements={['Places', this.props.match.params.id]}/>
                     <div className="container">
                         {this.props.match.params.id}
                     </div>
                 </Content>
                 <FooterFragment/>
             </Layout>
        )
    }
}

export default Country;
