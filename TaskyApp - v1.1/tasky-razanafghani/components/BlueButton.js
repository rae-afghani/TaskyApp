import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueButton extends React.Component {

    handleClick = () => {
        if (this.props.onPress) {
            this.props.onPress();
        }
    };

    render() {
       let { title, style } = this.props;
       return (
           <TouchableOpacity 
               style={[styles.blueButton, style]} 
               onPress={this.handleClick}
           >
               <Text style={styles.blueButtonText}>{title}</Text>
           </TouchableOpacity>
       );
    }
}

const styles = StyleSheet.create({
    blueButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 50,
    },
    blueButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});