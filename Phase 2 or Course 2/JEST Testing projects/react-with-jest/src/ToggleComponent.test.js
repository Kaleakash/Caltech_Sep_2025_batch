import { render,screen ,fireEvent} from "@testing-library/react"
import ToggleComponent from "./ToggleComponent"
import '@testing-library/jest-dom'
import React from "react";

describe("Toggle Component Testing",()=> {
    test("Component Test",()=> {

        render(<ToggleComponent/>)

        expect(screen.getByText("Toggle Component")).toBeInTheDocument();

        // get the reference of button 
        let button = screen.getByText("Click Here");
        fireEvent.click(button);
        
        expect(screen.getByText("Hello JEST")).toBeInTheDocument();
    })
})