import React, { FC, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import { useStyles } from './ProductDetailScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';
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
import { AuthParamList } from '~Navigators/AuthParamList';
import { StackScreenProps } from '@react-navigation/stack';
import { useCartStore } from '~Configs/cartStore';
import { BASE_URL } from '~Constants/index';
import axios from 'axios';
import { ApiResponse } from './types';

type ProductDetailScreenProps = StackScreenProps<
  AuthParamList,
  'ProductDetails'
>;

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { productId } = route.params;
  const styles = useStyles();
  const theme = useTheme();
  const { addToCart } = useCartStore();

  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { width } = Dimensions.get('window');
  const [animationValue] = useState(new Animated.Value(0));
  const [isModalVisible, setModalVisible] = useState(true); // Start with false
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Debug modal state changes
  useEffect(() => {
    console.log('isModalVisible changed:', isModalVisible);
  }, [isModalVisible]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/buyer/products/${productId}`);
        const data: ApiResponse = response.data.data;

        const formattedProduct = {
          id: data._id,
          name: data.product_name,
          details: data.description,
          ratings: 0,
          price: data.default_price,
          unit: 'units',
          priceRanges: data.price_ranges.map(range => ({
            range: `${range.start_quantity}-${range.end_quantity}`,
            price: range.price,
          })),
          variants: data.variants.map(variant => ({
            ...variant.variations,
            id: variant._id,
            price: variant.price,
            quantity: variant.quantity,
          })),
          images: data.images?.map(img => ({ uri: img.data })) || [
            require('../../Assets/images/products/earbuds1.jpeg'),
            require('../../Assets/images/products/earbuds2.jpeg'),
            require('../../Assets/images/products/earbuds3.jpeg'),
            require('../../Assets/images/products/earbuds4.jpeg'),
            require('../../Assets/images/products/earbuds5.jpeg'),
          ],
          reviews: [],
          shopName: data.shop.shopName,
          packageDetails: data.package_details,
          stockQuantity: data.stock_quantity,
          category: data.category,
          containsDangerousGoods: data.contains_dangerous_goods,
          status: data.status,
        };
        setProduct(formattedProduct);
        console.log('Product:', JSON.stringify(formattedProduct, null, 2));
      } catch (err) {
        setError('Failed to fetch product details');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const toggleWishlist = () => setWishlist(!wishlist);

  const renderImageItem = ({ item }: { item: any }) => (
    <View style={styles.imageContainer}>
      <Image
        source={item}
        style={[styles.carouselImage, { resizeMode: 'contain' }]}
      />
    </View>
  );

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStars);

    return (
      <View style={styles.starContainer}>
        {[...Array(fullStars)].map((_, index) => (
          <IconStar key={`full-${index}`} size="xxs" />
        ))}
        {halfStars === 1 && <IconStarHalf size="xxs" />}
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
    if (!product) {
      console.warn('Product not loaded yet');
      return;
    }
    console.log('Opening modal, setting isModalVisible to true');
    setModalVisible(prev => {
      console.log('Previous isModalVisible:', prev);
      return true;
    });
  };

  const handleModalAddToCart = (cartItem: any) => {
    console.log('Adding to cart:', cartItem);
    addToCart(cartItem);
    showCartAnimation();
    setModalVisible(false);
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.loadingText]}>
          Loading Product Details...
        </Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.loadingText]}>
          {error || 'Product not found'}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.addToCartAnimation, animationStyle]}>
        <Text
          style={[theme.fonts.paragraphRegularSmall, styles.cartAnimationText]}
        >
          Product Added to Cart!
        </Text>
      </Animated.View>

      <ScrollView>
        {/* Image Carousel */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity
            onPress={toggleWishlist}
            style={styles.wishlistContainer}
          >
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
              onPress={handleAddToCart}
            >
              <IconCartWhite size="xxs" />
            </TouchableOpacity>
          </View>
          <Text
            style={[theme.fonts.paragraphRegularSmall, styles.productDetails]}
          >
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
          {product.priceRanges.length > 0 ? (
            product.priceRanges.map((range: any, index: number) => (
              <View key={index} style={styles.priceRangeItem}>
                <Text style={theme.fonts.paragraphRegular}>
                  {range.range} {product.unit}
                </Text>
                <Text
                  style={[theme.fonts.paragraphSemiBold, { color: theme.colors.black }]}
                >
                  PKR {range.price}
                </Text>
              </View>
            ))
          ) : (
            <Text style={theme.fonts.paragraphRegular}>No price ranges available</Text>
          )}
        </View>

        {/* Variants */}
        <View style={styles.variantsContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.variantsTitle]}>
            Variants:
          </Text>
          {product.variants.length > 0 ? (
            product.variants.map((variant: any, index: number) => (
              <View key={index} style={styles.variantItem}>
                {Object.entries(variant)
                  .filter(([key]) => key !== 'price' && key !== 'quantity' && key !== 'id')
                  .map(([key, value]) => (
                    <Text key={key} style={theme.fonts.paragraphRegular}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {String(value)}
                    </Text>
                  ))}
                <Text style={theme.fonts.paragraphRegular}>
                  Price: PKR {variant.price}
                </Text>
                <Text style={theme.fonts.paragraphRegular}>
                  Available: {variant.quantity}
                </Text>
              </View>
            ))
          ) : (
            <Text style={theme.fonts.paragraphRegular}>No variants available</Text>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.chatNowButton}
            onPress={handleAddToCart}
          >
            <Text
              style={[theme.fonts.paragraphRegularSmall, styles.chatNowButtonText]}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text
              style={[theme.fonts.paragraphRegularSmall, styles.inquiryButtonText]}
            >
              Send Inquiry
            </Text>
          </TouchableOpacity>
        </View>

        {/* Reviews */}
        <View style={styles.reviewsContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.reviewsTitle]}>
            Reviews
          </Text>
          {product.reviews.length > 0 ? (
            product.reviews.map((review: any, index: number) => (
              <View key={index} style={styles.reviewItem}>
                <View style={styles.reviewHeader}>
                  <Text
                    style={[theme.fonts.paragraphSmallSemiBold, styles.reviewUser]}
                  >
                    {review.user}
                  </Text>
                  {renderStars(review.rating)}
                </View>
                <View style={styles.reviewDetails}>
                  <Text
                    style={[theme.fonts.paragraphRegularSmall, styles.reviewComment]}
                  >
                    {review.comment}
                  </Text>
                  <Text
                    style={[theme.fonts.paragraphSmallSemiBold, styles.reviewRating]}
                  >
                    Rating: {review.rating}/5
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={theme.fonts.paragraphRegular}>No reviews available</Text>
          )}
        </View>

        {/* Seller Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.chatNowButton}>
            <Text
              style={[theme.fonts.paragraphRegularSmall, styles.chatNowButtonText]}
            >
              Seller Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text
              style={[theme.fonts.paragraphRegularSmall, styles.inquiryButtonText]}
            >
              More Products
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AddToCartModal
        isVisible={isModalVisible}
        onClose={() => {
          console.log('Closing modal');
          setModalVisible(false);
        }}
        product={product}
        onAddToCart={handleModalAddToCart}
      />
    )
      
    </SafeAreaView>
  );
};

export default ProductDetailScreen;