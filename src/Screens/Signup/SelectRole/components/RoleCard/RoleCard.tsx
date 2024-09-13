import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '~Contexts/ThemeContext';
import {IconPatient, IconTickCircle} from '~Components/Icons';
import {RoleCardTypes} from '../types';
import {useStyles} from './RoleCard.styles';

const RoleCard: FC<RoleCardTypes> = ({
  role,
  roleIcon,
  selectedIcon,
  onPress,
}) => {
  const theme = useTheme();
  const styles = useStyles(selectedIcon);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {!selectedIcon && <View style={styles.icon} />}
      {selectedIcon && (
        <View style={styles.selectedIcon}>
          <IconTickCircle color={theme.colors.white} size="xxs" />
        </View>
      )}
      <View style={styles.roleIcon}>{roleIcon}</View>
      <Text style={[theme.fonts.paragraphRegularSmall, styles.roleText]}>
        {role}
      </Text>
    </TouchableOpacity>
  );
};

export default RoleCard;
