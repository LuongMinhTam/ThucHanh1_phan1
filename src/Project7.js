import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        marginTop: 60,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 5,
    },
});

function Project7() {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is your name?</Text>
            <TextInput
                style={styles.input}
                placeholder='John Padan'
                placeholderTextColor="rbga(0, 0, 0,  0.5)"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title='Say Hello'
                onPress={() => {
                    alert(`Hello ${name}`)
                    setName('')
                }}
            />
        </View>
    );
};

export default Project7