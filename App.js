import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import ResistanceExercise from './src/components/resistance_exercise';
import Control from './src/components/titlecontrol';
import Circle from './src/components/circle';

const App = () => {
    const data = [
        { name: 'Bench Press', reps: 5, baseWeight: 155, sets: 5 },
        { name: 'Overhead Press', reps: 8, baseWeight: 100, sets: 5 },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
            <Text style={style.title}>Workout</Text>
            <Control />
            <ScrollView>
                {data.map((exData, index) => {
                    return <ResistanceExercise data={exData} key={index} />;
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default App;
