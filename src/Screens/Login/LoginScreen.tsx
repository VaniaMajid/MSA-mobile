import React, {FC, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {IconEye, IconLock} from '~Components/Icons';
import {InputField} from '~Components/TextInput';
import {useStyles} from './LoginScreen.styles';
import {Checkbox} from '~Components/Checkbox';
import { PressableText } from '~Components/PressableText';

export const LoginScreen: FC = () => {
  const styles = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleForgotPasswordPress = () => {
    // logic to be added
  };

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
          <Checkbox
            text="Remember Password"
            isChecked={isChecked}
            onPress={handleCheckboxPress}
            style={{width: 200}}
            textStyle={styles.checkboxText}
          />
          <PressableText
            text="Forgot Password?"
            onPress={handleForgotPasswordPress}
            style={styles.forgotPass}
          />
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
