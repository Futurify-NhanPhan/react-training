import React, { Component } from "react";
import { Subject, Subscription } from "rxjs";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarContentWrapper, variantIcon } from "./SnackbarContentWrapper";

// The Main Subject/Stream to be listened on.
const mainSubject = new Subject();
// This function is used to publish data to the Subject via next().
export type MessageData = {
  message: string;
  variant: keyof typeof variantIcon;
};
type State = {
  data: MessageData;
};
export const publishMessage = (
  message: any, // to avoid bug when message is not string
  variant: keyof typeof variantIcon = "error"
) => {
  let data: MessageData = { variant: variant, message: message + "" };
  mainSubject.next(data);
};

export class Message extends Component<any, State> {
  // Used for unsubscribing when our component unmounts

  unsubscribe: Subscription;
  state: State = {
    data: {
      message: "",
      variant: "error"
    }
  };
  constructor(props: any) {
    super(props);

    this.unsubscribe = mainSubject.subscribe(data => {
      let messageData = data as MessageData;
      if (!messageData.variant) {
        messageData.variant = "error";
      }
      this.setState({ data: messageData });
    });
  }
  componentWillUnmount() {
    this.unsubscribe.unsubscribe();
  }

  handleClose = () => {
    this.setState({
      data: {
        message: "",
        variant: this.state.data.variant
      }
    });
  };
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={!!this.state.data.message}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContentWrapper
          onClose={this.handleClose}
          variant={this.state.data.variant}
          message={this.state.data.message}
        />
      </Snackbar>
    );
  }
}
