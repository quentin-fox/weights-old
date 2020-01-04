import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Control = () => {
    return (
        <View style={style.container}>
            <Button title="Exit" />
            <Button title="Begin" />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Control;
