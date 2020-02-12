import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';
import CourseCard from './common/Components/Card/CourseCard.component';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <Router/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </Provider>
    );
  }
}

export default App;
