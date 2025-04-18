import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './BuyerHomeScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {IconRightArrowGray, VideoCarousel} from '~Components/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { BASE_URL } from '~Constants/index';
import axios from 'axios';
import useAccountStore from '~Configs/accountStore';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
// Sample video data
const videos = [
  {uri: require('../../../Assets/videos/video3.mp4'), title: 'Video 1'},
  {uri: require('../../../Assets/videos/video4.mp4'), title: 'Video 2'},
  {uri: require('../../../Assets/videos/video5.mp4'), title: 'Video 3'},
  {uri: require('../../../Assets/videos/video1.mp4'), title: 'Video 4'},
  {uri: require('../../../Assets/videos/video2.mp4'), title: 'Video 5'},
];

type Product = {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  images: string;
  category: string;
  minOrder: number;
  shopName: string;
  stockQuantity: number;
  classifications: string[];
  default_price: number;
  is_active: boolean;
  status: string;
};

// Define types for navigation props
type BuyerHomeScreenProps = StackScreenProps<AuthParamList>;

export const BuyerHomeScreen: FC<BuyerHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [buyerProfile, setBuyerProfile] = useState<any | null>(null); // State for Buyer profile
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const { buyer } = useAccountStore(); // Retrieve Buyer data from Zustand store
  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { productId: product.id });
  };

  useEffect(() => {
    const fetchBuyerProfile = async () => {
      if (!buyer?.token) {
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/buyer/auth/profile`, {
          headers: {
            Authorization: `Bearer ${buyer?.token}`, // Use token from Zustand store
          },
        });

        setBuyerProfile(response.data.data.buyer);
        console.log('Buyer profile:', response.data.data.buyer);
      } catch (error) {
        console.error('Error fetching Buyer profile:', error);
        Alert.alert('Error', 'Failed to fetch Buyer profile. Please try again.');
      }
    };
    const fetchProducts = async () => {
      try {
      const response = await axios.get(`${BASE_URL}/buyer/products?Page=1`, {
        headers: {
        Authorization: `Bearer ${buyer?.token}`,
        },
      });

      const fetchedProducts = response.data.data.products.map((product: Product) => ({
        id: product.id,
        name: product.name,
        minPrice: product.minPrice,
        maxPrice: product.maxPrice,
        images: product.images && product.images.length > 0 ? product.images[0] : [require('../../../Assets/images/products/earbuds1.jpeg')], // Check if images array is defined and has elements
        category: product.category,
        minOrder: product.minOrder,
        shopName: product.shopName,
        stockQuantity: product.stockQuantity,
        classifications: product.classifications,
        default_price: product.default_price,
        is_active: product.is_active,
        status: product.status,
      }));

      setProducts(fetchedProducts);
      console.log('Fetched products:', fetchedProducts);
      } catch (error) {
      console.error('Error fetching products:', error);
      Alert.alert('Error', 'Failed to fetch products. Please try again.');
      }
    };

    fetchProducts();
    fetchBuyerProfile();
  }, [buyer?.token]);

  const HorizontalScrollable: FC<{
    data: Product[]; // Update type to Product[]
    title: string;
    subTitle: string;
  }> = ({data, title, subTitle}) => {
    const styles = useStyles();
    const theme = useTheme();
    return (
      <View style={styles.horizontalSection}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#f2d6c2', '#ffffff']}
            style={styles.gradientBackground}
          >
            <View>
              <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
                {title}
              </Text>
              <Text style={[theme.fonts.subtextSmall, styles.subSectionTitle]}>
                {subTitle}
              </Text>
            </View>
            <View style={styles.bgImageContainer}>
              <Image source={require('../../../Assets/images/mapleLeaf.png')} style={styles.bgImg} />
            </View>
            <IconRightArrowGray size="xs" />
          </LinearGradient>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {data.map(item => (
            <TouchableOpacity key={item.id} style={styles.horizontalItem} onPress={() => handleProductPress(item)}>
              <Image source={item.images[0]} style={styles.horizontalImage} />
              {/* Display price based on selected range */}
              <Text
                numberOfLines={2}
                style={[
                  theme.fonts.paragraphSmallSemiBold,
                  styles.horizontalItemText,
                ]}>
                PKR {item.minPrice} - PKR {item.maxPrice}
              </Text>
              <Text numberOfLines={1} style={[theme.fonts.subtextSmall, styles.horizontalItemMinOrderText]}>
                Min. Order: {item.minPrice} {item.minOrder}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderProductItem = ({item}: {item: Product}) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress(item)}>
      <Image source={item.images[0]} style={styles.productImage} />
      <View style={[styles.productDetails]}>
        <Text
          numberOfLines={1}
          style={[theme.fonts.paragraphRegularSmall, styles.productName]}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={[theme.fonts.paragraphSemiBold, styles.productPrice]}>
           PKR {item.minPrice} - PKR {item.maxPrice} {/* Display price range */}
        </Text>
        <Text numberOfLines={1} style={[theme.fonts.subtextSmall, styles.productOrder]}>
        Min. Order: {item.minPrice} {item.minOrder}
        </Text>
        <Text style={[theme.fonts.allCapsSubtext, styles.productDuration]}>
          CN: {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}>
      <View style={styles.videoContainerWrapper}>
        <View style={styles.videoContainer}></View>
        <VideoCarousel videos={videos} />
      </View>

      <View style={styles.profileContainer}>
        <Text style={[theme.fonts.paragraphRegular, styles.buyerText]}>
          Welcome back, {buyerProfile ? buyerProfile.fullName : 'Loading...'} 👋🎉
        </Text>
      </View>

      {/* Horizontal Scrollable Sections */}
      <HorizontalScrollable
        data={products.filter(product => product.classifications && product.classifications[0] === "newly_added")} // Filter for new arrivals
        title="New Arrivals"
        subTitle="Stay Updated with the latest arrivals"
      />
      <HorizontalScrollable
        data={products.filter(product => product.classifications && product.classifications[0] === "newly_added")} // Filter for top deals
        title="Top Deals"
        subTitle="Score the lowest deal on WholeSalers.pk"
      />
      <HorizontalScrollable
        data={products.filter(product => product.classifications && product.classifications[0] === "newly_added")} // Filter for top ranking
        title="Top Ranking"
        subTitle="Navigate Trends with data-driven rankings"
      />

      {/* FlatList for Random Products */}
      <LinearGradient
        colors={['#f2d6c2', '#ffffff']}
        style={styles.adContainer}
      >
        <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
          Personalise Your Feed
        </Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[theme.fonts.paragraphRegularSmall, styles.buttonText]}>
            Open Filters
          </Text>
        </TouchableOpacity>
        <View style={styles.bgImageContainer2}>
          <Image source={require('../../../Assets/images/mapleLeaf.png')} style={styles.bgImg2} />
        </View>
      </LinearGradient>
      <FlatList
        data={products} // Random products can also be filtered here
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        numColumns={2} // Display 2 items per line
      />
    </ScrollView>
  );
};
