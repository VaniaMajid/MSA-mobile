import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {IconEye, IconLock} from '~Components/Icons';
import {InputField} from '~Components/TextInput';
import {useStyles} from './LoginScreen.styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useTheme} from '~Contexts/ThemeContext';

export const LoginScreen: FC = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <ImageBackground
      style={styles.content}
      source={require('../../Assets/images/authBackground.png')}>
      <Image
        source={require('../../Assets/images/nameLogo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Heading fontSize={30} title="Login" />
        <InputField title="Email" placeholder="yourname@example.com" />
        <InputField
          title="Password"
          placeholder=""
          isPassword={true}
          leftIcon={<IconLock />}
          rightIcon={<IconEye />}
        />
        <View style={styles.row}>
          <BouncyCheckbox
            size={22}
            fillColor={theme.colors.primaryColor}
            unFillColor={theme.colors.white}
            text="Remember Password"
            iconStyle={styles.checkboxIcon}
            innerIconStyle={styles.checkboxInnerIcon}
            textStyle={styles.checkboxText}
            onPress={(isChecked: boolean) => {}}
            style={{width: 200}}
          />
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </View>

        <Button title="Login" onPress={() => {}} style={{borderRadius: 6}} />
      </View>
      <View style={styles.register}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Button
          title="Register"
          onPress={() => {}}
          style={{borderRadius: 6, width: '100%'}}
          variant="outline"
        />
      </View>
    </ImageBackground>
  );
};
