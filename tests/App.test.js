import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import App from "../App";
import DashBoard from "../containers/DashBoard";
import Home from "../containers/Home";

describe('Navigate to Dashboard', () => {
    it('navigates on button press', () => {
        const push = jest.fn();
        const { getByText } =  render(<Home navigation={{push}}/>)
        fireEvent.press(getByText('Dashboard'));
        isExportDeclaration(push).toHaveBeenCalledWith('Dashboard');
    })
});