import React, { FC, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useStyles } from './AddToCartModal.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { IconCross } from '~Components/Icons';
import { useCartStore } from '~Configs/cartStore'; // Import Zustand store

interface Variant {
  color: string;
  size: string;
  price: string;
  quantity: string;
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
    images: any[]; // Assuming the product has an image field
  };
};

export const AddToCartModal: FC<AddToCartModalProps> = ({
  isVisible,
  onClose,
  product,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});
  const [activePriceRange, setActivePriceRange] = useState<number>(0);
  const addToCart = useCartStore((state) => state.addToCart); // Zustand's addToCart method

  // Initialize state when modal becomes visible
  useEffect(() => {
    if (isVisible && product.variants.length > 0) {
      const defaultColor = product.variants[0].color;
      setSelectedColor(defaultColor);
      initializeQuantities(defaultColor);
    }
  }, [isVisible]);

  const initializeQuantities = (color: string) => {
    const colorVariants = product.variants.filter((variant) => variant.color === color);
    const initialQuantities: Record<string, number> = {};
    colorVariants.forEach((variant) => {
      initialQuantities[variant.size] = 0;
    });
    setSelectedQuantities(initialQuantities);
  };

  const handleQuantityChange = (size: string, newQuantity: number) => {
    const colorVariant = product.variants.find(
      (variant) => variant.color === selectedColor && variant.size === size
    );

    if (newQuantity < 0 || newQuantity > parseInt(colorVariant?.quantity || '0')) return;

    const updatedQuantities = { ...selectedQuantities, [size]: newQuantity };
    setSelectedQuantities(updatedQuantities);

    const totalQuantity = Object.values(updatedQuantities).reduce((sum, qty) => sum + qty, 0);
    const newRangeIndex = product.priceRanges.findIndex((range) => {
      const [min, max] = range.range.split('-').map(Number);
      return totalQuantity >= min && totalQuantity <= max;
    });

    if (newRangeIndex !== -1) setActivePriceRange(newRangeIndex);
  };

  const handleAddToCart = () => {
    // Loop through each size in selectedQuantities
    Object.keys(selectedQuantities).forEach((size) => {
      // Check if the quantity for this size is greater than 0
      if (selectedQuantities[size] > 0) {
        // Find the specific variant matching the selected color and size
        const variant = product.variants.find(
          (v) => v.color === selectedColor && v.size === size
        );
  
        if (variant) {
          // Prepare the cart item object
          const cartItem = {
            id: `${product.id}-${selectedColor}-${size}`, // Create a unique ID for each cart item
            name: product.name,
            price: variant.price,
            quantity: selectedQuantities[size],
            image: product.images[0], // Assuming the first image as the product image
            selectedPriceRange: product.priceRanges[activePriceRange],
            selectedVariants: {
              color: selectedColor, // Selected color
              size, // Current size
            },
          };
  
          // Add this item to the Zustand cart store
          addToCart(cartItem);
        }
      }
    });
  
    // Close the modal after adding items to the cart
    onClose();
  };
  

  const availableSizes = product.variants
    .filter((variant) => variant.color === selectedColor)
    .map((variant) => variant.size);

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      avoidKeyboard
    >
      <ScrollView contentContainerStyle={styles.modalContainer}>
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
          {product.priceRanges.map((range, index) => (
            <View
              key={index}
              style={[
                styles.priceRangeItem,
                activePriceRange === index && styles.activePriceRangeItem,
              ]}
            >
              <Text style={theme.fonts.paragraphRegular}>{range.range} {product.unit}</Text>
              <Text style={theme.fonts.paragraphRegular}>PKR {range.price}</Text>
            </View>
          ))}
        </View>

        {/* Color Selection */}
        <View style={styles.sectionContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
            Colors
          </Text>
          <ScrollView horizontal>
            {Array.from(new Set(product.variants.map((v) => v.color))).map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorOption,
                  selectedColor === color && styles.activeColorOption,
                ]}
                onPress={() => {
                  setSelectedColor(color);
                  initializeQuantities(color);
                }}
              >
                <Text style={theme.fonts.paragraphRegular}>{color}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Sizes and Quantities */}
        <View style={styles.sectionContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
            Sizes
          </Text>
          {availableSizes.map((size) => {
            const variant = product.variants.find(
              (v) => v.color === selectedColor && v.size === size
            );
            const isDisabled = parseInt(variant?.quantity || '0') === 0;

            return (
              <View key={size} style={styles.sizeContainer}>
                <Text style={theme.fonts.paragraphRegular}>{size}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      !isDisabled && handleQuantityChange(size, selectedQuantities[size] - 1)
                    }
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{selectedQuantities[size]}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      !isDisabled && handleQuantityChange(size, selectedQuantities[size] + 1)
                    }
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={theme.fonts.paragraphSemiBold}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};
