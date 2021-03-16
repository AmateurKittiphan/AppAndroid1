import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/login'
import Register from './src/register'
import Home from './src/home'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      tel: "",
    };
  }



  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://testherokuproject.herokuapp.com/user/signup", {
      email: this.state.email,
      password: this.state.password,
    });
    history.push("/signin");
    window.location.reload(true);
  };
  render() {
    return (
      <View style={styles.container}>
    {/*         <Home/>
    <Register/>
        <Login/> */}
        <Register/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },})
