import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ErrorMessage} from '~Components/Error';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './Dropdown.styles';

interface DropdownPickerProps {
  title: string;
  placeholder: string;
  value: any;
  items: {label: string; value: string}[];
  onValueChange: (value: string) => void;
  multiple?: boolean;
  errorMessage?: string;
  searchEnabled?: boolean;
}

export const DropdownPicker: React.FC<DropdownPickerProps> = ({
  title = 'Select Option',
  placeholder = 'Select',
  items,
  value = null,
  onValueChange,
  multiple = false,
  errorMessage = '',
  searchEnabled = false,
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const pickDropDownItem = (value: any) => {
    onValueChange(value);
    console.log(value)
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
        listMode="SCROLLVIEW"
        multiple={multiple}
        placeholder={placeholder}
        dropDownDirection={searchEnabled ? 'TOP' : 'BOTTOM'}
        open={open}
        max={1}
        style={{
          borderColor: errorMessage
            ? theme.colors.error
            : theme.colors.accentColor,
          width: '100%',
          borderRadius: 6,
          height: 60,
        }}
        value={value}
        items={items}
        containerStyle={{borderColor: theme.colors.accentColor}}
        setOpen={setOpen}
        setValue={callback => {
          const newValue = callback(value);
          pickDropDownItem(newValue);
        }}
        placeholderStyle={[
          theme.fonts.inputFieldSmall,
          {color: theme.colors.accentColor},
        ]}
        setItems={() => {}}
        theme="LIGHT"
        mode="SIMPLE"
        dropDownContainerStyle={styles.dropdownContainer}
        searchable={searchEnabled}
        searchPlaceholder="Search Speciality"
        searchContainerStyle={{
          borderColor: theme.colors.white,
        }}
        searchTextInputStyle={[
          styles.searchTextInput,
          theme.fonts.inputFieldSmall,
        ]}
        listItemContainerStyle={styles.listItemContainer}
        textStyle={theme.fonts.paragraphRegularSmall}
      />
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </View>
  );
};
