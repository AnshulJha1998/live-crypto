/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from './utils/common';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Loading from './screens/loading';
import Auth from './screens/auth';
import Location from './screens/location';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.bg,
  },
};

function App() {
  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: theme.bg, fontFamily: 'Roboto' },
});
export default App;
