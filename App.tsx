import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InstaSlebScreen from './Screen'; // Assuming your component file is named InstaSlebScreen.tsx
import NextScreen from './NextScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomeScreen" component={InstaSlebScreen}/>
          {/* <Stack.Screen name="Screen" component={InstaSlebScreen} /> */}
          <Stack.Screen name="NextScreen" component={NextScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
