import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import BlueButton from './components/BlueButton';


class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <Text style={{textAlign:'center', marginTop:100, fontWeight:'bold'}}>Welcome to Tasky</Text>
                <BlueButton style={{margin:20}} title="Sign In" />
            </>
        );
    }
}

export default App;