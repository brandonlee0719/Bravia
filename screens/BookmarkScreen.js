import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const BookmarkScreen = () => {(
    <View style={styles.container}>
      {/* <Text style={styles.title}>Bookmark Screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  title: {
    color: 'black',
    // fontSize: '30px'
  }
});
