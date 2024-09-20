import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {Button} from '~Components/Button';
import {useTheme} from '~Contexts/ThemeContext';
import {IconTickCircle} from '~Components/Icons';
import {useStyles} from './PasswordResetSuccessfulScreen.styles';
import { Path } from '~Navigators/routes';

type PasswordResetSuccessfulScreenProps = StackScreenProps<PreAuthParamList>;

export const PasswordResetSuccessfulScreen: FC<
  PasswordResetSuccessfulScreenProps
> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <ImageBackgroundWrapper>
      <View style={styles.mainContainer}>
        <IconTickCircle size="xl" color={theme.colors.primaryColor} />
        <Text
          style={[
            theme.fonts.paragraphRegularSmall,
            {color: theme.colors.darkGray, textAlign: 'center'},
          ]}>
          Your password has been successfully reset. Please log in to your
          account with your new credentials.
        </Text>
      </View>

      <Button
        title="Go back to Login"
        onPress={() => {
          navigation.navigate(Path.LOGIN_SCREEN);
        }}
        style={{width: '100%', marginBottom: theme.spacing.V4}}
        textStyle={theme.fonts.buttonSemiBold}
        variant="filled"
      />
    </ImageBackgroundWrapper>
  );
};
