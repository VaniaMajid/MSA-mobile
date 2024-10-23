import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './AuthParamList';
import {FC} from 'react';
import {PatientDrawerNavigator} from './PatientNavigator';
import {SpecialistDrawerNavigator} from './SpecialistNavigator';
import {Path} from './routes';
import {NotificationScreen} from '~Screens/Notification';
import {Header} from '~Components/Header';
import {useTheme} from '~Contexts/ThemeContext';
import { AppinionRequestPreviewScreen, AppinionRequestScreen } from '~Screens/AppinionRequest';
import { AddProductsScreen } from '~Screens/AddProducts';
import { TrackSalesScreen } from '~Screens/TrackSales';
import { TrackTotalSalesScreen } from '~Screens/TrackTotalSales';
import { ProductsScreen } from '~Screens/Products';
import { OrdersScreen } from '~Screens/Orders';
const AuthStackNavigation = createStackNavigator<AuthParamList>();

interface AuthNavProps {
  userRole: string;
}
export const AuthNavigator: FC<AuthNavProps> = ({userRole}) => {
  const theme = useTheme();
  return (
    <AuthStackNavigation.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...theme.fonts.uiLabelSemiBold,
          color: theme.colors.darkBlue
        },
        headerStyle: {
          shadowColor: theme.colors.darkGray,
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 3.84, 
          elevation: 5, 
        },
      }}>
      {userRole === 'seller' ? (
        <AuthStackNavigation.Screen
          name="PatientDrawer"
          component={PatientDrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AuthStackNavigation.Screen
          name="SpecialistDrawer"
          component={SpecialistDrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
      <AuthStackNavigation.Screen
        name={Path.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.APPINION_REQUEST_SCREEN}
        component={AppinionRequestScreen}
        options={{
          title: 'Query',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.APPINION_REQUEST_PREVIEW_SCREEN}
        component={AppinionRequestPreviewScreen}
        options={{
          title: 'Query',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.ADD_PRODUCTS_SCREEN}
        component={AddProductsScreen}
        options={{
          title: 'Add Product',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          title: 'My Products',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.ORDERS_SCREEN}
        component={OrdersScreen}
        options={{
          title: 'My Orders',
          headerLeft: ({}) => <Header />,
        }}
      />
      
      <AuthStackNavigation.Screen
        name={Path.TRACK_SALES_SCREEN}
        component={TrackSalesScreen}
        options={{
          title: 'Track Sales',
          headerLeft: ({}) => <Header />,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.TRACK_TOTAL_SALES_SCREEN}
        component={TrackTotalSalesScreen}
        options={{
          title: 'Track Total Sales',
          headerLeft: ({}) => <Header />,
        }}
      />
    </AuthStackNavigation.Navigator>
  );
};
