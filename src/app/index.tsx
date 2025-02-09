import React from 'react'
import { View, StyleSheet } from 'react-native'
import TestTabs from './TestTabs'

function Index() {
  return (
    <View style={styles.container}> 
      <TestTabs />
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
