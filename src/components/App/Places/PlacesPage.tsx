import {Layout} from 'antd';
import * as React from 'react';
import {Link} from "react-router-dom";
import BreadcrumbFragment from "../Breadcrumb/BreadcrumbFragment";
import countries from '../Country/countries';
import FooterFragment from '../Footer/FooterFragment';
import HeaderFragment from '../Header/HeaderFragment';

const {Content} = Layout;

class PlacesPage extends React.Component {
    public render(): JSX.Element {
        return (
            <Layout>
                <HeaderFragment active='Places' links={['Home', 'Places', 'About']}/>
                <Content>
                    <BreadcrumbFragment elements={['Places']}/>
                    <div className="container">
                        <ul>
                        {
                            countries.countries.map((country : string, index: number) =>
                                <li key={index * 100}>
                                    <Link to={"/places/" + country}>
                                        {country}
                                    </Link>
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </Content>
                <FooterFragment/>
            </Layout>
        );
    }
}

export default PlacesPage;
