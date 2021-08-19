import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  Button,
  ThemeProvider,
  Input,
  Text,
  CheckBox,
} from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import localStorage from "../localStorage.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [SetsInput, setSets] = React.useState("");
  const [RepsInput, setReps] = React.useState("");
  const [WeightInput, setWeight] = React.useState("");
  const [checked, toggleChecked] = useState(false);
  const [LiftInput, setLift] = React.useState(null);

  const storeData = async (value) => {
    try {
      var pastdata = await AsyncStorage.getItem("lifts");
      let out = "";
      if(pastdata!=null){
        //console.log(pastdata.toString());
        out = pastdata+"-"+JSON.stringify(value);
      }
      else{
        out=JSON.stringify(value);
      }
      //console.log(out);
      await AsyncStorage.setItem("lifts", out);
      console.log("data saved");
    } catch (e) {
      console.log(e);
    }
  };
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
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  function sayHello() {
    let key = Math.random().toString;
    let liftdata = {
        LiftName: LiftInput,
        LiftSets: SetsInput,
        LiftReps: RepsInput,
        LiftWeight: WeightInput,
        LiftFailure: checked
      };
    //alert(JSON.stringify(lift));
    
    storeData(liftdata);
    
  }

  useEffect(() => {
    
    getData();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Text h4>Log your lift</Text>
          <Input
            placeholder="Lift"
            value={LiftInput}
            onChange={(e) => setLift(e.target.value)}
          />

          <Input
            placeholder="Sets"
            keyboardType="number-pad"
            value={SetsInput}
            onChange={(e) => setSets(e.target.value)}
          />
          <Input
            placeholder="Reps"
            keyboardType="number-pad"
            value={RepsInput}
            value={RepsInput}
            onChange={(e) => setReps(e.target.value)}
          />
          <Input
            placeholder="Weight"
            keyboardType="number-pad"
            value={WeightInput}
            value={WeightInput}
            onChange={(e) => setWeight(e.target.value)}
          />
          <CheckBox
            title="Failed Set"
            checked={checked}
            onPress={() => toggleChecked(!checked)}
          />

          <Button title="Log" onPress={sayHello} />
          <Button title="Clear Data" onPress={clearAll} />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

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

export default HomeScreen;
