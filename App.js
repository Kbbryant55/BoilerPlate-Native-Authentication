import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import LoginForm from './src/components/login-form';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Header title="Login"/>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});