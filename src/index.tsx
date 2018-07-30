import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./Login/_store/store";

import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./theme.less";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("div") as HTMLElement
);
registerServiceWorker();
