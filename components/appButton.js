import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'royalblue',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color:'white',
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
