import React from 'react';
import { mount } from "enzyme";
import App from '../App';
import { isTSAnyKeyword } from '@babel/types';

describe("<App/>",()=>{
    test("Renders without crashing",()=>{
        const app =mount(<App/>);
        expect(app.find(".todo-header").text()).toEqual("Brenda's Todo List App");
    });
});

describe("The default UI",()=>{
    const app=mount(<App/>);
    test("Renders empty list by default",()=>{
        expect(app.find(".todo").length).toBe(0);
    })

    test("Has an input field",()=>{
        expect(app.find(".ToDoInput").length).toEqual(1);
    })

    test("Has an add button", () => {
        expect(app.find(".todo_add_button").length).toEqual(1);
      });
})

describe("Adding todo items",()=>{

    
})

