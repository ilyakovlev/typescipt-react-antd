import {Breadcrumb} from "antd";
import * as React from "react";
import {Link} from 'react-router-dom';


interface InterfaceElements {
    elements: string[]
}


export default ({elements}: InterfaceElements): JSX.Element => (
    <Breadcrumb>
        {
            elements.map((element, index) =>
                <Breadcrumb.Item key={index+10}>
                    {
                        // element.toLowerCase() !== 'home' &&
                        <Link to={"/" + elements.slice( 0,index+1).join('/')}>{element}</Link>
                    }
                </Breadcrumb.Item>
            )
        }
    </Breadcrumb>
);
