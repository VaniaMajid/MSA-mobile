import React, {FC, useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './TrackTotalSalesScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';

import {
  TrackSalesCard,
  IconTrackSales,
  IconTrackSalesGreen,
  IconTrackSalesDark,
  IconTrackSalesLight,
} from '~Components/index';

type TrackTotalSalesScreenProps = StackScreenProps<AuthParamList>;

export const TrackTotalSalesScreen: FC<TrackTotalSalesScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const y = useRef();

  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const graphData = [
    {day: 'Mon', orders: 10, revenue: 1030},
    {day: 'Tue', orders: 25, revenue: 1530},
    {day: 'Wed', orders: 8, revenue: 800},
    {day: 'Thu', orders: 26, revenue: 2040},
    {day: 'Fri', orders: 12, revenue: 1250},
    {day: 'Sat', orders: 8, revenue: 18110},
    {day: 'Sun', orders: 45, revenue: 2530},
  ];

  useEffect(() => {
    // Calculate total revenue and orders based on graph data
    const calculatedRevenue = graphData.reduce((acc, data) => acc + data.revenue, 0);
    const calculatedOrders = graphData.reduce((acc, data) => acc + data.orders, 0);

    setTotalRevenue(calculatedRevenue);
    setTotalOrders(calculatedOrders);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request or data refresh
    setTimeout(() => {
      setRefreshing(false);
      // Update the data here if needed
      console.log('Data refreshed!');
    }, 2000); // Adjust the timeout to simulate the refresh duration
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[theme.colors.primaryColor]} // Spinner color for Android
          tintColor={theme.colors.primaryColor} // Spinner color for iOS
        />
        
      }>
      <Text style = {[theme.fonts.largeSubHeaderSemiBold, styles.salesText]}>Total Sales</Text>
      <View style={styles.trackCardContainer}>
        <TrackSalesCard
          mainHeading="PKR 50,000"
          subHeading="Total Revenue"
          icon={<IconTrackSales size="xxs" />}
          backgroundColor={theme.colors.primaryOrange} // Light green background
          mainHeadingColor={theme.colors.white} // white main heading
          subHeadingColor={theme.colors.white} // white sub heading
        />
        <TrackSalesCard
          mainHeading="150"
          subHeading="Total Orders"
          icon={<IconTrackSalesGreen size="xxs" />}
          backgroundColor={theme.colors.pastelGray} // Light orange background
          mainHeadingColor={theme.colors.primaryGreen} // white main heading
          subHeadingColor={theme.colors.darkGray} // white sub heading
        />
      </View>
      <View style={styles.trackCardContainer}>
        <TrackSalesCard
          mainHeading="PKR 50,000"
          subHeading="Today's Revenue"
          icon={<IconTrackSales size="xxs" />}
          backgroundColor={theme.colors.primaryYellow} // Light green background
          mainHeadingColor={theme.colors.white} // white main heading
          subHeadingColor={theme.colors.primaryGreen} // white sub heading
        />
        <TrackSalesCard
          mainHeading="150"
          subHeading="Total Orders"
          icon={<IconTrackSales size="xxs" />}
          backgroundColor={theme.colors.primaryGreen} // Light orange background
          mainHeadingColor={theme.colors.white} // white main heading
          subHeadingColor={theme.colors.white} // white sub heading
        />
      </View>
      <Text style = {[theme.fonts.largeSubHeaderSemiBold, styles.salesText]}>Recent Records</Text>
      <View style={styles.trackCardContainer}>
        <TrackSalesCard
          mainHeading="PKR 50,000"
          subHeading="Today's Revenue"
          icon={<IconTrackSalesDark size="xxs" />}
          backgroundColor={theme.colors.pastelGray} // Light green background
          mainHeadingColor={theme.colors.pastelDarkGray} // white main heading
          subHeadingColor={theme.colors.pastelDarkGray} // white sub heading
        />
        <TrackSalesCard
          mainHeading="23"
          subHeading="Total Orders"
          icon={<IconTrackSalesLight size="xxs" />}
          backgroundColor={theme.colors.pastelGray} // Light orange background
          mainHeadingColor={theme.colors.pastel} // white main heading
          subHeadingColor={theme.colors.pastel} // white sub heading
        />
      </View>
      <View style={styles.trackCardContainer}>
        <TrackSalesCard
          mainHeading="PKR 50,000"
          subHeading="Today's Revenue"
          icon={<IconTrackSales size="xxs" />}
          backgroundColor={theme.colors.pastelDarkGray} // Light green background
          mainHeadingColor={theme.colors.white} // white main heading
          subHeadingColor={theme.colors.white} // white sub heading
        />
        <TrackSalesCard
          mainHeading="150"
          subHeading="Total Orders"
          icon={<IconTrackSales size="xxs" />}
          backgroundColor={theme.colors.primaryColor} // Light orange background
          mainHeadingColor={theme.colors.white} // white main heading
          subHeadingColor={theme.colors.white} // white sub heading
        />
      </View>
    </ScrollView>
  );
};
