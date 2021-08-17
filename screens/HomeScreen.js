import React, {useState} from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Button, ThemeProvider, Input, Text, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import localStorage from '../localStorage.json'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [SetsInput, setSets] = React.useState(null);
  const [RepsInput, setReps] = React.useState(null);
  const [WeightInput, setWeight] = React.useState(null);
  const [checked, toggleChecked] = useState(false);
  const [LiftInput, setLift] = React.useState(null);

  const storeData = async (value) => {
    try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(1, jsonValue)  
  } catch (e) {    // saving error  
  }
}
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(1)    
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value  
    }
  }

  function sayHello(){
    let lift = {"LiftName":LiftInput,
                "LiftSets":SetsInput,
                "LiftReps":RepsInput,
                "LiftWeight":WeightInput,
                "LiftFailure":checked
                }
  

    let storage = Object.keys(localStorage.Lifts).length
    
    storeData(lift)
    getData(1)
  }

  return (
    <SafeAreaProvider>
        <ThemeProvider>
        <View  style={styles.container}>
            <Text h4>Open up App.js to start working on your app!</Text>
            <Input placeholder='Sets' keyboardType ='number-pad' value={SetsInput}
                onChange={(e) => setSets(e.target.value)}/>
            <Input placeholder='Reps' keyboardType ='number-pad' value={RepsInput} value={RepsInput} 
                onChange={(e) => setReps(e.target.value)}/>
            <Input placeholder='Weight' keyboardType ='number-pad' value={WeightInput} value={WeightInput} 
                onChange={(e) => setWeight(e.target.value)}/>
            <CheckBox
              title='Failed Set'
              checked={checked}
              onPress={() => toggleChecked(!checked)}
            />
            <Input placeholder='Lift' value={LiftInput}
                onChange={(e) => setLift(e.target.value)}/>
            <Button title="Log" onPress={sayHello}/>
        </View>
        
        </ThemeProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default HomeScreen