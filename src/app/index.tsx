import React from 'react'
import { View, StyleSheet } from 'react-native'
import TestTabs from './TestTabs'

function Index() {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}> 
      <TestTabs setIndex={setIndex}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
    
  }
})

export default Index