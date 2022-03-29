import React, { useCallback, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
const StartScreen = ({navigation}) => {
  const tryLogin = useCallback(async () => {
    const authState = await AsyncStorage.getItem("userData");

    if (!authState) {
      navigation.navigate("Login");
      return;
    }

    // is token valid?
   navigation.navigate("Login");
  }, [navigation]);

  useEffect(() => {
    tryLogin();
  }, [tryLogin]);

  useEffect(() => {
    const sub = navigation.addListener("focus", () => {
      tryLogin();
    });
  }, [props.navigation, tryLogin]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default StartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
