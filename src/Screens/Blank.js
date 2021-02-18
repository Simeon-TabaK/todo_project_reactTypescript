import React from 'react';
import { View, Text } from 'react-native';
export default class Blank extends React.Component {
    render () {
        return (
            <View style = {{ justifyContent : 'center', alignItems : 'center'}}>
                <Text>Next page here</Text>
            </View>
        )
    }
}