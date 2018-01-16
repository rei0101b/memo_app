import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleAddButton}>
        <Text style={styles.circleAddButtonTitle}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

export default CircleButton;

const styles = StyleSheet.create({
  circleAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleAddButtonTitle: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 32,
  },
});
