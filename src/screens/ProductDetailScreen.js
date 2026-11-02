import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'; // Added
import { addToCart } from '../redux/cartSlice'; // Added
import { COLORS } from '../constants/theme';
import { strings } from '../constants/strings';
import Button from '../components/Button';
import Header from '../components/Header';

export default function ProductDetailScreen({ route, navigation }) {
  const dispatch = useDispatch(); // Added dispatch hook
  const { product } = route.params || {};
  const [selectedVariant, setSelectedVariant] = useState('S');
  
  const isAvailable = product?.available !== false; 

  return (
    <View style={styles.container}>
      <Header
        title={strings.appName}
        onBackPress={() => navigation.goBack()}
        onCartPress={() => navigation.navigate('Cart')}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={{ uri: product?.image }} style={styles.image} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product?.title || 'Product Title'}</Text>
          <Text style={styles.price}>₹{product?.price || '0.00'}</Text>

          <Text style={styles.sectionTitle}>Select Size</Text>
          <View style={styles.variantContainer}>
            {['S', 'M', 'L', 'XL'].map((variant) => (
              <TouchableOpacity
                key={variant}
                style={[
                  styles.variantButton,
                  selectedVariant === variant && styles.selectedVariantButton,
                ]}
                onPress={() => setSelectedVariant(variant)}
              >
                <Text
                  style={[
                    styles.variantText,
                    selectedVariant === variant && styles.selectedVariantText,
                  ]}
                >
                  {variant}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.description}>
            {product?.description || 'High quality gym apparel designed for performance and comfort.'}
          </Text>

          {!isAvailable && (
            <Text style={styles.unavailableText}>Currently Unavailable / Out of Stock</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title={isAvailable ? strings.addToBag : 'Out of Stock'}
          onPress={() => {
            if (isAvailable) {
              dispatch(addToCart({ ...product, selectedSize: selectedVariant })); // Dispatch added here
              navigation.navigate('Cart'); // Redirect to cart to see added item
            }
          }}
          disabled={!isAvailable}
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
  scroll: {
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 400,
    backgroundColor: COLORS.surface,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  variantContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  variantButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  selectedVariantButton: {
    borderColor: COLORS.textPrimary,
    backgroundColor: COLORS.surface,
  },
  variantText: {
    color: COLORS.textSecondary,
  },
  selectedVariantText: {
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  unavailableText: {
    color: '#ff5252',
    fontWeight: '600',
    marginTop: 8,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
});