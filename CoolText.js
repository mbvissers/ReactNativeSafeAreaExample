import React from 'react';
import { StyleSheet, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const CoolText = (props) => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>{props.children}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        color: '#ff0000',
        fontSize: 36
    }
});

export default CoolText;