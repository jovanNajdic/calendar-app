import React, { Component } from "react";
import { connect } from "react-redux";
import { openForm } from "../../actions/eventForm";
import { quickAddEvent } from "../../actions/event";
import QuickAddForm from "../forms/QuickAddForm";
import SearchForm from "../forms/SearchForm";
import EventList from "./EventList";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      open: false
    };
  }

  render() {
    const { events } = this.props;

    return (
      <div className="header">
        <div className="container">
          <div className="row row--space-between row--align-center">
            <div className="header__buttons">
              <button
                className="button button--quick-add"
                onClick={() =>
                  this.setState({ ...this.state, open: !this.state.open })
                }
              >
                Quick Add Event
              </button>
              {this.state.open && (
                <QuickAddForm
                  onSubmit={data => this.props.quickAddEvent(data)}
                  closeForm={() =>
                    this.setState({ ...this.state, open: false })
                  }
                />
              )}
            </div>
            <div className="header__search">
              <SearchForm onDataChange={data => this.setState({ data })} />
              {this.state.data && (
                <EventList filterData={this.state.data} events={events} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps, { openForm, quickAddEvent })(Header);
