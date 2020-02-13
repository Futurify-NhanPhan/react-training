import React from "react";
import moment from "moment";

type State = {};
type Props = {};

export default class Simple extends React.Component<Props, State> {
  render() {
    return (
      <div>
        Hello everyone, today is{" "}
        {moment(new Date().toUTCString()).format("DD-MM-YYYY")}
      </div>
    );
  }
}
