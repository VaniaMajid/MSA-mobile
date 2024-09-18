import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useStyles} from './SelectRole.styles';
import {useTheme} from '~Contexts/ThemeContext';
import RoleCard from './components/RoleCard/RoleCard';
import {IconPatient, IconSpecialist} from '~Components/Icons';
import {Checkbox} from '~Components/Checkbox';
import {Button} from '~Components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {Heading} from '~Components/Heading';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {ErrorMessage} from '~Components/Error';
import { selectRoleSchema } from '~Utils/validation';
import { SelectRoleFormType } from './types';

type SelectRoleScreenProps = StackScreenProps<PreAuthParamList>;

export const SelectRoleScreen: FC<SelectRoleScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    trigger, 
    formState: {errors},
  } = useForm<SelectRoleFormType>({
    resolver: yupResolver(selectRoleSchema),
    defaultValues: {
      role: '',
      terms: false,
    },
  });

  const selectedRole = watch('role');

  const handleSelectRole = (role: string) => {
    setValue('role', role); 
    trigger('role'); 
  };

  const onSubmit = (data: SelectRoleFormType) => {
    console.log('Form Data:', data);
    navigation.navigate('SignupEmail');
  };

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <Heading title="Select your Role" style={theme.fonts.headerMediumBold} />
        <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
          Select your role to proceed: choose 'Patient' for medical advice or
          'Specialist' to offer consultations.
        </Text>
        <View style={styles.roleCardContainer}>
          <RoleCard
            onPress={() => handleSelectRole('Patient')}
            role="Patient"
            roleIcon={
              <IconPatient
                color={
                  selectedRole === 'Patient'
                    ? theme.colors.white
                    : theme.colors.primaryColor
                }
                size="l"
              />
            }
            selectedIcon={selectedRole === 'Patient'}
          />
          <RoleCard
            onPress={() => handleSelectRole('Specialist')}
            role="Specialist"
            roleIcon={
              <IconSpecialist
                color={
                  selectedRole === 'Specialist'
                    ? theme.colors.white
                    : theme.colors.primaryColor
                }
                size="l"
              />
            }
            selectedIcon={selectedRole === 'Specialist'}
          />
        </View>

        <Controller
          control={control}
          name="terms"
          render={({field: {onChange, value}}) => (
            <Checkbox
              text={
                <Text style={[theme.fonts.subtextSmall, styles.checkboxText]}>
                  I agree to the{' '}
                  <Text style={styles.checkboxTextPrimary}>Terms of Service</Text>{' '}
                  and <Text style={styles.checkboxTextPrimary}>Privacy Policy</Text>
                </Text>
              }
              isChecked={value}
              onPress={() => onChange(!value)}
            />
          )}
        />
        {errors.role ? <ErrorMessage message={errors.role?.message || ''} /> : null}
        {errors.terms ? <ErrorMessage message={errors.terms?.message || ''} /> : null}
      </View>
      <Button
        title="Let's Get Started"
        style={{width: '100%'}}
        onPress={handleSubmit(onSubmit)}
      />
    </ImageBackgroundWrapper>
  );
};
