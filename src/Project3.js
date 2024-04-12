import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Project3 = () => {

    const Button = (props) => {
        return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={{
                backgroundColor: 'ff637c',
                //alignSelf: 'center',
                padding: 10,
                margin: 10,
                marginTop: 100,
                height: 100,
                ...props.ButtonStyle,  
            }}>
            <Text style={{color : '#fff'}}>{props.text}</Text>
        </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: "center"}}>
            <Button text="Say hello" onPress={() => alert("Hello!")} ButtonStyle={{backgroundColor:'red'}}/>
            <Button text="Say hello 1" onPress={() => alert("Hello!")} ButtonStyle={{backgroundColor:'blue'}}/>
        </View>
    );
}
export default Project3;