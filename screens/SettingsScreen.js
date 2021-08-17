import React from 'react'
import { View } from 'react-native'
import { Button, ThemeProvider, Input, Text, Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SettingScreen = () => {
  return (
    <SafeAreaProvider>
        <ThemeProvider>
        <View>
        
            <Text h4>Open up App.js to start working on your app!</Text>
            <Input placeholder='Reps' keyboardType = 'number-pad' />
        </View>
        </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default SettingScreen