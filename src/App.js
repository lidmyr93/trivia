import React, { useEffect } from "react";
import { connect } from "react-redux";
import { styled } from "styled-components";
import {
  getCategoriesError,
  getCategoriesPending,
  getCategories,
} from "./reducers/categoryReducer";
import {
  getQuestions,
} from "./reducers/questionReducer"
import {fetchCategories, fetchQuestions} from "./api";
import CategorySelector from "./components/category-selector";
import StartButton from "./components/StartButton";

class App extends React.Component {
  state = {
    loading: false,
    selectedCategoryId: null,
  };

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.props.fetchCategories();
    this.setState({ ...this.state, loading: false });
  }


  handleCategory = (category) => {
    return this.setState({  
      ...this.state, selectedCategoryId: category
    })
  }

  render() {
    
    return !this.state.loading ? (
      <div>
        <h1>trivia</h1>
        {this.props.categories && (
          <CategorySelector categories={this.props.categories} selectedCategory={this.state.selectedCategoryId} handleCategory={this.handleCategory}/>
          )}
          <StartButton />
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getCategoriesError(state),
  categories: getCategories(state),
  pending: getCategoriesPending(state),
  questions: getQuestions(state),
});

export default connect(mapStateToProps, {
  fetchCategories,
  fetchQuestions
})(App);
