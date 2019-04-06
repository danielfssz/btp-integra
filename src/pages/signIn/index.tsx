import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StatusBar,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

// import api from "../../services/api";

// interface Props {}

export default class SignIn extends Component<any, {}> {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func
    }).isRequired
  };

  state = {
    email: "cso.junior1996@gmail.com",
    password: "123456",
    error: ""
  };

  handleEmailChange = (email: any) => {
    this.setState({ email });
  };

  handlePasswordChange = (password: any) => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate("SignUp");
  };

  // handleSignInPress = async () => {
  //   if (this.state.email.length === 0 || this.state.password.length === 0) {
  //     this.setState(
  //       { error: "Preencha usuário e senha para continuar!" },
  //       () => false
  //     );
  //   } else {
  //     try {
  //       const response = await api.post("/sessions", {
  //         email: this.state.email,
  //         password: this.state.password
  //       });

  //       const resetAction = StackActions.reset({
  //         index: 0,
  //         actions: [
  //           NavigationActions.navigate({
  //             routeName: "Main",
  //             params: { token: response.data.token }
  //           })
  //         ]
  //       });
  //       this.props.navigation.dispatch(resetAction);
  //     } catch (_err) {
  //       this.setState({
  //         error: "Houve um problema com o login, verifique suas credenciais!"
  //       });
  //     }
  //   }
  // };

  imgBackGround = require("../../images/Background-degrade.png");

  render() {
    return (
      <ImageBackground source={this.imgBackGround} style={styles.container}>
        <View style={styles.divLogo}>
          <Text style={styles.textLogo}>BTP</Text>
          <Text style={styles.textLogo}>INTEGRA</Text>
        </View>
        <View style={styles.divLogin}>
          <TextInput
            style={styles.textInputLogin}
            placeholder="&nbsp;&nbsp;&nbsp;Matrícula"
            placeholderTextColor="#FFF"
          />
          <TextInput
            style={styles.textInputLogin}
            placeholder="&nbsp;&nbsp;&nbsp;Senha"
            placeholderTextColor="#FFF"
            textAlignVertical="center"
          />
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  divLogo: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textLogo: {
    fontFamily: "Hebbo",
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: -7
  },
  divLogin: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textInputLogin: {
    fontSize: 12,
    height: 45,
    width: "70%",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginTop: 20
  },
  divButton: {
    flex: 2,
    alignItems: "center"
  },
  button: {
    width: 145,
    height: 38,
    backgroundColor: "#34555D",
    borderRadius: 50,
    borderWidth: 0.1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontFamily: "Hebbo",
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF"
  }
});
