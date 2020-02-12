import React from "react";

type State = {};
type Props = {};

export default class Simple extends React.Component<Props, State> {
  render() {
    return <div>Hello everyone, today is {new Date().toUTCString()}</div>;
  }
}
