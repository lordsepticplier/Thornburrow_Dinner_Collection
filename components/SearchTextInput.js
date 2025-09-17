import { StyleSheet, TextInput, View } from "react-native";



function SearchAppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      
      <TextInput style={{width:"100%", color:"#EFBF04", textAlign: 'center'}} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#660033',
    borderRadius: 25,
    flexDirection: "row",
    width: "30%",
    padding: 7,
    marginVertical: 10,
    marginHorizontal:"5%",
    borderWidth:2,
    borderColor:"#EFBF04",
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchAppTextInput;
