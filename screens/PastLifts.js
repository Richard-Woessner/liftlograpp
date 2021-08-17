import React,{ Component , useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, ThemeProvider, Input, Text, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import localStorage from '../localStorage.json';
import AsyncStorage from '@react-native-async-storage/async-storage';




  const PastLifts = () => {
    const [data, setData] = React.useState(null)
    const getData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            const value = await AsyncStorage.multiGet(keys)   
          if (value !== null) {
            console.log(value);
            setData(value)
            //alert(data)
            return value;
          }
        } catch (e) {
          // error reading value  
        }
      }
    useEffect(() => {   
        getData();
    });
    
        return (
            <SafeAreaProvider>
                <ThemeProvider>
                <View >
                    <div><pre>{data}</pre></div>
                </View>
                </ThemeProvider>
            </SafeAreaProvider>
          )
    
}

export default PastLifts
