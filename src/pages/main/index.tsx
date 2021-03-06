import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView
} from "react-native";
import HeaderMenu from "../../components/header";
import Category from "../../components/category";

const { width } = Dimensions.get("window");
import { getToken } from "../../service/auth";
import api from "../../service/api";
// import { auth } from "../../service/auth";

export default class Main extends Component {
  state = {
    indicacoes: [],
    screenWidth: width
  };

  onContentSizeChange = (contentWidth: any, contentHeight: any) => {
    this.setState({
      screenWidth: contentWidth
    });
  };

  getConteudo = async () => {
    const token = await getToken();

    api
      .get("/conteudo", { headers: { token: token } })
      .then(response => {
        console.log(response);
        this.setState({ indicacoes: response.data.body });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillMount() {
    this.getConteudo();
  }

  render() {
    const scrollEnabled = this.state.screenWidth > width;

    const imgBackGround = require("../../images/background-inicial.png");
    const clima = require("../../images/vibracoes-containers.png");
    return (
      <ImageBackground
        source={imgBackGround}
        style={{ flex: 1, marginLeft: -20 }}
        resizeMode="cover"
      >
        <SafeAreaView>
          <ScrollView>
            <View style={{ marginLeft: 20 }}>
              <HeaderMenu {...this.props} />
              <View style={styles.content}>
                <View
                  style={{
                    height: 130,
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textDescription}>Indicações</Text>
                  <View
                    style={{
                      height: 130,
                      marginTop: 5
                    }}
                  >
                    <ScrollView
                      scrollEventThrottle={16}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {this.state.indicacoes.map((item: any) => {
                        return (
                          <Category
                            key={item}
                            imageUri={clima}
                            name={item.titulo}
                            tamanho={130}
                            descricao={item.descricao}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
                <View style={{ marginTop: 35 }}>
                  <Text style={styles.textDescription}>Obrigações</Text>
                  <View
                    style={{
                      height: 130,
                      marginTop: 10
                    }}
                  >
                    <ScrollView
                      scrollEventThrottle={16}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {this.state.indicacoes.map((item: any) => {
                        return (
                          <Category
                            key={item}
                            imageUri={clima}
                            name={item.name}
                            tamanho={130}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.textDescription}>Disciplinas</Text>
                  <View
                    style={{
                      height: 300,
                      marginTop: 10,
                      marginBottom: 25
                    }}
                  >
                    <ScrollView
                      scrollEventThrottle={16}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {this.state.indicacoes.map((item: any) => {
                        return (
                          <Category
                            key={item}
                            imageUri={clima}
                            name={item.name}
                            tamanho={300}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 5
  },
  textDescription: {
    fontFamily: "Hebbo",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    marginLeft: 30
  },
  divCarrousel: {
    flex: 3
  },
  divObrigacoes: {
    flex: 3
  }
});
