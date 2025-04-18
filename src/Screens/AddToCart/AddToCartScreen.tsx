import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useCartStore} from '~Configs/cartStore';
import {useStyles} from './AddtoCartScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {IconDeleteIconWhite} from '~Components/Icons';
import { BASE_URL } from '~Constants/index';
import { Path } from '~Navigators/routes';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
type AddtoCartScreenProps = StackScreenProps<AuthParamList>;

export const AddToCartScreen: FC<AddtoCartScreenProps> = ({
  navigation
}) => {
  const {cart, updateQuantity, removeFromCart} = useCartStore();
  const theme = useTheme();
  const styles = useStyles();

  // Function to extract min and max quantities from the price range string
  const parsePriceRange = (range: string) => {
    const [min, max] = range
      .split('-')
      .map(value => parseInt(value.trim(), 10));
    return {minQuantity: min, maxQuantity: max};
  };

  // Function to calculate the total price for each item, including the variant price
  // Function to calculate the total price for each item, including the variant price
const calculateItemTotal = (item: any) => {
  let itemPrice = parseFloat(item.price); // Base price of the product

  // Check if the item has selected variants
  if (item.selectedVariants) {
    // Check if the selectedVariants object contains an additional price
    if (item.selectedVariants.price) {
      const variantAdditionalPrice = parseFloat(item.selectedVariants.price);
      itemPrice += isNaN(variantAdditionalPrice) ? 0 : variantAdditionalPrice; // Add variant price
    }
  }

  return itemPrice * item.quantity; // Multiply by quantity
};

  // Function to calculate the total bill
  const calculateTotalBill = () => {
    return cart
      .reduce((total, item) => total + calculateItemTotal(item), 0)
      .toFixed(2); // Sum all item totals
  };

  const handleUpdateQuantity = (
    uniqueId: string,
    quantity: number,
    range: string,
  ) => {
    const {minQuantity, maxQuantity} = parsePriceRange(range);

    if (quantity < minQuantity) {
      Alert.alert(
        'Minimum Quantity',
        `Quantity cannot be less than ${minQuantity}.`,
      );
      return;
    }
    if (quantity > maxQuantity) {
      Alert.alert(
        'Maximum Quantity',
        `Only ${maxQuantity} items available in this price range.`,
      );
      return;
    }
    updateQuantity(uniqueId, quantity);
  };

  const handleRemoveItem = (uniqueId: string) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => removeFromCart(uniqueId),
      },
    ]);
  };

  const handleProceedToCheckout = () => {
    navigation.navigate(Path.CHECKOUT_SCREEN);
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cart.map(item => {
        // Create a unique identifier for each variant
        const uniqueId = `${item.id}-${item.selectedPriceRange?.range || 'default'}`;
        const priceRange = item.selectedPriceRange?.range || '1-1'; // Default to 1-1 if no range is provided

        return (
          <View key={uniqueId} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text
                style={[theme.fonts.paragraphSmallSemiBold, styles.itemName]}>
                {item.name}
              </Text>
              <Text
                style={[theme.fonts.paragraphRegularSmall, styles.itemPrice]}>
                PKR {item.price} ({item.selectedPriceRange?.range || 'Default'})
              </Text>
              {item.selectedVariants && (
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.variantsText,
                  ]}>
                  Variants:{' '}
                  {Object.entries(item.selectedVariants)
                    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                    .join(', ')}
                </Text>
              )}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateQuantity(
                      uniqueId,
                      item.quantity - 1,
                      priceRange,
                    )
                  }
                  style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateQuantity(
                      uniqueId,
                      item.quantity + 1,
                      priceRange,
                    )
                  }
                  style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveItem(uniqueId)}
                style={styles.deleteButton}>
                <IconDeleteIconWhite size="xxxs" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {/* Total Bill Section */}
      <View style={styles.totalContainer}>
        <Text style={[theme.fonts.paragraphSmallSemiBold, styles.totalText]}>
          Total:
        </Text>
        <Text style={[theme.fonts.paragraphSmallSemiBold, styles.totalText]}>
          PKR {calculateTotalBill()}
        </Text>
      </View>

      {/* Proceed to Checkout Button */}
      <TouchableOpacity
        onPress={handleProceedToCheckout}
        style={styles.checkoutButton}>
        <Text
          style={[
            theme.fonts.paragraphRegularSmall,
            styles.checkoutButtonText,
          ]}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
