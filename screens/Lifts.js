import React, { useState, useEffect } from 'react'
import {
    Button,
    ThemeProvider,
    Input,
    Text,
    CheckBox,
  } from "react-native-elements";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { useIsFocused } from "@react-navigation/native";

const Lifts = () => {
    const isFocused = useIsFocused();
    const [keys, setkeys] = useState("")
    const [liftName, setliftName] = useState("")

    const storeData = async (value) => {
        try {
          var pastdata = await AsyncStorage.getItem("dir");
          let out = "";
          if(pastdata!=null){
            //console.log(pastdata.toString());
            out = pastdata+"-"+value;
          }
          else{
            out=value;
          }
          console.log(out);
          await AsyncStorage.setItem("dir", out);
          console.log("data saved");
        } catch (e) {
          console.log(e);
        }
      };

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("dir");
          if (value !== null) {
            console.log(value);
            let lifts = value.split("-")
            setkeys(JSON.stringify(lifts, null, 5));
            return value;
          }
        } catch (e) {
          console.log(e);
        }
      };

      function btnPush() {
        //alert(liftName);
        storeData(liftName)
        getData()
      }

    useEffect(() => {
        if (isFocused) {

          getData();
        }
        console.log("effect");
      }, [isFocused]);

    return (
        <div>
            <Input
            placeholder="Insert Lift Name"
            value={liftName}
            onChange={(e) => setliftName(e.target.value)}
          />
          <Button title="Submit" onPress={btnPush} />
            {keys}
        </div>
    )
}

export default Lifts
