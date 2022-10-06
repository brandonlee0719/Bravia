import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmark Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 30
  }
});
