import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

function Project4() {
    const [pressCount, setPressCount] = useState(0);
  return (
    <View style={{alignItems: 'center', marginTop: 80}}>
        <Text>Bạn đã nhấn nút này {pressCount} lần!</Text>
        <Button
         title={`Đã nhấn nút này ${pressCount}`}
         onPress={() => setPressCount(pressCount + 1)}
         />
    </View>
  )
}

export default Project4