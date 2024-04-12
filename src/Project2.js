import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const Project2 = () => {
    return (
        <View style={{flex: 1,  justifyContent:'center'}}>
            <TouchableOpacity 
                onPress={() => alert("Hello guys")}
                style={{backgroundColor: 'blue', padding: 10, alignItems: 'center', alignItems: 'center'}}
            >
                <Text style={{color: 'black', fontSize: 18}}>Button 1</Text>        
            </TouchableOpacity>
            <Button style={{backgroundColor:'red'}} title="Button 2" onPress={() => alert("Hello2")}/>
        </View>
    );
}
export default Project2;