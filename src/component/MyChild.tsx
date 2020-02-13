import React from "react";

type State = {};
type Props = {
  name: string;
};

export default class MyChild extends React.Component<Props, State> {
  render() {
    return <div>Name from child component {this.props.name}</div>;
  }
}
