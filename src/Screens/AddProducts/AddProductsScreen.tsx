import {
  View,
  Text,
  ScrollView,
  Alert,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useStyles} from './AddProductsScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AddProductsFormType} from './types';
import {AddProductsSchema} from '~Utils/validation';
import {InputField} from '~Components/TextInput';
import {DropdownPicker} from '~Components/Dropdown';
import {Button} from '~Components/Button';
import {Path} from '~Navigators/routes';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconCross, IconGallery} from '~Components/Icons';
import {GalleryComponent} from './components';
type AddProductsScreenProps = StackScreenProps<AuthParamList>;

export const AddProductsScreen: FC<AddProductsScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
    trigger,
  } = useForm<AddProductsFormType>({
    resolver: yupResolver(AddProductsSchema), // Ensure this uses your schema
    defaultValues: {
      images: [],
      nameEn: '',
      nameUr: '',
      category: '',
      range1: '',
      price1: 0,
      range2: '',
      price2: 0,
      range3: '',
      price3: 0,
      packageWeight: 0,
      packageLength: 0,
      packageWidth: 0,
      packageHeight: 0,
      isFragile: false,
    },
  });

  const onSubmit = (data: AddProductsFormType) => {
    console.log(data);
    navigation.navigate(Path.TOOLS_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          theme.fonts.paragraphRegularSmall,
          {color: theme.colors.accentColor},
        ]}>
        Please fill in the product details below.
      </Text>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <GalleryComponent
          control={control}
          errors={errors}
          name="images" // Make sure to provide the correct name that corresponds to your form's structure
        />
        <View style={styles.fieldContainer}>
          <Controller
            name="nameEn"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Product Name (English)"
                placeholder="Enter Product Name"
                value={value}
                onChangeText={val => {
                  onChange(val);
                  trigger('nameEn');
                }}
                errorMessage={errors.nameEn?.message}
              />
            )}
          />
          <Controller
            name="nameUr"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Product Name (اردو)"
                placeholder="پروڈکٹ کا نام درج کریں"
                value={value}
                onChangeText={val => {
                  onChange(val);
                  trigger('nameUr');
                }}
                errorMessage={errors.nameUr?.message}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({field: {onChange, value}}) => (
              <DropdownPicker
                title="Product Category"
                placeholder="Select Product Category"
                items={[
                  {label: 'Electronics', value: 'Electronics'},
                  {label: 'Fashion', value: 'Fashion'},
                  {label: 'Home', value: 'Home'},
                  {label: 'Health', value: 'Health'},
                ]}
                value={value}
                onValueChange={val => {
                  onChange(val);
                  trigger('category');
                }}
                errorMessage={errors.category?.message}
              />
            )}
          />
          <View style={styles.compactFieldContainer}>
            <Controller
              name="range1"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Base Range"
                  placeholder="e.g., 0-5"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('range1');
                  }}
                  errorMessage={errors.range1?.message}
                />
              )}
            />
            <Controller
              name="price1"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Price"
                  placeholder="Enter price"
                  value={value.toString()} // Convert to string for input
                  keyboardType="numeric"
                  onChangeText={val => {
                    onChange(Number(val));
                    trigger('price1');
                  }}
                  errorMessage={errors.price1?.message}
                />
              )}
            />
          </View>
          <View style={styles.compactFieldContainer}>
            <Controller
              name="range2"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Secondary Range"
                  placeholder="e.g., 50-100"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('range2');
                  }}
                  errorMessage={errors.range2?.message}
                />
              )}
            />
            <Controller
              name="price2"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Price"
                  placeholder="Enter price"
                  value={value?.toString()} // Convert to string for input
                  keyboardType="numeric"
                  onChangeText={val => {
                    onChange(Number(val));
                    trigger('price2');
                  }}
                  errorMessage={errors.price2?.message}
                />
              )}
            />
          </View>
          <View style={styles.compactFieldContainer}>
            <Controller
              name="range3"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Tertiary Range"
                  placeholder="e.g., 100-500"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('range3');
                  }}
                  errorMessage={errors.range3?.message}
                />
              )}
            />
            <Controller
              name="price3"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  variant="forms50"
                  title="Price"
                  placeholder="Enter price"
                  value={value?.toString()} // Convert to string for input
                  keyboardType="numeric"
                  onChangeText={val => {
                    onChange(Number(val));
                    trigger('price3');
                  }}
                  errorMessage={errors.price3?.message}
                />
              )}
            />
          </View>
          <Controller
            name="packageWeight"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Package Weight"
                placeholder="Enter package weight"
                value={value.toString()}
                keyboardType="numeric"
                onChangeText={val => {
                  onChange(Number(val));
                  trigger('packageWeight');
                }}
                errorMessage={errors.packageWeight?.message}
              />
            )}
          />
          <Controller
            name="packageLength"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Package Length"
                placeholder="Enter package length"
                value={value.toString()}
                keyboardType="numeric"
                onChangeText={val => {
                  onChange(Number(val));
                  trigger('packageLength');
                }}
                errorMessage={errors.packageLength?.message}
              />
            )}
          />
          <Controller
            name="packageWidth"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Package Width"
                placeholder="Enter package width"
                value={value.toString()}
                keyboardType="numeric"
                onChangeText={val => {
                  onChange(Number(val));
                  trigger('packageWidth');
                }}
                errorMessage={errors.packageWidth?.message}
              />
            )}
          />
          <Controller
            name="packageHeight"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                variant="forms"
                title="Package Height"
                placeholder="Enter package height"
                value={value.toString()}
                keyboardType="numeric"
                onChangeText={val => {
                  onChange(Number(val));
                  trigger('packageHeight');
                }}
                errorMessage={errors.packageHeight?.message}
              />
            )}
          />
          <Controller
            name="isFragile"
            control={control}
            render={({field: {onChange, value}}) => (
              <View>
                <Text style = {[theme.fonts.paragraphSmallSemiBold]} >Fragile Goods</Text>
                <Switch value={value} onValueChange={onChange} />
                <Text style={{color: 'red'}}>{errors.isFragile?.message}</Text>
              </View>
            )}
          />
        </View>
        <Button
          variant="pear"
          title="Submit Product"
          onPress={handleSubmit(onSubmit)}
          style={{width: '60%', alignSelf: 'flex-end'}}
        />
      </ScrollView>
    </View>
  );
};
