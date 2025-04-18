import React, {useState, FC, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {InputField} from '~Components/TextInput';
import {useCartStore} from '~Configs/cartStore';
import {useStyles} from './CheckoutScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {IconDeleteIconWhite} from '~Components/Icons';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StackScreenProps} from '@react-navigation/stack';
type CheckoutScreenProps = StackScreenProps<AuthParamList>;
import {BASE_URL} from '~Constants/index';
import {useForm, Controller, set} from 'react-hook-form';
import {Button} from '~Components/Button';
import useAccountStore from '~Configs/accountStore';
import axios from 'axios';
import {Path} from '~Navigators/routes';
import {Modal} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {addShippingAddressSchema, createOrderSchema} from '~Utils/validation';
import {ShippingAddressFormType, DefaultValuesType} from './types';
import {ErrorMessage} from '~Components/Error';
import {string} from 'yup';
export const CheckoutScreen: FC<CheckoutScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ShippingAddressFormType>({
    resolver: yupResolver(addShippingAddressSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      isDefault: false,
    },
  });

  const {cart, updateQuantity, removeFromCart, clearCart} = useCartStore();
  const {buyer} = useAccountStore();

  const {
    control: orderControl,
    handleSubmit: handleOrderSubmit,
    reset: resetOrderForm,
    formState: {errors: orderErrors},
  } = useForm({
    resolver: yupResolver(createOrderSchema),
    defaultValues: {
      buyerId: buyer?.id || '',
      shippingAddressId: '',
      items: cart.map(item => ({
        productId: item.id.split('-')[0], // Extract the valid ObjectId part
        variations: item.selectedVariants
          ? [
              {
                trait: item.selectedVariants.trait,
                value: item.selectedVariants.value,
                price: parseFloat(item.selectedVariants.price),
                quantity: item.quantity,
              },
            ]
          : [],
      })),
      orderNote: '',
      advancePayment: 0,
      paymentMethod: 'cash_on_delivery',
    },
  });

  const theme = useTheme();
  const styles = useStyles();

  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [orderNote, setOrderNote] = useState<string>('');
  const [advanceAmount, setAdvanceAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'cash'>('cash');
  const [shippingAddresses, setShippingAddresses] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedShippingAddress, setSelectedShippingAddress] = useState<
    string | null
  >(null);

  const [newAddress, setNewAddress] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    isDefault: false,
  });

  const fetchShippingAddresses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/shippingaddress`, {
        headers: {Authorization: `Bearer ${buyer?.token}`},
      });
      setShippingAddresses(response.data.data);
    } catch (error) {
      console.error('Error fetching shipping addresses:', error);
    }
  };

  const addShippingAddress = async (data: ShippingAddressFormType) => {
    try {
      await axios.post(
        `${BASE_URL}/shippingaddress/add`,
        {
          fullName: data.fullName,
          phone: data.phone,
          address: data.address,
          city: data.city,
          postalCode: data.postalCode,
          isDefault: data.isDefault,
        },
        {headers: {Authorization: `Bearer ${buyer?.token}`}},
      );
      setIsModalVisible(false);
      reset();
      fetchShippingAddresses();
    } catch (error) {
      console.error('Error adding shipping address:', error);
    }
  };

  const deleteShippingAddress = async (addressId: string) => {
    try {
      await axios.delete(`${BASE_URL}/shippingaddress/${addressId}`, {
        headers: {Authorization: `Bearer ${buyer?.token}`},
      });
      fetchShippingAddresses();
    } catch (error) {
      console.error('Error deleting shipping address:', error);
    }
  };

  useEffect(() => {
    fetchShippingAddresses();
  }, []);

  const addShippingAddressModal = () => {
    return (
      <>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Text style={[theme.fonts.paragraphSemiBold, styles.modalHeader]}>
              Add Shipping Address
            </Text>

            <Controller
              control={control}
              name="fullName"
              render={({field: {onChange, value}}) => (
                <InputField
                  placeholder="Full Name"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({field: {onChange, value}}) => (
                <InputField
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="address"
              render={({field: {onChange, value}}) => (
                <InputField
                  placeholder="Address"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.address?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({field: {onChange, value}}) => (
                <InputField
                  placeholder="City"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.city?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="postalCode"
              render={({field: {onChange, value}}) => (
                <InputField
                  placeholder="Postal Code"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.postalCode?.message}
                />
              )}
            />

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={() =>
                  setNewAddress({
                    ...newAddress,
                    isDefault: !newAddress.isDefault,
                  })
                }>
                <Text style={[theme.fonts.paragraphRegularSmall]}>
                  {newAddress.isDefault ? '☑' : '☐'} Set as Default
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              variant="pear"
              title="Add Address"
              textStyle={theme.fonts.buttonSemiBold}
              onPress={handleSubmit(addShippingAddress)}
            />

            <Button
              variant="outline2"
              title="Cancel"
              textStyle={theme.fonts.buttonSemiBold}
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
      </>
    );
  };

  const banks = [
    {id: '1', name: 'HBL Bank'},
    {id: '2', name: 'UBL Bank'},
    {id: '3', name: 'Meezan Bank'},
  ];

  const calculateItemTotal = (item: any) => {
    let itemPrice = parseFloat(item.price);
    if (item.selectedVariants?.price) {
      const variantAdditionalPrice = parseFloat(item.selectedVariants.price);
      itemPrice += isNaN(variantAdditionalPrice) ? 0 : variantAdditionalPrice;
    }
    return itemPrice * item.quantity;
  };

  const calculateTotalBill = () => {
    return cart
      .reduce((total, item) => total + calculateItemTotal(item), 0)
      .toFixed(2);
  };

  const handleFinalizeOrder = async () => {
    if (!selectedShippingAddress) {
      Alert.alert('Error', 'Please select a shipping address.');
      return;
    }

    if (paymentMethod === 'bank' && !selectedBank) {
      Alert.alert('Error', 'Please select a bank for payment.');
      return;
    }

    if (!advanceAmount) {
      setAdvanceAmount(
        (parseFloat(calculateTotalBill()) * 0.1).toFixed(2),
      );
    }
    const formattedItems = cart.map(item => ({
      productId: item.id, // Extract the valid ObjectId part
      variations: item.selectedVariants
      ? [
        {
          variationId: item.selectedVariants.id,
          quantity: item.quantity,
          price: parseFloat(item.price),
        },
        ]
      : [],
    }));

    const orderDetails = {
      buyerId: buyer?.id,
      shippingAddressId: selectedShippingAddress,
      items: formattedItems,
      orderNote,
      advancePayment: parseFloat(advanceAmount) || 0,
      paymentMethod:
        paymentMethod === 'cash' ? 'cash' : 'bank_transfer',
    };
    console.log('Order Details:', orderDetails);
    orderDetails.items.forEach(item => {
      console.log('Variations for Product ID:', item.productId, item.variations);
    });
    try {
      const response = await axios.post(
        `${BASE_URL}/order/create`,
        orderDetails,
        {
          headers: {Authorization: `Bearer ${buyer?.token}`},
        },
      );

      Alert.alert('Success', 'Your order has been placed successfully!');
      clearCart();
      resetOrderForm();
      setSelectedShippingAddress(null);
      setOrderNote('');
      setAdvanceAmount('');
      Alert.alert('Success', 'Your order has been placed successfully!');
      navigation.popToTop();
    } catch (error) {
      console.error('Error placing order:', error.response.data.message);
      Alert.alert('Error', 'Failed to place order. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[theme.fonts.paragraphSemiBold]}>Order Items</Text>

      {cart.map(item => (
        <View
          key={`${item.id}-${item.selectedPriceRange?.range || 'default'}`}
          style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={[theme.fonts.paragraphSmallSemiBold]}>
              {item.name}
            </Text>
            <Text style={[theme.fonts.paragraphRegularSmall]}>
              PKR {calculateItemTotal(item)} (
              {item.selectedPriceRange?.range || 'Default'})
            </Text>
            <Text style={[theme.fonts.paragraphRegularSmall]}>
              x({item.quantity})
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.totalSection}>
        <Text style={theme.fonts.paragraphSmallSemiBold}>
          Total Amount: PKR {calculateTotalBill()}
        </Text>
      </View>
      <View style={styles.paymentSection}>
        <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
          Payment Details
        </Text>

        <View style={styles.paymentMethod}>
          <TouchableOpacity
            style={[
              styles.methodButton,
              paymentMethod === 'cash' && styles.methodButtonActive,
            ]}
            onPress={() => setPaymentMethod('cash')}>
            <Text>Cash Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.methodButton,
              paymentMethod === 'bank' && styles.methodButtonActive,
            ]}
            onPress={() => setPaymentMethod('bank')}>
            <Text>Bank Transfer</Text>
          </TouchableOpacity>
        </View>

        {paymentMethod === 'bank' && (
          <View style={styles.bankSelection}>
            {banks.map(bank => (
              <TouchableOpacity
                key={bank.id}
                style={[
                  styles.bankOption,
                  selectedBank === bank.id && styles.bankOptionSelected,
                ]}
                onPress={() => setSelectedBank(bank.id)}>
                <Text>{bank.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Text style={[theme.fonts.paragraphRegularSmall, styles.label]}>
          Advance Payment (10% of total)
        </Text>
        <Controller
          control={orderControl}
          name="advancePayment"
          render={({field: {onChange, value}}) => (
            <InputField
              disabled={true}
              placeholder="Enter advance amount"
              number={true}
              value={(parseFloat(calculateTotalBill()) * 0.1).toFixed(2)}
              onChangeText={setAdvanceAmount}
             
            />
          )}
        />
        <Text style={[theme.fonts.paragraphRegularSmall, styles.label]}>
          Order Note
        </Text>
        <Controller
          control={orderControl}
          name="orderNote"
          render={({field: {onChange, value}}) => (
            <InputField
              placeholder="Add order note (optional)"
              multiline
              value={orderNote}
              onChangeText={setOrderNote}
            />
          )}
        />

        <View style={styles.shippingSection}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.sectionTitle]}>
            Shipping Addresses
          </Text>
          {shippingAddresses.length > 0 ? (
            shippingAddresses.map(address => (
              <TouchableOpacity
                key={address.id}
                style={[
                  styles.addressContainer,
                  selectedShippingAddress === address._id &&
                    styles.selectedAddressContainer, // Highlight selection
                ]}
                onPress={() => setSelectedShippingAddress(address._id)}>
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.addressInfo,
                  ]}>
                  {address.fullName}
                </Text>
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.addressInfo,
                  ]}>
                  {address.address}, {address.city}, {address.postalCode}
                </Text>
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.addressInfo,
                  ]}>
                  {address.phone}
                </Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteShippingAddress(address.id)}>
                  <IconDeleteIconWhite size="xxxs" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyAddressContainer}>
              <Text
                style={[
                  theme.fonts.paragraphRegularSmall,
                  styles.emptyAddressText,
                ]}>
                No shipping addresses available. Please add one.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => setIsModalVisible(true)}>
            <Text
              style={[theme.fonts.paragraphRegularSmall, styles.confirmButtonText]}>
              Add Shipping Address
            </Text>
          </TouchableOpacity>
        </View>
        {isModalVisible && addShippingAddressModal()}
        {shippingAddresses.length > 0 && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleFinalizeOrder}>
            <Text
              style={[
                theme.fonts.paragraphSmallSemiBold,
                styles.addButtonText,
              ]}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
