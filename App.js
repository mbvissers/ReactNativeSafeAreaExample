import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CoolText from "./CoolText";

export default function App() {
  return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <CoolText>Open up App.js to start working on your app!</CoolText>
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
