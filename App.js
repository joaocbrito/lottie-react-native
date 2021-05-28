import React from 'react';
import {Text} from 'react-native';
import LottieView from 'lottie-react-native';

function App() {
  return (
    <>
      <LottieView source={require('./book.json')} autoPlay loop />
    </>
  );
}

export default App;
