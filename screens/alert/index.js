import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Alert = () => {
  return <View style={styles.container}>
      <Text style={styles.heading}>Alert</Text>
    <Text style={styles.pdIdnhFn}>Lorem ipsum…</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 20
  },
  pdIdnhFn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Alert;