import React, {FC, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {useStyles} from './ProductDetailScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import {
  IconStar,
  IconStarHalf,
  IconStarEmpty,
  IconWishlistActiveFilled,
  IconWishlistInactive,
  IconCartWhite,
} from '~Components/Icons';
import { AddToCartModal } from './Components';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {useCartStore} from '~Configs/cartStore';

// Define the ProductDetailScreenProps using StackScreenProps
type ProductDetailScreenProps = StackScreenProps<
  AuthParamList,
  'ProductDetails'
>;

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {product} = route.params; // Extract product from route.params
  const styles = useStyles();
  const theme = useTheme();
  const {addToCart} = useCartStore();

  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const {width} = Dimensions.get('window');
  const [animationValue] = useState(new Animated.Value(0));
  const [isModalVisible, setModalVisible] = useState(true);

  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(
    product.priceRanges.length > 0 ? 0 : null // Default to the first price range if available
  );
  
  const [selectedVariant, setSelectedVariant] = useState<number | null>(
    product.variants.length > 0 ? 0 : null // Default to the first variant if available
  );
  const toggleWishlist = () => setWishlist(!wishlist);

  // Function to render each image item
  const renderImageItem = ({item}: {item: any}) => (
    <View style={styles.imageContainer}>
      <Image
        source={item}
        style={[styles.carouselImage, {resizeMode: 'contain'}]}
      />
    </View>
  );

  // Function to calculate the number of stars to display based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star
    const emptyStars = 5 - (fullStars + halfStars); // Empty stars

    return (
      <View style={styles.starContainer}>
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, index) => (
          <IconStar key={`full-${index}`} size="xxs" />
        ))}
        {/* Render half star if applicable */}
        {halfStars === 1 && <IconStarHalf size="xxs" />}
        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <IconStarEmpty key={`empty-${index}`} size="xxs" />
        ))}
      </View>
    );
  };

  const showCartAnimation = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAddToCart = () => {
    // Select the first price range if not selected
    const selectedPrice =
      selectedPriceRange !== null
        ? product.priceRanges[selectedPriceRange]
        : product.priceRanges[0]; // Default to the first price range if not selected
  
    // Select the first variant if not selected
    const selectedVariantData =
      selectedVariant !== null
        ? product.variants[selectedVariant]
        : product.variants[0]; // Default to the first variant if not selected
  
    // Extract min quantity from the selected price range string (e.g., "1-5" => 1)
    const getMinQuantityFromRange = (range: string) => {
      const [minQuantity] = range.split('-').map((value) => parseInt(value.trim(), 10));
      return minQuantity || 1; // Default to 1 if the min quantity is invalid
    };
  
    const minQuantity = selectedPrice?.range ? getMinQuantityFromRange(selectedPrice.range) : 1;
  
    // Create a unique identifier for the product-variant combination
    const uniqueCartItemId = `${product.id}_${selectedVariant !== null ? selectedVariant : 'default'}`;
  
    // Add to cart with the unique identifier
    addToCart({
      id: uniqueCartItemId, // Unique identifier for the variant
      name: product.name,
      price: selectedPrice?.price.toString() || '0',
      image: product.images[0],
      quantity: minQuantity, // Set the quantity to the minimum value from the price range
      selectedPriceRange: selectedPrice,
      selectedVariants: selectedVariantData,
    });
  
    showCartAnimation();
  };
  
  
  const animationStyle = {
    opacity: animationValue,
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1.2],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Animated Add to Cart Message */}
        <Animated.View style={[styles.addToCartAnimation, animationStyle]}>
          <Text
            style={[
              theme.fonts.paragraphRegularSmall,
              styles.cartAnimationText,
            ]}>
            Product Added to Cart!
          </Text>
        </Animated.View>

        {/* Image Carousel */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity
            onPress={toggleWishlist}
            style={styles.wishlistContainer}>
            {wishlist ? (
              <IconWishlistActiveFilled size="xxs" />
            ) : (
              <IconWishlistInactive size="xxs" />
            )}
          </TouchableOpacity>
          <ReanimatedCarousel
            data={product.images}
            renderItem={renderImageItem}
            width={width}
            height={styles.carouselImage.height}
            onSnapToItem={index => setActiveSlide(index)}
            scrollAnimationDuration={1000}
          />
          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeSlide === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.productDetailsContainer}>
          <View style={styles.productInfoHeader}>
            <Text style={[theme.fonts.paragraphSemiBold, styles.productName]}>
              {product.name}
            </Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={handleAddToCart}>
              <IconCartWhite size="xxs" />
            </TouchableOpacity>
          </View>
          <Text
            style={[theme.fonts.paragraphRegularSmall, styles.productDetails]}>
            {product.details}
          </Text>
        </View>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {renderStars(product.ratings)}
          <Text style={[theme.fonts.subtextSmall, styles.ratingsText]}>
            {product.ratings} Ratings
          </Text>
        </View>
        {/* Price Ranges */}
        <View style={styles.priceRangeContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.priceRangeTitle]}>
            Price Ranges:
          </Text>
          {product.priceRanges.map((range, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedPriceRange(index)}
              style={[
                styles.priceRangeItem,
                selectedPriceRange === index && styles.selectedItem,
              ]}>
              <Text style={theme.fonts.paragraphRegular}>
                {range.range} {product.unit}
              </Text>
              <Text
                style={[
                  theme.fonts.paragraphSemiBold,
                  {color: theme.colors.black},
                ]}>
                PKR {range.price}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Variants */}
        <View style={styles.variantsContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.variantsTitle]}>
            Variants:
          </Text>
          {product.variants.map((variant, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedVariant(index)}
              style={[
                styles.variantItem,
                selectedVariant === index && styles.selectedItem,
              ]}>
              {Object.entries(variant).map(([key, value]) => (
                <Text key={key} style={theme.fonts.paragraphRegular}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
                  {Array.isArray(value)
                    ? value.join(', ') // Join array values with commas
                    : typeof value === 'object' && value !== null
                      ? `Price: ${value.price}, Quantity: ${value.quantity}` // Handle object case
                      : value}{' '}
                  {/* Fallback for string */}
                </Text>
              ))}
            </TouchableOpacity>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.chatNowButton}
          onPress={() => setModalVisible(true)}
          >
            <Text
              style={[
                theme.fonts.paragraphRegularSmall,
                styles.chatNowButtonText,
              ]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text
              style={[
                theme.fonts.paragraphRegularSmall,
                styles.inquiryButtonText,
              ]}>
              Send Inquiry
            </Text>
          </TouchableOpacity>
        </View>
        {/* Reviews */}
        <View style={styles.reviewsContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.reviewsTitle]}>
            Reviews
          </Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Text
                  style={[
                    theme.fonts.paragraphSmallSemiBold,
                    styles.reviewUser,
                  ]}>
                  {review.user}
                </Text>
                {renderStars(review.rating)}
              </View>
              <View style={styles.reviewDetails}>
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.reviewComment,
                  ]}>
                  {review.comment}
                </Text>
                <Text
                  style={[
                    theme.fonts.paragraphSmallSemiBold,
                    styles.reviewRating,
                  ]}>
                  Rating: {review.rating}/5
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.chatNowButton}>
            <Text
              style={[
                theme.fonts.paragraphRegularSmall,
                styles.chatNowButtonText,
              ]}>
              Seller Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text
              style={[
                theme.fonts.paragraphRegularSmall,
                styles.inquiryButtonText,
              ]}>
              More Products
            </Text>
          </TouchableOpacity>
        </View>
         <AddToCartModal
          
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          product={product}
          onAddToCart={handleAddToCart}
        />
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
