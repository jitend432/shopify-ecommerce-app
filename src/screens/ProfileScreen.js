import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { strings } from '../constants/strings';
import Button from '../components/Button';
import Header from '../components/Header';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title={strings.profile} />
      <View style={styles.content}>
        <Text style={styles.email}>user@gymstore.com</Text>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
          outlined
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 24,
    fontWeight: '500',
  },
});