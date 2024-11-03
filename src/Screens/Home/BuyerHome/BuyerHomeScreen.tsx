import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './BuyerHomeScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {IconRightArrowGray, VideoCarousel} from '~Components/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

// Sample video data
const videos = [
  {uri: require('../../../Assets/videos/video3.mp4'), title: 'Video 1'},
  {uri: require('../../../Assets/videos/video4.mp4'), title: 'Video 2'},
  {uri: require('../../../Assets/videos/video5.mp4'), title: 'Video 3'},
  {uri: require('../../../Assets/videos/video1.mp4'), title: 'Video 4'},
  {uri: require('../../../Assets/videos/video2.mp4'), title: 'Video 5'},
];

// Define Product type
type Product = {
  id: number;
  name: string;
  details: string;
  ratings: number;
  images: any[];
  speciality: string;
  unit: string;
  priceRanges: { range: string; price: string }[];
  reviews: { user: string; comment: string; rating: number }[];
  cn: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds 2024 Professional with 7.1 Surround Sound",
    details: "High-quality wireless earbuds featuring advanced noise cancellation technology.",
    ratings: 4.5,
    images: [
      require('../../../Assets/images/products/earbuds1.jpeg'),
      require('../../../Assets/images/products/earbuds2.jpeg'),
      require('../../../Assets/images/products/earbuds3.jpeg'),
      require('../../../Assets/images/products/earbuds4.jpeg'),
      require('../../../Assets/images/products/earbuds5.jpeg'),
    ],
    unit: "pcs",
    speciality: "New Arrivals",
    priceRanges: [
      { range: "1-5", price: "549.99" },
      { range: "6-10", price: "545.99" },
      { range: "11-20", price: "542.99" },
    ],
    reviews: [
      { user: "Alice", comment: "Great sound quality!", rating: 5 },
      { user: "Bob", comment: "Very comfortable to wear.", rating: 4 },
    ],
    cn: "1 yr",
  },
  {
    id: 2,
    name: "Smartwatch with Health Tracking and Notification Alerts",
    details: "A feature-rich smartwatch equipped with fitness tracking and timely notifications.",
    ratings: 4.0,
    images: [
      require('../../../Assets/images/products/watch1.jpeg'),
      require('../../../Assets/images/products/watch2.jpeg'),
      require('../../../Assets/images/products/watch3.jpeg'),
      require('../../../Assets/images/products/watch4.jpeg'),
      require('../../../Assets/images/products/watch5.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Deals",
    priceRanges: [
      { range: "10-15", price: "5199.99" },
      { range: "6-10", price: "5189.99" },
      { range: "11-20", price: "5179.99" },
    ],
    reviews: [
      { user: "Charlie", comment: "Love the fitness features!", rating: 4 },
      { user: "Dana", comment: "Battery life could be better.", rating: 3 },
    ],
    cn: "2 yr",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker with Enhanced Bass Quality",
    details: "A compact Bluetooth speaker designed for portability and exceptional sound quality.",
    ratings: 4.7,
    images: [
      require('../../../Assets/images/products/speaker1.jpeg'),
      require('../../../Assets/images/products/speaker2.jpeg'),
      require('../../../Assets/images/products/speaker3.jpeg'),
      require('../../../Assets/images/products/speaker4.jpeg'),
      require('../../../Assets/images/products/speaker5.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Ranking",
    priceRanges: [
      { range: "1-5", price: "589.99" },
      { range: "6-10", price: "584.99" },
      { range: "11-20", price: "579.99" },
    ],
    reviews: [
      { user: "Eve", comment: "Amazing bass for such a small speaker!", rating: 5 },
      { user: "Frank", comment: "Perfect for outdoor use.", rating: 4 },
    ],
    cn: "3 yr",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair with Adjustable Height and Lumbar Support",
    details: "An office chair designed for comfort with adjustable settings and lumbar support.",
    ratings: 4.2,
    images: [
      require('../../../Assets/images/products/chair1.jpeg'),
      require('../../../Assets/images/products/chair2.jpeg'),
      require('../../../Assets/images/products/chair3.jpeg'),
      require('../../../Assets/images/products/chair4.jpeg'),
      require('../../../Assets/images/products/chair5.jpeg'),
    ],
    unit: "pcs",
    speciality: "New Arrivals",
    priceRanges: [
      { range: "1-25", price: "5120.00" },
      { range: "6-10", price: "5115.00" },
      { range: "11-20", price: "5110.00" },
    ],
    reviews: [
      { user: "Gina", comment: "Very comfortable for long hours!", rating: 5 },
      { user: "Hank", comment: "Great support for my back.", rating: 4 },
    ],
    cn: "4 yr",
  },
  {
    id: 5,
    name: "High-Definition 4K Smart TV with HDR Technology",
    details: "Experience stunning visuals with our 4K Smart TV equipped with HDR technology.",
    ratings: 4.8,
    images: [
      require('../../../Assets/images/products/tv2.jpeg'),
      require('../../../Assets/images/products/tv5.jpeg'),
      require('../../../Assets/images/products/tv3.jpeg'),
      require('../../../Assets/images/products/tv4.jpeg'),
      require('../../../Assets/images/products/tv1.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Deals",
    priceRanges: [
      { range: "1-2", price: "12999.99" },
      { range: "3-5", price: "12899.99" },
      { range: "6-10", price: "12799.99" },
    ],
    reviews: [
      { user: "Ivy", comment: "Incredible picture quality!", rating: 5 },
      { user: "Jack", comment: "Smart features are very handy.", rating: 4 },
    ],
    cn: "2 yr",
  },
  {
    id: 6,
    name: "Gaming Laptop with 16GB RAM and High-Performance Graphics",
    details: "A powerful gaming laptop built for performance with high-end graphics.",
    ratings: 4.6,
    images: [
      require('../../../Assets/images/products/laptop6.jpeg'),
      require('../../../Assets/images/products/laptop2.jpeg'),
      require('../../../Assets/images/products/laptop3.jpeg'),
      require('../../../Assets/images/products/laptop4.jpeg'),
      require('../../../Assets/images/products/laptop5.jpeg'),
      require('../../../Assets/images/products/laptop1.jpeg'),
    ],
    unit: "pcs",
    speciality: "New Arrivals",
    priceRanges: [
      { range: "1-5", price: "89999.99" },
      { range: "6-10", price: "88999.99" },
      { range: "11-20", price: "87999.99" },
    ],
    reviews: [
      { user: "Kylie", comment: "Best gaming experience ever!", rating: 5 },
      { user: "Leo", comment: "Runs everything smoothly.", rating: 4 },
    ],
    cn: "1 yr",
  },
  {
    id: 7,
    name: "Bluetooth Headphones with Noise Cancellation and 20-Hour Battery Life",
    details: "Enjoy immersive sound with our Bluetooth headphones featuring noise cancellation.",
    ratings: 4.4,
    images: [
      require('../../../Assets/images/products/headphones1.jpeg'),
      require('../../../Assets/images/products/headphones2.jpeg'),
      require('../../../Assets/images/products/headphones3.jpeg'),
      require('../../../Assets/images/products/headphones4.jpeg'),
      require('../../../Assets/images/products/headphones5.jpeg'),
      require('../../../Assets/images/products/headphones6.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Ranking",
    priceRanges: [
      { range: "1-5", price: "1499.99" },
      { range: "6-10", price: "1459.99" },
      { range: "11-20", price: "1439.99" },
    ],
    reviews: [
      { user: "Mia", comment: "Amazing sound quality!", rating: 5 },
      { user: "Noah", comment: "Great battery life!", rating: 4 },
    ],
    cn: "2 yr",
  },
  {
    id: 8,
    name: "Home Security Camera System with Night Vision and Motion Detection",
    details: "Keep your home safe with our comprehensive security camera system.",
    ratings: 4.9,
    images: [
      require('../../../Assets/images/products/camera4.jpeg'),
      require('../../../Assets/images/products/camera2.jpeg'),
      require('../../../Assets/images/products/camera3.jpeg'),
      require('../../../Assets/images/products/camera5.jpeg'),
      require('../../../Assets/images/products/camera6.jpeg'),
      require('../../../Assets/images/products/camera1.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Deals",
    priceRanges: [
      { range: "1-2", price: "19999.99" },
      { range: "3-5", price: "19899.99" },
      { range: "6-10", price: "19799.99" },
    ],
    reviews: [
      { user: "Olivia", comment: "Great value for money!", rating: 5 },
      { user: "Paul", comment: "Easy to set up and use.", rating: 4 },
    ],
    cn: "3 yr",
  },
  {
    id: 9,
    name: "Electric Toothbrush with Sonic Cleaning Technology and Multiple Modes",
    details: "Achieve a brighter smile with our electric toothbrush featuring multiple cleaning modes.",
    ratings: 4.5,
    images: [
      require('../../../Assets/images/products/brush6.jpeg'),
      require('../../../Assets/images/products/brush5.jpeg'),
      require('../../../Assets/images/products/brush4.jpeg'),
      require('../../../Assets/images/products/brush3.jpeg'),
      require('../../../Assets/images/products/brush2.jpeg'),
      require('../../../Assets/images/products/brush1.jpeg'),
    ],
    unit: "pcs",
    speciality: "New Arrivals",
    priceRanges: [
      { range: "1-5", price: "499.99" },
      { range: "6-10", price: "489.99" },
      { range: "11-20", price: "479.99" },
    ],
    reviews: [
      { user: "Quinn", comment: "Teeth feel cleaner than ever!", rating: 5 },
      { user: "Ryan", comment: "Multiple modes are very helpful.", rating: 4 },
    ],
    cn: "2 yr",
  },
  {
    id: 10,
    name: "High-Performance Blender with Multiple Speed Settings and Recipe Book",
    details: "Blend smoothies and soups with our high-performance blender, comes with a recipe book.",
    ratings: 4.3,
    images: [
      require('../../../Assets/images/products/blender6.jpeg'),
      require('../../../Assets/images/products/blender2.jpeg'),
      require('../../../Assets/images/products/blender3.jpeg'),
      require('../../../Assets/images/products/blender4.jpeg'),
      require('../../../Assets/images/products/blender5.jpeg'),
      require('../../../Assets/images/products/blender1.jpeg'),
    ],
    unit: "pcs",
    speciality: "Top Ranking",
    priceRanges: [
      { range: "1-5", price: "8499.99" },
      { range: "6-10", price: "8399.99" },
      { range: "11-20", price: "8299.99" },
    ],
    reviews: [
      { user: "Sophia", comment: "Perfect for my morning smoothies!", rating: 5 },
      { user: "Tom", comment: "Powerful and easy to clean.", rating: 4 },
    ],
    cn: "3 yr",
  },
];


// Define types for navigation props
type BuyerHomeScreenProps = StackScreenProps<AuthParamList>;

export const BuyerHomeScreen: FC<BuyerHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

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
                PKR {item.priceRanges[0].price} - PKR {item.priceRanges[2].price}
              </Text>
              <Text numberOfLines={1} style={[theme.fonts.subtextSmall, styles.horizontalItemMinOrderText]}>
                Min. Order: {item.priceRanges[0].range} {item.unit}
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
          PKR {item.priceRanges[0].price} - PKR {item.priceRanges[2].price} {/* Display price range */}
        </Text>
        <Text numberOfLines={1} style={[theme.fonts.subtextSmall, styles.productOrder]}>
          Min Order: {item.priceRanges[0].range} {item.unit}
        </Text>
        <Text style={[theme.fonts.allCapsSubtext, styles.productDuration]}>
          CN: {item.cn}
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
          Welcome back, Talha Hanif 👋🎉
        </Text>
      </View>

      {/* Horizontal Scrollable Sections */}
      <HorizontalScrollable
        data={products.filter(product => product.speciality === "New Arrivals")} // Filter for new arrivals
        title="New Arrivals"
        subTitle="Stay Updated with the latest arrivals"
      />
      <HorizontalScrollable
        data={products.filter(product => product.speciality === "Top Deals")} // Filter for top deals
        title="Top Deals"
        subTitle="Score the lowest deal on WholeSalers.pk"
      />
      <HorizontalScrollable
        data={products.filter(product => product.speciality === "Top Ranking")} // Filter for top ranking
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
