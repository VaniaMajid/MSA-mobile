import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '~Contexts/ThemeContext';
import {IconPatient, IconTickCircle} from '~Components/Icons';
import {RoleCardTypes} from './types';

const RoleCard: FC<RoleCardTypes> = ({
  role,
  roleIcon,
  selectedIcon,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: !selectedIcon ? undefined : theme.colors.primaryColor,
        marginVertical: theme.spacing.V3,
        marginHorizontal: theme.spacing.H3,
        borderRadius: 6,
        alignItems: 'center',
      }}>
      {!selectedIcon && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: theme.colors.primaryColor,
            borderRadius: 6,
            opacity: 0.1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}
      {selectedIcon && (
        <View
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          <IconTickCircle color={theme.colors.white} size="xxs" />
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          margin: theme.spacing.V3,
          height: 50,
        }}>
        {roleIcon}
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '400',
          color: theme.colors.black,
          marginVertical: theme.spacing.V1,
          alignSelf: 'center',
        }}>
        {role}
      </Text>
    </TouchableOpacity>
  );
};

export default RoleCard;
