import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source='https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
        contentFit='contain'
        style={{ width: 150, height: 150 }}
      />
      <View style={{ height: 30 }} />
      <Image
        source={require('./assets/react-native-logo.svg')}
        contentFit='contain'
        style={{ width: 150, height: 150 }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
