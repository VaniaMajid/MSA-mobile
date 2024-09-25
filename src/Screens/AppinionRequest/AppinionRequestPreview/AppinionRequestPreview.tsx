import {View, Text, ScrollView, Image} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {useStyles} from './AppinionRequestPreview.styles';
import {AuthParamList} from '~Navigators/AuthParamList';
import {Questions} from '../questions';
import {IconDocument} from '~Components/Icons';
import {DocumentPickerResponse} from 'react-native-document-picker';

type AppinionRequestPreviewScreenProps = StackScreenProps<AuthParamList>;

export const AppinionRequestPreviewScreen: FC<
  AppinionRequestPreviewScreenProps
> = ({navigation, route}) => {
  const theme = useTheme();
  const styles = useStyles();

  const {speciality, data} = route.params as {speciality: string; data: any};
  if (!speciality || !data) {
    throw new Error('Role and data are required');
  }

  return (
    <View style={styles.main}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_1}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.problem}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_2}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.problemTime}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_3}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
             {data.associatedSyptoms}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_4}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.testResults}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_5}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.goingOn}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_6}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.concerns}
            </Text>
          </View>
          <View style={styles.question}>
            <Heading
              title={Questions.QUESTION_7}
              style={[theme.fonts.linkSemiBold]}
            />
            <Text
              style={[
                theme.fonts.previewSubtext,
                {color: theme.colors.lightGray1},
              ]}>
              {data.query}
            </Text>
          </View>
          {data.attachments && data.attachments.some((attachment: DocumentPickerResponse | null) => attachment) && (
            <View style={styles.question}>
              <Heading title="Attachments" style={[theme.fonts.linkSemiBold]} />
              <View style={styles.attachments}>
                {data.attachments
                  .filter((attachment: DocumentPickerResponse | null) => attachment !== null)
                  .map((attachment: DocumentPickerResponse, index: number) => (
                    <View key={index}>
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
                    </View>
                  ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          variant="outline"
          title="Edit"
          onPress={() => navigation.goBack()}
          style={{width: '43%'}}
        />
        <Button
          variant="filled"
          title="Proceed"
          onPress={() => {}}
          style={{width: '43%'}}
        />
      </View>
    </View>
  );
};
