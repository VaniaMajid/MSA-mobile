import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from './ToolsScreen.styles';
import {Button} from '~Components/Button';
import {
  IconAdd,
  IconAddProducts,
  IconIncome,
  IconMyProducts,
  IconOrders,
  IconReturnOrders,
  IconReviews,
} from '~Components/Icons';
import {useTheme} from '~Contexts/ThemeContext';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {Path} from '~Navigators/routes';

type ToolsScreenProps = StackScreenProps<AuthParamList>;

export const ToolsScreen: FC<ToolsScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.toolsContainer}>
        <View style={styles.toolRows1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Path.ADD_PRODUCTS_SCREEN);
            }}
            style={styles.toolItem}>
            <IconAddProducts size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>
              Add Products
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Path.PRODUCTS_SCREEN);
            }}
            style={[styles.toolItem, styles.tool2]}>
            <IconMyProducts size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Path.ORDERS_SCREEN);
            }}
            style={styles.toolItem}>
            <IconOrders size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toolRows2}>
          <TouchableOpacity style={styles.toolItem}>
            <IconReturnOrders size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>
              Return Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolItem}>
            <IconReviews size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Path.TRACK_SALES_SCREEN);
            }}
            style={styles.toolItem}>
            <IconIncome size="xs" />
            <Text style={[theme.fonts.paragraphRegularSmall]}>My Income</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate(Path.ADD_PRODUCTS_SCREEN);
        }}
        variant="filled"
        icon={<IconAdd color={theme.colors.white} size="xxs" />}
        style={styles.addButton}
      />
    </View>
  );
};
