import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    alert('Hello World');
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
