import React, { Component } from 'react';
import FoodCard from "./components/FoodCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import foods from "./foods.json";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    foods,
    // clicked: [],
    score: 0,
    highScore: 0,
  };


  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      });
    }
    this.state.foods.forEach(FoodCard => {
      FoodCard.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.foods.find((o, i) => {
      if (o.id === id) {
        if (foods[i].count === 0) {
          foods[i].count = foods[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.foods.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Nav
          highScore={this.state.highScore}
          score={this.state.score}
        />
        <h3> Click on a food image to earn points, but don't click on any more than once! </h3>
        {this.state.foods.map(card => (
          <FoodCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
