import { StyleSheet, Text } from 'react-native'

const Content = ({children}) => {
  return (
    <Text style={styles.content}>
        {children}
    </Text>
  )
}

export default Content

const styles = StyleSheet.create({
    content: {
        fontSize:20,
        color:'#EFBF04',
        marginBottom:"10px",
        textAlign:"center"
    },
})