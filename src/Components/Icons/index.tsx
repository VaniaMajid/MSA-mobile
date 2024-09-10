//  This file is auto-generated and read-only
import React, {FC} from 'react';
import {IconProps} from './props';
import {getSize} from './utils/getSize';

import IconChevronleftSvg from '~Assets/Icons/chevronleft.svg';
import IconEmailSvg from '~Assets/Icons/email.svg';
import IconEyeSvg from '~Assets/Icons/eye.svg';
import IconLockSvg from '~Assets/Icons/lock.svg';
import IconPatientSvg from '~Assets/Icons/patient.svg';
import IconSpecialistSvg from '~Assets/Icons/specialist.svg';
import IconTickCircleSvg from '~Assets/Icons/tickCircle.svg';

export * from './props';

export const IconChevronleft: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-chevronleft',
}) => {
  const iconSize = getSize(size);
  return (
    <IconChevronleftSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconEmail: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-email',
}) => {
  const iconSize = getSize(size);
  return (
    <IconEmailSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconEye: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-eye',
}) => {
  const iconSize = getSize(size);
  return (
    <IconEyeSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconLock: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-lock',
}) => {
  const iconSize = getSize(size);
  return (
    <IconLockSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconPatient: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-patient',
}) => {
  const iconSize = getSize(size);
  return (
    <IconPatientSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconSpecialist: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-specialist',
}) => {
  const iconSize = getSize(size);
  return (
    <IconSpecialistSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
export const IconTickCircle: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-tickCircle',
}) => {
  const iconSize = getSize(size);
  return (
    <IconTickCircleSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{scaleX: -1}] : [],
      }}
      testID={testID}
      accessible={true}
      accessibilityRole="image"
    />
  );
};
