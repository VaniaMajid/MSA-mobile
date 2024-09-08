import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CSS, Colors} from '~Style/index';
import fontConfig from '~Style/Typography';

interface IProps {
  title?: string;
  message?: string;
}

interface IErrorListProps {
  errors: Array<string>;
}

interface IToastProps {
  text1?: string;
  props?: IProps;
}

interface IToastErrorProps {
  text1?: string;
  props: IErrorListProps;
}

export const toastConfig = {
  successor: ({text1, props}: IToastProps) => {
    return (
      <View
        pointerEvents="none"
        style={[
          styles.container,
          CSS.alignItemsCenter,
          CSS.mainPadding,
          CSS.pt2,
        ]}>
        <Text style={[fontConfig.st2, CSS.textCenter, CSS.colorWhite]}>
          {text1}
        </Text>
        <Text
          style={[
            fontConfig.body0,
            CSS.textCenter,
            CSS.mt1,
            CSS.colorWhite,
            CSS.ml1,
            CSS.mr1,
          ]}>
          {props?.message}
        </Text>
      </View>
    );
  },
  errorList: ({text1, props}: IToastErrorProps) => {
    const errors = props.errors.length ? props.errors.slice(4) : [];
    return (
      <View
        pointerEvents="none"
        style={[
          styles.container,
          CSS.alignItemsCenter,
          CSS.mainPadding,
          CSS.pt2,
        ]}>
        <Text
          style={[
            fontConfig.st2,
            CSS.textCenter,
            CSS.colorWhite,
            CSS.ml1,
            CSS.mr1,
          ]}>
          {text1}
        </Text>
        {errors.map((err: string) => {
          return (
            <Text
              style={[
                fontConfig.body0,
                CSS.textCenter,
                CSS.mt1,
                CSS.colorWhite,
              ]}>
              {err}
            </Text>
          );
        })}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    height: CSS.DH('12'),
    width: '92%',
    backgroundColor: Colors.primaryMediumBlue,
    borderRadius: CSS.space.V1,
  },
  title: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: CSS.DH('2.4'),
    color: Colors.white,
    letterSpacing: 0.2,
  },
  message: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: CSS.DH('1.6'),
    color: Colors.white,
    letterSpacing: 0.2,
  },
});
