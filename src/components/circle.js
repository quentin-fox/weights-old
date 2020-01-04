import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const Circle = ({ completed, id, radius, colors, onCompleted }) => {

    const finalColors = colors || ['black', 'white'];
    const finalRadius = radius || 20;

    const pressedStyle = useSpring({
        backgroundColor: completed ? finalColors[0] : finalColors[1],
    });

    const AnimatedView = animated(View);

    const style = StyleSheet.create({
        circle: {
            height: finalRadius,
            width: finalRadius,
            borderRadius: finalRadius / 2,
            borderColor: finalColors[0],
            borderWidth: 2,
        },
    });

    return (
        <TouchableWithoutFeedback accessibilityRole="button" onPress={() => onCompleted(id)}>
            <AnimatedView style={[style.circle, pressedStyle]} />
        </TouchableWithoutFeedback>
    );
};

Circle.propTypes = {
    radius: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
};

export default Circle;
