import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider, Input, Text, Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import PastLifts from './screens/PastLifts';




function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App(props) {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'LiftLogr'}}/>
        <Drawer.Screen name="PastLifts" component={PastLifts}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
