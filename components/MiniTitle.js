import { StyleSheet, Text } from 'react-native'

const MiniTitle = ({children}) => {
  return (
    <Text style={styles.miniTitle}>
        {children}
    </Text>
  )
}

export default MiniTitle

const styles = StyleSheet.create({
    miniTitle: {
        fontSize:25,
        color:'#EFBF04',
        margin:"2%"
    },
})