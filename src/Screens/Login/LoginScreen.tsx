import React, {FC, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {IconEye, IconLock} from '~Components/Icons';
import {InputField} from '~Components/TextInput';
import {useStyles} from './LoginScreen.styles';
import {Checkbox} from '~Components/Checkbox';
import {PressableText} from '~Components/PressableText';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import { useTheme } from '~Contexts/ThemeContext';

type LoginScreenProps = StackScreenProps<PreAuthParamList>;
export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleForgotPasswordPress = () => {
    // logic to be added
  };

  return (
    <ImageBackgroundWrapper>
      <Image
        source={require('../../Assets/images/nameLogo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Heading style={theme.fonts.headerBold} title="Login" />
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
            text={<Text style={[theme.fonts.labelMedium,{marginLeft: 10}]}>Remember me</Text>}
            isChecked={isChecked}
            onPress={handleCheckboxPress}
            style={{width: 200}}
            textStyle={styles.checkboxText}
          />
          <PressableText
            text="Forgot Password?"
            onPress={handleForgotPasswordPress}
            style={[theme.fonts.linkBold, styles.forgotPass]}
          />
        </View>

        <Button title="Login" textStyle={theme.fonts.buttonSemiBold} onPress={() => {}} />
      </View>
      <View style={styles.register}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate('SelectRole');
          }}
          textStyle={theme.fonts.buttonSemiBold}
          style={{width: '100%'}}
          variant="outline"
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
