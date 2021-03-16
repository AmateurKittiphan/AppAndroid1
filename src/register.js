import React, { Component } from 'react';
import { Text, Alert, Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('', `คนบ้าอะไรใช้ ชื่อ ${username} เปลี่ยน!!!`);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.inputext}>Register</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           label='Email'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title={'Submit'} color="#0f0"  onPress={this.onLogin.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    width: 250,
    height: 45,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },

  inputext: {
    fontSize:50,
    textAlign:'center',
    fontWeight:'bold',
    borderColor: '#f00',
    marginBottom: 30,
  },
});