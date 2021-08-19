import React,{ Component , useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, ThemeProvider, Input, Text, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import localStorage from '../localStorage.json';
import AsyncStorage from '@react-native-async-storage/async-storage';




  const PastLifts = () => {
    const [data, setData] = React.useState('')
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("lifts");
        if (value !== null) {
          var strArray = value.split("-");
          let lifts = [];
          // Display array values on page
          for(var i = 0; i < strArray.length; i++){
            lifts.push(JSON.parse(strArray[i]));
        }
          console.log(lifts);
          setData(lifts)
        }
      } catch (e) {
        console.log(e);
      }
    };
    
    useEffect(() => {   
        getData();
    });
    
        return (
            <SafeAreaProvider>
                <ThemeProvider>
                <View >
                    <div><pre>{JSON.stringify(data, null, 5)}</pre></div>
                </View>
                </ThemeProvider>
            </SafeAreaProvider>
          )
    
}

export default PastLifts
