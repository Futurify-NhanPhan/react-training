import React from "react";
import moment from "moment";
import Employee from "../model/employee";
import MyChild from "./MyChild";
import { publishMessage } from "./Message";
import "./Simple.scss";
import styled from "styled-components";

type State = { childName: string };
type Props = {};

const RedDiv = styled.div`
  color: red;
  background-color: blue;
`;

export default class Simple extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { childName: "My child name" };
  }
  render() {
    let employee: Employee = { name: "Nhân Phan", address: "Tân Phú", age: 29 };
    let employees: Employee[] = [
      employee,
      { name: "Tân", address: "Bình Tân", age: 30 },
      { name: "Minh", address: "Bình Tân", age: 31 }
    ];
    return (
      <div>
        <RedDiv>
          Hello everyone, today is
          {moment(new Date().toUTCString()).format("DD-MM-YYYY")}{" "}
        </RedDiv>
        {employees.map(e => {
          if (e.name === "Nhân") {
            return <div></div>;
          }
          return <div className={e.age >= 30 ? "red" : "blue"}>{e.name}</div>;
        })}
        <br />
        Hello {employee.name}, {employee.address}
        <div>Name from parent {this.state.childName}</div>
        <MyChild name={this.state.childName}></MyChild>
        <button
          onClick={() => {
            publishMessage("You can't do that", "error");
          }}
        >
          show error
        </button>
        <button
          onClick={() => {
            publishMessage("You can do that", "success");
          }}
        >
          show success
        </button>
      </div>
    );
  }
}
