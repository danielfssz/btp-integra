import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class Category extends Component {
  public props: any;
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          height: this.props.tamanho,
          width: this.props.tamanho,
          marginLeft: 20,
          borderWidth: 0.5,
          borderRadius: 20,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: this.props.imageUri < 200 ? 1 : 3,
              width: this.props.tamanho - 1,
              resizeMode: "cover",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />
        </View>
        <View
          style={{
            flex: this.props.imageUri < 200 ? 1 : 1,
            paddingLeft: 10,
            paddingTop: 10,
            backgroundColor: "#EBEBEB",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
        >
          <Text>{this.props.name}</Text>
          <Text>sldm</Text>
        </View>
      </View>
    );
  }
}
