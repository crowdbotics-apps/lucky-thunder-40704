import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
const NEXT_SCREEN_NAME = "TermsAndConditions";

const Splash = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME);
    }, 3000);
  }, []);
  return <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require("./path/to/your/image.png")} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b85f7"
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
export default {
  title: "SplashScreen",
  navigator: Splash
};