import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export default function Button({ title, onPress, style, textStyle, outlined = false }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outlined ? styles.outlined : styles.filled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, outlined ? styles.outlinedText : styles.filledText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 8,
  },
  filled: {
    backgroundColor: COLORS.primary,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  filledText: {
    color: COLORS.white,
  },
  outlinedText: {
    color: COLORS.primary,
  },
});