import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from '~Components/HeightPicker/HeightPicker.styles';
import {InputField} from '~Components/TextInput';

interface SearchableDropdownProps {
  title?: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  items: {label: string; value: string}[];
  errorMessage?: string;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  title = 'Past Medical History',
  placeholder = 'e.g. hypertension',
  onValueChange,
  defaultValue = '',
  items,
  errorMessage = '',
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [open, setOpen] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue,
  );

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim().length > 0) {
      const filtered = items.filter(item =>
        item.label.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredItems(filtered);
      if (filteredItems.length !== 0) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
    if (value !== selectedValue) {
        setSelectedValue(null);
        onValueChange(value);
      }
  };


  const handleItemSelect = (item: any | null) => {
    if (item) {
      const selectedLabel = item.label || '';
      const selectedValue = item.value || '';
      setInputValue(selectedLabel);
      setSelectedValue(selectedValue);
      onValueChange(selectedLabel); 
      setOpen(false); 
    }
  };

  return (
    <View>
      <InputField
        title={title}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleInputChange}
        errorMessage={errorMessage}
      />

      {open && (
        <DropDownPicker
          listMode="SCROLLVIEW"
          dropDownDirection="TOP"
          open={open}
          value={selectedValue}
          items={filteredItems}
          setOpen={setOpen}
          setValue={setSelectedValue}
          onSelectItem={handleItemSelect}
          style={styles.hiddenPicker}
          placeholder="Select unit"
          placeholderStyle={[
            theme.fonts.inputFieldSmall,
            {color: theme.colors.accentColor},
          ]}
          selectedItemLabelStyle={{color: theme.colors.primaryColor}}
          dropDownContainerStyle={styles.dropDownContainer}
          listItemContainerStyle={{
            marginBottom: theme.spacing.H1,
          }}
          textStyle={theme.fonts.paragraphRegularSmall}
        />
      )}
    </View>
  );
};
