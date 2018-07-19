import {Breadcrumb} from "antd";
import * as React from "react";
import {Link} from 'react-router-dom';


interface InterfaceElements {
    elements: string[]
}

const {Item} = Breadcrumb;

const BreadcrumbFragment = ({elements}: InterfaceElements): JSX.Element => (
    <Breadcrumb>
        {
            elements.map((element, index) =>
                <Item key={index+10}>
                    {
                        element.toLowerCase() !== 'home' &&
                        <Link to={"/" + element}>{element}</Link>
                    }
                </Item>
            )
        }
    </Breadcrumb>
);


export default BreadcrumbFragment;