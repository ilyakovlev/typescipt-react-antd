import {Layout, Menu} from 'antd';
import * as React from 'react';
import {Link} from 'react-router-dom';


interface InterfaceLinks {
    links: string[],
    active: string
}

const {Header} = Layout;
const {Item} = Menu;

const HeaderFragment = ({links}: InterfaceLinks): JSX.Element => (
    <Header>
        <Menu mode="horizontal">
            {
                links.map((link, index)=>
                    <Item key={index * (-1)}>
                        <Link to={
                            link.toLowerCase() === ('home' || 'main')
                                ? "/"
                                : "/" + link.toLowerCase()
                        }>
                            {link}
                        </Link>
                    </Item>
                )
            }
        </Menu>
    </Header>
);


export default HeaderFragment;
