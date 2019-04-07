import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";

import { SafeAreaView } from "react-navigation";

import { TouchableOpacity } from "react-native-gesture-handler";

import { onSignIn } from "../../service/auth";

export default class SignIn extends Component<any, {}> {
  static navigationOptions = {
    header: null
  };

  state = {
    registro: "123456",
    senha: "123",
    error: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleregistroChange = (registro: any) => {
    this.setState({ registro });
  };

  handlesenhaChange = (senha: any) => {
    this.setState({ senha });
  };

  handleSignInPress = async () => {
    if (this.state.registro.length === 0 || this.state.senha.length === 0) {
      this.setState(
        { error: "Preencha usuário e senha para continuar!" },
        () => false
      );
      setTimeout(() => {
        this.setState({ error: "" });
      }, 1000);
    } else {
      console.log("certinho");

      try {
        onSignIn({
          registro: this.state.registro,
          senha: this.state.senha
        })
          .then((response: any) => {
            console.log("response");
            console.log(response);

            if (response.data.code == 200) {
              this.props.navigation.navigate("SignedIn");
            } else {
              if (response.data.code == 401) {
                this.setState({
                  error: "Registro ou senha inválidos!"
                });
              } else {
                this.setState({ error: "Erro ao realizar login!" });
              }
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais!"
            });
          });
      } catch (_err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais!"
        });
      }
    }
  };

  imgBackGround = require("../../images/Background-degrade.png");

  render() {
    return (
      <ImageBackground
        source={this.imgBackGround}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <KeyboardAvoidingView behavior="height" style={styles.content}>
          <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
              <View style={styles.divLogo}>
                <Text style={styles.textLogo}>BTP</Text>
                <Text style={styles.textLogo}>INTEGRA</Text>
              </View>
              <View style={styles.divLogin}>
                <TextInput
                  style={styles.textInputLogin}
                  placeholder="Registro"
                  placeholderTextColor="#FFF"
                  value={this.state.registro}
                  onChangeText={this.handleregistroChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.textInputLogin}
                  placeholder="Senha"
                  placeholderTextColor="#FFF"
                  textAlignVertical="center"
                  value={this.state.senha}
                  onChangeText={this.handlesenhaChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
              </View>
              <View style={styles.divButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleSignInPress}
                >
                  <Text style={styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>
                {this.state.error.length !== 0 && (
                  <View style={styles.divError}>
                    <Text style={styles.textError}>{this.state.error}</Text>
                  </View>
                )}
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
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
    marginTop: 20,
    paddingLeft: 20,
    color: "#fff"
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
  },
  divError: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  textError: {
    fontFamily: "Hebbo",
    fontSize: 15,
    color: "#EA2323"
  }
});
