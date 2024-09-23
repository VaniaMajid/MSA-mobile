import React, {FC, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {IconInfoCircle} from '~Components/Icons';
import {InfoTooltipProps} from './types';
import {useTheme} from '~Contexts/ThemeContext';
import { useStyles } from './InfoTooltip.styles';

export const InfoTooltip: FC<InfoTooltipProps> = ({
  content,
  placement = 'bottom',
  iconSize = 'xxxs',
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Tooltip
      arrowSize={{width: 0, height: 0}}
      childContentSpacing={1}
      backgroundColor={theme.colors.transparent}
      isVisible={isVisible}
      content={<Text style={theme.fonts.paragraphRegularSmall}>{content}</Text>}
      placement={placement}
      contentStyle={styles.tooltipContent}
      onClose={toggleTooltip}>
      <TouchableOpacity onPress={toggleTooltip}>
        <IconInfoCircle size={iconSize} />
      </TouchableOpacity>
    </Tooltip>
  );
};
