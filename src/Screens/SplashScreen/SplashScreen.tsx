import * as React from 'react';
import {
  ImageBackground,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

import {Dimensions} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {Button} from '~Components/Button/Button';
import {CounterSlider} from '~Components/Counter';
import {useTheme} from '~Contexts/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import SplashHeading from './components/SplashHeading/SplashHeading';
import {PressableText} from '~Components/PressableText';
import { Path } from '~Navigators/routes';

const PAGE_WIDTH = Dimensions.get('window').width;

type SplashScreenProps = StackScreenProps<PreAuthParamList>;

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [counter, setCounter] = React.useState(0);
  const scrollOffsetValue = useSharedValue<number>(0);
  const [data, setData] = React.useState([
    {
      image: require('../../Assets/images/onboarding1.png'),
      heading: 'Welcome to WholeSalers Seller Center!',
      subHeading: 'Empowering Wholesalers to Thrive in a Digital Marketplace.',
    },
    {
      image: require('../../Assets/images/onboarding2.png'),
      superHeading: 'Unlock Your Potential!',
      heading: 'Connect with retailers and grow your business effortlessly.',
    },
    {
      image: require('../../Assets/images/onboarding3.png'),
      superHeading: 'Streamline Your Sales Process',
      heading: 'Manage orders, inventory, and customer relationships—all in one place.',
    },
    {
      image: require('../../Assets/images/onboarding4.png'),
      superHeading: 'INTERACT WITH OUR',
      heading: 'Simple. Efficient. Profitable.',
      subHeading: 'Harness the power of technology to enhance your wholesale business.',
    },
  ]);
  const isPagingEnabled = React.useRef(true);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = {
    vertical: false,
    width: Dimensions.get('screen').width,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('screen').height - 100
        : Dimensions.get('screen').height,
    pagingEnabled: true,
  } as const;

  const handleBackPress = () => {
    if (counter > 1) {
      ref.current?.prev();
      setCounter(counter - 1);
    }
  };

  const handleNextPress = () => {
    if (counter < data.length) {
      ref.current?.next();
      setCounter(counter + 1);
    } else {
      navigation.navigate(Path.LOGIN_SCREEN);
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../../Assets/images/onboardingBackground.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <Carousel
          {...baseOptions}
          loop
          enabled // Default is true, just for demo
          ref={ref}
          defaultScrollOffsetValue={scrollOffsetValue}
          testID={'xxx'}
          style={{width: '100%'}}
          autoPlay={true}
          autoPlayInterval={2000}
          data={data}
          onScrollStart={() => {}}
          pagingEnabled={isPagingEnabled}
          onSnapToItem={index => {
            setCounter(index + 1);
          }}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1, marginTop: 45, }}>
                <SplashHeading
                  superHeading={item.superHeading}
                  heading={item.heading}
                  subHeading={item.subHeading}
                />

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: theme.spacing.H7,
            padding: theme.spacing.H7,
            backgroundColor: theme.colors.white,
          }}>
          <PressableText
            text="Back"
            style={[
              theme.fonts.buttonSemiBold, 
              {
                color: theme.colors.primaryColor,
              }
            ]}
            onPress={handleBackPress}
            disabled={counter === 1}
          />
          <CounterSlider
            current={counter}
            total={data.length}
            color="primaryColor"
          />
          <Button
            title="Next"
            onPress={handleNextPress}
            textStyle={theme.fonts.buttonSemiBold}
            style={{borderRadius: 30}}
          />
        </View>
      </ImageBackground>
    </>
  );
};
