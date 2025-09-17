import { ScrollView, StyleSheet, View } from 'react-native'

const Screen = ({children}) => {
  return (
    <ScrollView>
        <View style={styles.container}>
            {children}
        </View>
    </ScrollView>
    
  )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        margin:'2%',
  },
})