import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './TrackSalesScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {TrackSalesCard, Button, IconTrackSales, GraphComponent} from '~Components/index';
import {ScrollView} from 'react-native-gesture-handler';
import {Path} from '~Navigators/routes';

type TrackSalesScreenProps = StackScreenProps<AuthParamList>;

export const TrackSalesScreen: FC<TrackSalesScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  
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
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Button
        title="View Total Sales"
        onPress={() => navigation.navigate(Path.TRACK_TOTAL_SALES_SCREEN)}
        style={styles.button}
      />
      <View style = {styles.graphSection}>
            <View style = {styles.graphSectionHeader}>
              <View>
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.graphSectionHeading]}>
                  Revenue This Week
                </Text>
                <Text style={[theme.fonts.paragraphSemiBold, styles.graphSectionSubText]}>
                  Rs. {totalRevenue}
                </Text>
              </View>
              <View>
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.graphSectionHeading]}>
                  Total Orders Placed
                </Text>
                <Text style={[theme.fonts.paragraphSemiBold, styles.graphSectionSubText]}>
                  {totalOrders}
                </Text>
              </View>
              
            </View>
            <GraphComponent data={graphData} />
        </View>
    </ScrollView>
  );
};
