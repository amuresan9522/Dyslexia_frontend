import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Home from "./Home";

const options = {
  timeout: 10000,
  position: positions.MIDDLE
};

export default class Alert extends React.Component {
    render() {
        return (
            <Provider template={AlertTemplate} {...options}>
                <Home />
            </Provider>
        )
    }
}
  
