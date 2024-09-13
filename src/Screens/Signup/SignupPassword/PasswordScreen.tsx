import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {useStyles} from './PasswordScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {InputField, Button, Heading} from '~Components/index';

type PasswordScreenProps = StackScreenProps<PreAuthParamList>;
export const PasswordScreen: FC<PasswordScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Set up your password"
            style={theme.fonts.headerMediumBold}
          />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Create a secure password for your account. This will be used to
            access your patient profile and services.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <InputField title="Password" placeholder="Enter your password" />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Passwords must be at least 8 characters long and include a special
              character.
            </Text>
          </View>
          <View>
            <InputField
              title="Confirm Password"
              placeholder="Enter your password"
            />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Both Password should match
            </Text>
          </View>
        </View>

        <Button
          title="Set Password"
          onPress={() => {
            navigation.navigate('RegistrationForm');
          }}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
