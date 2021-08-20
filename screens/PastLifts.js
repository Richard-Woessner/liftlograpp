import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
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
import { useIsFocused } from "@react-navigation/native";

const PastLifts = (props) => {
  let [data, setData] = React.useState("");
  const isFocused = useIsFocused();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("lifts");
      if (value !== null) {
        var strArray = value.split("-");
        let lifts = [];
        // Display array values on page
        for (var i = 0; i < strArray.length; i++) {
          strArray.reverse()
          lifts.push(JSON.parse(strArray[i]));
        }
        console.log(lifts);
        setData(lifts);
        return lifts;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      setData(null);
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
    console.log("effect");
  }, [isFocused]);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View>
          <Button title="Clear Data" onPress={clearAll} />
          <div>
            <pre>{JSON.stringify(data, null, 5)}</pre>
          </div>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default PastLifts;
