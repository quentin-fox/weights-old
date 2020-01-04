import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Circle from './circle';

const ResistanceExercise = ({ data: { name, reps, baseWeight, sets } }) => {
    const [active, setActive] = useState(false);

    const [setsCompleted, setSetsCompleted] = useState(Array(sets).fill(false));

    const activeHeight = useSpring({
        height: active ? 180 : 50,
    });

    const activeOpacity = useSpring({
        opacity: active ? 1 : 0,
        display: active ? 'flex' : 'none',
    });

    const handleCompleted = index => {
        const newSets = setsCompleted.map((set, i) => {
            if (index === i) {
                return !set;
            } else {
                return set;
            }
        });

        setSetsCompleted(newSets);
    };

    const AnimatedView = animated(View);

    return (
        <TouchableWithoutFeedback onPress={() => setActive(!active)}>
            <AnimatedView style={[style.container, activeHeight]}>
                <Text style={style.exerciseTitle}>{name}</Text>
                <AnimatedView style={[style.detailContainer, activeOpacity]}>
                    <View style={style.detailSubContainer}>
                        <Text>Reps</Text>
                        <Text style={style.detail}>{reps}</Text>
                    </View>
                    <View style={style.detailSubContainer}>
                        <Text>Weight</Text>
                        <Text style={style.detail}>{baseWeight} lbs</Text>
                    </View>
                    <View style={style.detailSubContainer}>
                        <Text>Sets</Text>
                        <Text style={style.detail}>{sets}</Text>
                    </View>
                </AnimatedView>
                <AnimatedView style={[style.circleContainer, activeOpacity]}>
                    {setsCompleted.map((v, i) => {
                        return (
                            <Circle
                                key={i}
                                completed={v}
                                id={i}
                                radius={25}
                                onCompleted={handleCompleted}
                            />
                        );
                    })}
                </AnimatedView>
            </AnimatedView>
        </TouchableWithoutFeedback>
    );
};

ResistanceExercise.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        reps: PropTypes.number,
        baseWeight: PropTypes.number,
        sets: PropTypes.number,
    }),
};

const style = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
    },
    detailSubContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    detailContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    circleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    exerciseTitle: {
        flex: 1,
        marginLeft: 10,
        minHeight: 15,
        fontSize: 20,
    },
    detail: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    weight: {},
    sets: {},
});

export default ResistanceExercise;
