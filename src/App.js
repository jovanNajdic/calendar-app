import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/parts/Header";
import Calendar from "./components/parts/Calendar";
import ToggleForm from "./components/parts/ToggleForm";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.open && <ToggleForm />}
        <Header />
        <Calendar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.eventForm.open
  };
}

export default connect(mapStateToProps, null)(App);
