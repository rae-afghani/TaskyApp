import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';

import BlueButton from '../components/BlueButton';

const bgImage = require('../assets/paper.jpg');
const taskyIcon = require('../assets/tasky-logo.png');
const taskyLogo = require('../assets/tasky-name.png')

export default class SplashScreen extends React.Component {

  render() {
    return (
        <ImageBackground 
          source={bgImage} 
          style={styles.container}
        >
          <Image
            source={taskyIcon}
            style={styles.icon}
          />

          <Image
            source={taskyLogo}
            style={styles.logo}
          />

          <Text style={styles.tagline}>
            let's get things done
          </Text>


          <BlueButton style={{width: "100%"}} title="sign in"/>



        </ImageBackground>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        height: '100%',

    },
    tagline: {
      marginTop: 15,
      marginBottom: 15,
      fontWeight: 'bold',
      color: 'black',
      textTransform: 'uppercase',

    },
    icon: {
      width: 64,
      height: 64,
      marginBottom: 20,

    },
    logo: {
      width: 200,
      height:60,
      marginBottom: 10,

    },
    
});

























