import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        gap: theme.spacing.H1,
        width: 10,
      },
      value: {
        color: theme.colors.error, 
        backgroundColor: '#F0346226', 
        paddingVertical: 7,
        paddingHorizontal: theme.spacing.H3,
        borderRadius: 6
      }
  });
};
