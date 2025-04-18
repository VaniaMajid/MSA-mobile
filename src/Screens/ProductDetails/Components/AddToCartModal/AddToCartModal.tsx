import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useStyles } from './AddToCartModal.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { IconCross } from '~Components/Icons';
import { Modal } from 'react-native';

interface Variant {
  [key: string]: any;
  price: number;
  quantity: number;
}

type AddToCartModalProps = {
  isVisible: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    unit: string;
    priceRanges: { range: string; price: string }[];
    variants: Variant[];
    images: any[];
  };
  onAddToCart: (cartItem: any) => void;
};

export const AddToCartModal: FC<AddToCartModalProps> = ({
  isVisible,
  onClose,
  product,
  onAddToCart,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});
  const [activePriceRange, setActivePriceRange] = useState<number>(0);

  // Initialize quantities
  useEffect(() => {
    if (isVisible && product.variants.length > 0) {
      const initialQuantities: Record<string, number> = {};
      product.variants.forEach((variant, index) => {
        const variantId = `${index}-${Object.values(variant)
          .filter(val => typeof val === 'string' || typeof val === 'number')
          .join('-')}`;
        initialQuantities[variantId] = 0;
      });
      setSelectedQuantities(initialQuantities);
    }
  }, [isVisible, product.variants]);

  // Update price range based on total quantity
  useEffect(() => {
    const totalQuantity = Object.values(selectedQuantities).reduce(
      (sum, qty) => sum + qty,
      0
    );

    const newRangeIndex = product.priceRanges.findIndex(range => {
      const [min, max] = range.range.split('-').map(Number);
      return totalQuantity >= min && (max ? totalQuantity <= max : true);
    });

    if (newRangeIndex !== -1) {
      setActivePriceRange(newRangeIndex);
    }
  }, [selectedQuantities, product.priceRanges]);

  const handleQuantityChange = (variantId: string, newQuantity: number) => {
    const variant = product.variants.find((v, index) => {
      const id = `${index}-${Object.values(v)
        .filter(val => typeof val === 'string' || typeof val === 'number')
        .join('-')}`;
      return id === variantId;
    });

    if (!variant || newQuantity < 0 || newQuantity > variant.quantity) {
      return;
    }

    setSelectedQuantities(prev => ({
      ...prev,
      [variantId]: newQuantity,
    }));
  };

  const handleAddToCart = () => {
    Object.entries(selectedQuantities).forEach(([variantId, quantity]) => {
      if (quantity > 0) {
        const variantIndex = parseInt(variantId.split('-')[0], 10);
        const variant = product.variants[variantIndex];
        if (variant) {
          const properties: Record<string, any> = {};
          Object.keys(variant).forEach(key => {
            if (key !== 'price' && key !== 'quantity') {
              properties[key] = variant[key];
            }
          });

          const cartItem = {
            id: `${product.id}`,
            name: product.name,
            price: variant.price,
            quantity,
            image: product.images[0] || null,
            selectedPriceRange: product.priceRanges[activePriceRange] || null,
            selectedVariants: properties,
          };
          onAddToCart(cartItem);
        }
      }
    });
    onClose();
  };

  const variantKeys = Array.from(
    new Set(
      product.variants.flatMap(variant =>
        Object.keys(variant).filter(key => key !== 'price' && key !== 'quantity')
      )
    )
  );

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <IconCross size="xxs" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={[theme.fonts.paragraphSemiBold, styles.modalTitle]}>
          Select Options
        </Text>

        {/* Price Ranges */}
        <View style={styles.sectionContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
            Price Ranges
          </Text>
          {product.priceRanges.length > 0 ? (
            product.priceRanges.map((range, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActivePriceRange(index)}
                style={[
                  styles.priceRangeItem,
                  activePriceRange === index && styles.activePriceRangeItem,
                ]}
              >
                <Text
                  style={[
                    theme.fonts.paragraphRegular,
                    activePriceRange === index && styles.activePriceRangeText,
                  ]}
                >
                  {range.range} {product.unit}
                </Text>
                <Text
                  style={[
                    theme.fonts.paragraphRegular,
                    activePriceRange === index && styles.activePriceRangeText,
                  ]}
                >
                  PKR {range.price}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={theme.fonts.paragraphRegular}>No price ranges available</Text>
          )}
        </View>

        {/* Variant Combinations */}
        <View style={styles.sectionContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
            Variants
          </Text>
          {product.variants.length > 0 ? (
            product.variants.map((variant, index) => {
              const variantId = `${index}-${Object.values(variant)
                .filter(val => typeof val === 'string' || typeof val === 'number')
                .join('-')}`;
              return (
                <View key={variantId} style={styles.variantContainer}>
                  <View style={styles.variantDetails}>
                    {variantKeys
                      .filter(key => key !== 'id')
                      .map(key => (
                      <Text
                        key={key}
                        style={[theme.fonts.paragraphRegular, styles.variantText]}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {String(variant[key] || 'N/A')}
                      </Text>
                      ))}
                    <Text
                      style={[theme.fonts.paragraphRegular, styles.variantText]}
                    >
                      Price: PKR {variant.price}
                    </Text>
                    <Text
                      style={[theme.fonts.paragraphRegular, styles.variantText]}
                    >
                      Available: {variant.quantity}
                    </Text>
                  </View>

                  {/* Quantity Selector */}
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        handleQuantityChange(variantId, (selectedQuantities[variantId] || 0) - 1)
                      }
                      style={[
                        styles.quantityButton,
                        variant.quantity === 0 && styles.disabledButton,
                      ]}
                      disabled={variant.quantity === 0}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>
                      {selectedQuantities[variantId] || 0}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        handleQuantityChange(variantId, (selectedQuantities[variantId] || 0) + 1)
                      }
                      style={[
                        styles.quantityButton,
                        variant.quantity === 0 && styles.disabledButton,
                      ]}
                      disabled={variant.quantity === 0}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={theme.fonts.paragraphRegular}>No variants available</Text>
          )}
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            Object.values(selectedQuantities).every(qty => qty === 0) && styles.disabledButton,
          ]}
          onPress={handleAddToCart}
          disabled={Object.values(selectedQuantities).every(qty => qty === 0)}
        >
          <Text style={theme.fonts.paragraphSemiBold}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </Modal>
  );
};