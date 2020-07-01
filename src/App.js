import React, { useEffect } from "react";
import {connect} from "react-redux";

import { loadCategories } from "./actions";
import { useDispatch } from "react-redux";
import { getCategories } from "./api";


class App extends React.Component {
  state = {};

  componentDidMount(){
    console.log(getCategories().trivia_categories)
  };

  render(){
    return(
      <div>
        <h1>trivia</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ data = {} }) => ({
  data
});
export default connect(
  mapStateToProps,
  {
    loadCategories
  }
)(App);