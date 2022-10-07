import React from 'react';
import {
    Image,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground
} from 'react-native';

import SplashScreen from './containers/SplashScreen';

import BlueButton from './components/BlueButton';


class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <StatusBar barStyle="dark-content" />

                <SplashScreen />
              

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;

