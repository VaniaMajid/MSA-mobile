import React, { FC, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useStyles } from './ProductDetailScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import {
  IconStar,
  IconStarHalf,
  IconStarEmpty,
  IconWishlistActiveFilled,
  IconWishlistInactive,
  IconCartWhite,
} from '~Components/Icons';
import { AuthParamList } from '~Navigators/AuthParamList';
import { StackScreenProps } from '@react-navigation/stack';

// Define the ProductDetailScreenProps using StackScreenProps
type ProductDetailScreenProps = StackScreenProps<AuthParamList, 'ProductDetails'>;

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params; // Extract product from route.params
  const styles = useStyles();
  const theme = useTheme();

  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { width } = Dimensions.get('window');

  const toggleWishlist = () => setWishlist(!wishlist);

  // Function to render each image item
  const renderImageItem = ({ item }: { item: any }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={[styles.carouselImage, { resizeMode: 'contain' }]} />
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Image Carousel */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={toggleWishlist} style={styles.wishlistContainer}>
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
            <TouchableOpacity style={styles.addToCartButton}>
              <IconCartWhite size="xxs" />
            </TouchableOpacity>
          </View>
          <Text style={[theme.fonts.paragraphRegularSmall, styles.productDetails]}>
            {product.details}
          </Text>
        </View>

        {/* Price Ranges */}
        <View style={styles.priceRangeContainer}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.priceRangeTitle]}>
            Price Ranges:
          </Text>
          {product.priceRanges.map((range, index) => (
            <View key={index} style={styles.priceRangeItem}>
              <Text style={theme.fonts.paragraphRegular}>{range.range}</Text>
              <Text style={[theme.fonts.paragraphSemiBold, { color: theme.colors.black }]}>
                PKR {range.price}
              </Text>
            </View>
          ))}
        </View>

        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {renderStars(product.ratings)}
          <Text style={[theme.fonts.subtextSmall, styles.ratingsText]}>
            {product.ratings} Ratings
          </Text>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.chatNowButton}>
            <Text style={[theme.fonts.paragraphRegularSmall,styles.chatNowButtonText]}>Chat Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text style={[theme.fonts.paragraphRegularSmall,styles.inquiryButtonText]}>Send Inquiry</Text>
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
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.reviewUser]}>
                  {review.user}
                </Text>
                {/* Render stars for each review */}
                {renderStars(review.rating)}
              </View>
              <View style={styles.reviewDetails}>
                <Text style={[theme.fonts.paragraphRegularSmall, styles.reviewComment]}>
                  {review.comment}
                </Text>
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.reviewRating]}>
                  Rating: {review.rating}/5
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.chatNowButton}>
            <Text style={[theme.fonts.paragraphRegularSmall, styles.chatNowButtonText]}>
              Seller Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inquiryButton}>
            <Text style={[theme.fonts.paragraphRegularSmall, styles.inquiryButtonText]}>
              More Products
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
