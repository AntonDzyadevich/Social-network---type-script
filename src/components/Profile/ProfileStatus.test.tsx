import React from "react";
import ProfileStatus from "./ProfileStatus";
import { create } from "react-test-renderer";
import {updateStatus} from "../../Redux/profile-reducer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component= create(< ProfileStatusWithHook status="it-kamasutra.com" updateStatus={updateStatus}/> )
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={updateStatus}/>);
        const instance = component.getInstance();
        const span = instance.findByType("span")
        expect(span.length).toBe(1);
    });
});