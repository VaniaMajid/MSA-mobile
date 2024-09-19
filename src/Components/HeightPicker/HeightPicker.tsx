import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './HeightPicker.styles';
import {IconArrowDown, IconChevronleft} from '~Components/Icons';

interface HeightPickerProps {
  title?: string;
  placeholder?: string;
  units: Array<{label: string; value: string}>;
  onUnitChange: (unit: string) => void;
  onValueChange: (value: number) => void;
  defaultValue?: number;
  defaultUnit?: string;
}

export const HeightPicker: React.FC<HeightPickerProps> = ({
  title = 'Height',
  placeholder = 'Enter height',
  units,
  onUnitChange,
  onValueChange,
  defaultValue = 0,
  defaultUnit = 'cm',
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const [selectedUnit, setSelectedUnit] = useState(defaultUnit);
  const [inputValue, setInputValue] = useState<number>(defaultValue);
  const [open, setOpen] = useState(false);

  const handleUnitChange = (value: any) => {
    setSelectedUnit(value);
    onUnitChange(value);
    setOpen(false);
  };

  const handleInputChange = (value: any) => {
    setInputValue(value);
    onValueChange(value);
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
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            style={[theme.fonts.inputFieldSmall, { paddingBottom: 9}]}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.accentColor}
            keyboardType="numeric"
            value={inputValue.toString()}
            onChangeText={handleInputChange}
          />
          <Text style={theme.fonts.inputFieldSmall}>{selectedUnit}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setOpen(prev => !prev)}>
          <IconArrowDown size='xxxs'/>
        </TouchableOpacity>
      </View>

      {open && (
        <DropDownPicker
          dropDownDirection="TOP"
          open={open}
          value={selectedUnit}
          items={units}
          setOpen={setOpen}
          setValue={handleUnitChange}
          style={styles.hiddenPicker}
          placeholder="Select unit"
          placeholderStyle={[
            theme.fonts.inputFieldSmall,
            {color: theme.colors.accentColor},
          ]}
          selectedItemLabelStyle={{color: theme.colors.primaryColor}}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      )}
    </View>
  );
};
