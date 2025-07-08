/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>HI</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export default App;
