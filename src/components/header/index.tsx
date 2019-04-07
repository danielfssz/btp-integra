import React, { Component } from "react";
import { Header, Avatar } from "react-native-elements";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderMenu extends Component {
  public props: any;
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "rgba(255, 255, 255, 0)",
            borderBottomColor: "rgba(255, 255, 255, 0)"
          }}
          leftComponent={
            <View style={styles.searchSection}>
              <Icon
                style={styles.searchIcon}
                name="search"
                size={15}
                color="#000"
              />
              <TextInput
                style={styles.input}
                placeholder="Pesquise"
                onChangeText={searchString => {
                  this.setState({ searchString });
                }}
                underlineColorAndroid="transparent"
              />
            </View>
          }
          rightComponent={
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    fontSize: 12,
    height: "70%",
    width: 250,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginTop: 20,
    paddingLeft: 10,
    color: "#fff"
  },
  searchIcon: {
    padding: 6
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242"
  }
});
