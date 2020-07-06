import React, { useEffect } from "react";
import { connect } from "react-redux";
import { styled } from "styled-components";
import {
  getCategoriesError,
  getCategoriesPending,
  getCategories,
} from "./reducers/categoryReducer";
import { getQuestions } from "./reducers/questionReducer";
import { fetchCategories, fetchQuestions, fetchSessionToken } from "./api";
import CategorySelector from "./components/category-selector";
import StartButton from "./components/StartButton";
import { addPlayer } from "./actions/game";
import GameSetup from "./components/game-setup";
import Players from "./components/players/Players";
import Game from "./components/game/Game";

class App extends React.Component {
  state = {
    loading: false,
    selectedCategoryId: null,
  };

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.props.fetchCategories();
    this.props.fetchSessionToken();
    this.setState({ ...this.state, loading: false });
  }

  componentDidUpdate() {
    
  }

  render() {
    return !this.state.loading ? (
      <div>
        <h1>trivia</h1>

        {!this.props.game.game && (
          <div>
            <GameSetup />
            <Players />
          </div>
        )}
        {this.props.game.game && <div>
          Game started
          <Game />
          </div>}
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
  game: state.game,
});

export default connect(mapStateToProps, {
  fetchCategories,
  fetchQuestions,
  addPlayer,
  fetchSessionToken
})(App);
