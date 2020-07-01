import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getCategoriesError,
  getCategoriesPending,
  getCategories,
} from "./reducers";
import fetchCategories from "./api";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <h1>trivia</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getCategoriesError(state),
  products: getCategories(state),
  pending: getCategoriesPending(state),
});

export default connect(mapStateToProps, {
  fetchCategories,
})(App);
