import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Homepage from "./components/Homepage/Homepage";
import CourseCards  from "./components/course/cards/CourseCards";
import Navigation from "./components/navvigation/Navigation";
import About from "./components/about/About";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Footer from './components/footer/Footer'
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <BrowserRouter>
      <Navigation />
      <div >
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <CourseCards />
          </Route>
          
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
    );
  }
}

export default App;
