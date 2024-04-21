import React from "react";
import { View } from "react-native";
import { Text as PaperText } from "react-native-paper"; 

const DetailScreen = () => {
  return (
    <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
      <PaperText> Detail Screen</PaperText> 
    </View>
  );
}

export default DetailScreen;