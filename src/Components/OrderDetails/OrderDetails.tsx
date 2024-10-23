import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles } from './OrderDetails.styles';
import {useTheme} from '~Contexts/ThemeContext';
import { IconRightArrow, IconRightArrowGray } from '~Components/Icons';
type OrderDetailsProps = {
  ordersCount: {
    toProcess: number;
    shipping: number;
    reviews: number;
  };
  onOptionPress: (option: string) => void;
};

export const OrderDetails: FC<OrderDetailsProps> = ({ ordersCount, onOptionPress }) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[theme.fonts.subHeadingSemibold,styles.heading]}>Order Details</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => onOptionPress('To Process')}>
          <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionTextNum]}>{ordersCount.toProcess}</Text>
          <View style= {styles.orderDetailsTouchable}>
            <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionText]}>To Process</Text>
            <IconRightArrowGray size='xxs' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => onOptionPress('Shipping')}>
          <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionTextNum]}>{ordersCount.shipping}</Text>
          <View style= {styles.orderDetailsTouchable}>
            <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionText]}>Shipping</Text>
            <IconRightArrowGray size='xxs' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => onOptionPress('Reviews')}>
          <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionTextNum]}>{ordersCount.reviews}</Text>
          <View style= {styles.orderDetailsTouchable}>
            <Text style={[theme.fonts.paragraphSmallSemiBold,styles.optionText]}>Reviews</Text>
            <IconRightArrowGray size='xxs' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
