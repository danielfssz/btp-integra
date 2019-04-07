import { AsyncStorage } from "react-native";
import api from "./api";

export const TOKEN_KEY = "@AuthToken:token";

export const onSignIn = (data: any) => {
  return new Promise((resolve, reject) => {
    api
      .post("/login", data)
      .then(response => {
        AsyncStorage.setItem(TOKEN_KEY, response.data.body.token);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null ? true : false;
};
