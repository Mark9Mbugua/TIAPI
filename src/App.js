import React, { Component } from 'react';
import UserList from './components/UserList';
import Title from './components/Title';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Container>
            <Title />
            <UserList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
