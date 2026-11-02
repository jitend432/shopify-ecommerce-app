import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { COLORS } from '../constants/theme';
import { strings } from '../constants/strings';
import Button from '../components/Button';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.brandTitle}>{strings.appName}</Text>
        <Text style={styles.subtitle}>TRAIN. EVOLVE. REDEFINE.</Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="Get Started"
          onPress={() => navigation.replace('Home')}
        />
        <Button
          title="Skip"
          onPress={() => navigation.replace('Home')}
          outlined
          style={styles.skipButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.textPrimary,
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
    letterSpacing: 4,
  },
  footer: {
    width: '100%',
    paddingBottom: 20,
  },
  skipButton: {
    marginTop: 12,
    borderColor: 'transparent',
  },
});