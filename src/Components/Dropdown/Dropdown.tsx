import React, {useState} from 'react';

import {View, Text} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '~Contexts/ThemeContext';

export const DropdownPicker = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},

    {label: 'Non Binary', value: 'Non Binary'},
    {label: 'Other', value: 'Other'},
  ]);
  const pickDropDownItem = (value: any) => {
    console.log(value);

    setValue(value);
    setOpen(false);
  };

  return (
    <View>
      <Text style={{marginVertical: theme.spacing.V1}}>Gender</Text>
      <DropDownPicker
        multiple={false}
        placeholder="Select Gender"
        dropDownDirection="BOTTOM"
        open={open}
        max={1}
        style={{borderColor: theme.colors.accentColor, width: '100%'}}
        value={value}
        items={items}
        containerStyle={{borderColor: theme.colors.accentColor}}
        setOpen={setOpen}
        setValue={pickDropDownItem}
        placeholderStyle={{
          color: theme.colors.accentColor,
        }}
        setItems={setItems}
        theme="LIGHT"
        mode="SIMPLE"
      />
    </View>
  );
};
