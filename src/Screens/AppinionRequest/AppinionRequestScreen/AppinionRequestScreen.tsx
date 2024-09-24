import React, {FC, useState} from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useStyles} from './AppinionRequestScreen.styles';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StepIndicator} from './Components';
import {InputField} from '~Components/TextInput';
import {useTheme} from '~Contexts/ThemeContext';
import {Controller, useForm} from 'react-hook-form';
import {AppinionRequestFormType} from './types';
import {AppinionRequestSchema} from '~Utils/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '~Components/Button';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {IconAbout, IconAdd, IconDocument} from '~Components/Icons';
import {PressableText} from '~Components/PressableText';
import {Heading} from '~Components/Heading';
import {CustomModal} from '~Components/CustomModal';

type AppinionRequestScreenProps = StackScreenProps<AuthParamList>;

export const AppinionRequestScreen: FC<AppinionRequestScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
    trigger,
  } = useForm<AppinionRequestFormType>({
    resolver: yupResolver(AppinionRequestSchema),
    defaultValues: {
      problem: '',
      problemTime: '',
      associatedSyptoms: '',
      testResults: '',
      goingOn: '',
      concerns: '',
      query: '',
      attachments: [],
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showAttachmentPicker, setShowAttachmentPicker] = useState(false);
  const [attachments, setAttachments] = useState<
    (DocumentPickerResponse | null)[]
  >([null, null]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleNextStep = async () => {
    let isValidCurrentStep = true;

    if (currentStep === 1) {
      isValidCurrentStep = await trigger([
        'problem',
        'problemTime',
        'associatedSyptoms',
      ]);
    } else if (currentStep === 2) {
      isValidCurrentStep = await trigger([
        'testResults',
        'goingOn',
        'concerns',
      ]);
    } else if (currentStep === 3) {
      isValidCurrentStep = await trigger(['query']);
    }

    if (isValidCurrentStep) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const pickDocument = async (index: number) => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      const updatedAttachments = [...attachments];
      updatedAttachments[index] = result;
      setAttachments(updatedAttachments);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled document picker');
      } else {
        console.log('DocumentPicker Error: ', err);
      }
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = [...attachments];

    updatedAttachments[index] = null;

    if (index === 0) {
      for (let i = 1; i < updatedAttachments.length; i++) {
        updatedAttachments[i - 1] = updatedAttachments[i];
      }
      updatedAttachments[updatedAttachments.length - 1] = null;
    }

    setAttachments(updatedAttachments);
  };

  const onSubmit = (data: AppinionRequestFormType) => {
    const finalData = {
      ...data,
      attachments,
    };
    console.log(finalData);
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        currentStep={currentStep}
        onPreviousStep={handlePreviousStep}
      />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          {currentStep === 1 && (
            <>
              <Controller
                name="problem"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="What is your main problem?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('problem');
                    }}
                    errorMessage={errors.problem?.message}
                    multiline
                  />
                )}
              />
              <Controller
                name="problemTime"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="How long has it been going on?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('problemTime');
                    }}
                    errorMessage={errors.problemTime?.message}
                    multiline
                  />
                )}
              />
              <Controller
                name="associatedSyptoms"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="Have you noticed any associated symptoms?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('associatedSyptoms');
                    }}
                    errorMessage={errors.associatedSyptoms?.message}
                    multiline
                  />
                )}
              />
            </>
          )}
          {currentStep === 2 && (
            <>
              <Controller
                name="testResults"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="Have any tests been done so far? If so what were the results?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('testResults');
                    }}
                    errorMessage={errors.testResults?.message}
                    multiline
                  />
                )}
              />
              <Controller
                name="goingOn"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="What do you think is going on?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('goingOn');
                    }}
                    errorMessage={errors.goingOn?.message}
                    multiline
                  />
                )}
              />
              <Controller
                name="concerns"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="What are your concerns?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('concerns');
                    }}
                    errorMessage={errors.concerns?.message}
                    multiline
                  />
                )}
              />
            </>
          )}
          {currentStep === 3 && (
            <>
              <Controller
                name="query"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    title="What would you like to know from the specialist?"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                      trigger('query');
                    }}
                    errorMessage={errors.query?.message}
                    multiline
                  />
                )}
              />

              {showAttachmentPicker ? (
                <View style={{gap: theme.spacing.HGap3}}>
                  <Heading
                    title={
                      attachments.filter(attachment => attachment !== null)
                        .length > 0
                        ? 'Attachments'
                        : 'You can attach up to 2 Photos/pages'
                    }
                    style={theme.fonts.inputFieldSmall}
                  />

                  <View
                    style={{flexDirection: 'row', gap: theme.spacing.HGap2}}>
                    {attachments.map((attachment, index) => (
                      <View key={index}>
                        {attachment ? (
                          <>
                            {attachment.type?.startsWith('image/') ? (
                              <Image
                                source={{uri: attachment.uri}}
                                style={styles.attachmentImage}
                              />
                            ) : (
                              <View style={styles.docAttachment}>
                                <IconDocument
                                  size="s"
                                  color={theme.colors.primaryColor}
                                />
                                <Text
                                  style={[
                                    theme.fonts.filterText,
                                    {textAlign: 'center'},
                                  ]}>
                                  {attachment.name}
                                </Text>
                              </View>
                            )}
                            <View style={{marginTop: theme.spacing.H1}}>
                              <PressableText
                                text="Remove"
                                onPress={() => removeAttachment(index)}
                                style={[
                                  theme.fonts.subtextSmall,
                                  {color: theme.colors.primaryColor},
                                ]}
                              />
                            </View>
                          </>
                        ) : (
                          <View style={styles.addButtonContainer}>
                            <Button
                              onPress={() => pickDocument(index)}
                              variant="filled"
                              icon={
                                <IconAdd
                                  color={theme.colors.primaryColor}
                                  size="xs"
                                />
                              }
                              textStyle={theme.fonts.paragraphSmallSemiBold}
                              style={styles.addButton}
                            />
                            <Text style={theme.fonts.inputFieldSmall}>
                              Attachment {index + 1}
                            </Text>
                          </View>
                        )}
                      </View>
                    ))}
                  </View>
                  {attachments.filter(attachment => attachment !== null)
                    .length < 2 && (
                    <>
                      <Button
                        variant="filled"
                        title="Attach from Google Drive/ iCloud"
                        onPress={() => {}}
                        textStyle={theme.fonts.paragraphSmallSemiBold}
                        style={{width: '100%', marginTop: theme.spacing.V1}}
                      />
                      <PressableText
                        text="Guidance notes for attachments"
                        onPress={() => setModalVisible(true)}
                        style={styles.link}
                      />
                      <CustomModal
                        visible={modalVisible}
                        header="Guidance Notes for Attachments"
                        description={
                          'Maximum number of photos = 2\n' +
                          'No sensitive photos eg. genitalia\n' +
                          'Maximum number of documents/reports = 2\n' +
                          'Maximum number of pages per document = 2\n'
                        }
                        descriptionStyle={{textAlign: 'left'}}
                        button1Text="Got it"
                        button1Handler={() => setModalVisible(false)}
                      />
                    </>
                  )}
                </View>
              ) : (
                <Button
                  variant="outline"
                  title="Add Attachment"
                  onPress={() => setShowAttachmentPicker(true)}
                  style={{width: '50%', paddingVertical: 10}}
                  textStyle={theme.fonts.paragraphSmallSemiBold}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>
      {(currentStep === 1 || currentStep === 2) && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.spacing.V2,
          }}>
          <Button
            variant="outline"
            title="Back"
            onPress={handlePreviousStep}
            style={{width: '35%'}}
            disabled={currentStep === 1}
          />
          <Button
            variant="filled"
            title="Next"
            onPress={handleNextStep}
            style={{width: '35%'}}
          />
        </View>
      )}
      {currentStep === 3 && (
        <Button
          variant="filled"
          title="Continue"
          onPress={handleSubmit(onSubmit)}
          style={{width: '40%', alignSelf: 'flex-end'}}
        />
      )}
    </View>
  );
};
