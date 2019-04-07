import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

import IconIon from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
import { Avatar, Rating } from "react-native-elements";
// import { AirbnbRating } from "react-native-ratings";
import Stars from "react-native-stars";

import "react-navigation";

export default class Perfil extends Component<any, {}> {
  imgBackGround = require("../../images/background-perfil-dois.png");
  render() {
    return (
      <ImageBackground
        source={this.imgBackGround}
        style={{
          flex: 1,
          marginLeft: -20,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <View style={styles.header}>
              <IconIon
                name="ios-arrow-back"
                size={30}
                color="#ccc"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={{ margin: 20 }}
              />
              <IconAnt
                name="home"
                size={30}
                color="#ccc"
                onPress={() => {
                  this.props.navigation.navigate("Logged");
                }}
                style={{ margin: 20 }}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.divAvatar}>
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                  }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
              <View style={styles.divPontuacao}>
                <Stars
                  half={true}
                  rating={4}
                  update={val => {
                    this.setState({ stars: val });
                  }}
                  spacing={1}
                  starSize={25}
                  count={5}
                  disabled
                />
                <Text style={{ fontSize: 14, color: "#000", marginTop: 5 }}>
                  4.91{" "}
                </Text>
              </View>
              <View style={styles.divInfoPessoal}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 21,
                      color: "#707070"
                    }}
                  >
                    Juliana Ferreira
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 14,
                      textAlign: "left",
                      color: "#707070"
                    }}
                  >
                    Registro: 123456
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 12,
                      color: "#707070"
                    }}
                  >
                    Função:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 16,
                      textAlign: "left",
                      color: "#707070"
                    }}
                  >
                    Operadora de RTG
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 12,
                      color: "#707070"
                    }}
                  >
                    Data de Nascimento:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 16,
                      textAlign: "left",
                      color: "#707070"
                    }}
                  >
                    28/01/1990
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 12,
                      color: "#707070"
                    }}
                  >
                    Sexo:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Hebbo",
                      fontSize: 16,
                      textAlign: "left",
                      color: "#707070"
                    }}
                  >
                    Feminino
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleSignInPress}
                >
                  <Text style={styles.textButton}>PUBLICAR UM CONTEÚDO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  content: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,
    borderColor: "#d6d7da",
    borderTopRightRadius: 40,
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 40,
    borderBottomWidth: 0.5
  },
  divAvatar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 20
  },
  divPontuacao: {
    flex: 1,
    alignItems: "center",
    marginTop: 80
  },
  divInfoPessoal: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: -25
  },
  txtLogoName: {
    fontFamily: "Hebbo",
    fontSize: 21
  },
  button: {
    width: 185,
    height: 38,
    backgroundColor: "#34555D",
    borderRadius: 50,
    borderWidth: 0.1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  textButton: {
    fontFamily: "Hebbo",
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center"
  }
});
