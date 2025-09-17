import { StyleSheet, Text, TouchableOpacity } from "react-native";



function SearchAppButton({ title, onPress }) {
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
    backgroundColor: '#660033',
    borderWidth:2,
    borderColor:"#EFBF04",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "20%",
    marginVertical: 10,
  },
  text: {
    color:'#EFBF04',
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default SearchAppButton;
