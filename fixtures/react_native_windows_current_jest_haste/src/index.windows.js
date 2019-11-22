import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ProgressBarWindows } from 'react-native-windows';
// import ProgressBarWindows from 'ProgressBarWindows';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  windows:
    'Shake cuz YOLO',
});

export default class App extends Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>Counter: {this.state.counter}</Text>
        <TouchableOpacity onPress={() => {
          this.setState(state => ({ counter: state.counter + 1 }))
        }}><Text style={styles.instructions}>Increment</Text></TouchableOpacity>
	      <ProgressBarWindows progress={this.state.counter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    color: '#282828',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body: {
    fontSize: 24,
    textAlign: 'center',
    color: '#282828',
  },
});
