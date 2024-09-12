import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingBottom: 10,
        paddingHorizontal: 50, 
      },
      stepContainer: {
        alignItems: 'center',
        flexDirection: 'column',
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
      },
      activeCircle: {
        backgroundColor: theme.colors.primaryColor, 
      },
      inactiveCircle: {
        borderWidth: 2,
        borderColor: theme.colors.accentColor, 
        backgroundColor: theme.colors.white,
      },
      activeText: {
        color: theme.colors.white, 
      },
      inactiveText: {
        color: theme.colors.accentColor,
      },
      activeLabel: {
        color: theme.colors.darkGray, 
      },
      inactiveLabel: {
        color: theme.colors.darkGray,
      },  
      line: {
        borderRadius: 6,
        borderWidth: 5,
        width: '52%',
        marginTop: -theme.spacing.V2,
      } 
  });
};
