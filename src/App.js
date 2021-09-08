import React, { Component } from "react";
import Plan from "./Plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelete = (id) => {
  //console.log("Deleted", id);
    const oldItems = [...this.state.items];
  //console.log("Old Items:", oldItems);
    const items = oldItems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center py-4">Today's Task</h2>
            <div className="container">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write plan here"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-3 text-center">
                <button
                  className="btn btn-primary fw-bold w-100"
                  onClick={this.handleAddd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
