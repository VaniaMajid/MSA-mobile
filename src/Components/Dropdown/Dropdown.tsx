import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '~Contexts/ThemeContext';

interface DropdownPickerProps {
  title: string;
  placeholder: string;
  items: Array<{label: string; value: any}>;
  onValueChange: (value: any) => void;
  defaultValue?: any;
  multiple?: boolean;
}

export const DropdownPicker: React.FC<DropdownPickerProps> = ({
  title = 'Select Option',
  placeholder = 'Select',
  items,
  onValueChange,
  defaultValue = null,
  multiple = false,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const pickDropDownItem = (value: any) => {
    setValue(value);
    onValueChange(value);
    setOpen(false);
  };

  return (
    <View>
      {title && (
        <Text
          style={[
            theme.fonts.inputFieldSmall,
            {marginBottom: theme.spacing.V1},
          ]}>
          {title}
        </Text>
      )}
      <DropDownPicker
        multiple={multiple}
        placeholder={placeholder}
        dropDownDirection="BOTTOM"
        open={open}
        max={1}
        style={{borderColor: theme.colors.accentColor, width: '100%'}}
        value={value}
        items={items}
        containerStyle={{borderColor: theme.colors.accentColor}}
        setOpen={setOpen}
        setValue={pickDropDownItem}
        placeholderStyle={[
          theme.fonts.inputFieldSmall,
          {color: theme.colors.accentColor},
        ]}
        setItems={() => {}}
        theme="LIGHT"
        mode="SIMPLE"
        dropDownContainerStyle={{
          borderColor: theme.colors.accentColor,
          zIndex: 999,
        }}
      />
    </View>
  );
};
