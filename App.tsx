import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/navigations/Auth';
import {Provider} from 'react-redux';
import store from './src/features/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
