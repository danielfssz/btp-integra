import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  BackHandler
} from "react-native";

export default class index extends Component {
  handleExitPress = () => {
    BackHandler.exitApp();
  };

  imgBackGround = require("../../images/Background-degrade-dois.png");

  render() {
    return (
      <ImageBackground
        source={this.imgBackGround}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.divText}>
            <Text style={styles.textInfo}>
              HORÁRIO NÃO PERMITIDO PARA UTILIZAÇÃO APLICATIVO
            </Text>
          </View>
          <View style={styles.divButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleExitPress}
            >
              <Text style={styles.textButton}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  divText: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInfo: {
    fontFamily: "Hebbo",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: -7,
    textAlign: "center"
  },
  divButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
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
