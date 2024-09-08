

import * as React from "react";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text,ScrollView, Image, ImageBackground, View, TouchableHighlight, Platform} from 'react-native'

import { Dimensions, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Button } from "~Components/Button/Button";
import { CounterSlider } from "~Components/Counter";
import { useTheme } from "~Contexts/ThemeContext";

const PAGE_WIDTH = Dimensions.get("window").width;

export const SplashScreen = () => {
  const theme = useTheme()
  const [counter,setCounter] = React.useState(0)
  const scrollOffsetValue = useSharedValue<number>(0);
  const [data, setData] = React.useState([require('../../Assets/images/onboarding1.png'),require('../../Assets/images/onboarding2.png'),require('../../Assets/images/onboarding3.png'),require('../../Assets/images/onboarding4.png')]);
  const isPagingEnabled = React.useRef(true);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions =  ({
      vertical: false,
      width:  Dimensions.get('screen').width,
      height:Platform.OS==='android'? Dimensions.get('screen').height-100 :Dimensions.get('screen').height,
      pagingEnabled: true,
    } as const);

  return (
<>
      <Carousel
        {...baseOptions}
        loop
        enabled // Default is true, just for demo
        ref={ref}
        
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={"xxx"}
        style={{ width: "100%"}}
        autoPlay={true}
        autoPlayInterval={2000}
        data={data}
        onScrollStart={()=>{ }}
        onScrollEnd={()=>{
          if(counter> data.length-1)
          {
            setCounter(0)
            return;
          }
          setCounter(counter+1)
        }}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => console.log("current index:", index)}
        renderItem={({item})=> {
          return (
            <>
          <ImageBackground source={item} style={{width:"100%",height:"100%"}} resizeMode='cover'/>
            </>
          )
        }}
       
      />
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:theme.spacing.H7,marginBottom:theme.spacing.V2}}>
      <TouchableHighlight style={{marginTop:-theme.spacing.H1}}>
      <Text style={{color:theme.colors.primaryColor}}>Back</Text>
      </TouchableHighlight>
      <CounterSlider current={counter} total={data.length} color='primaryColor'/>
      <Button title="Next" onPress={()=>{}} style={{marginTop:-theme.spacing.V2}}/>
    </View>
</>
  );
}



