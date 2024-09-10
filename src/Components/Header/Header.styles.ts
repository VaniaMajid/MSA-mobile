import {useTheme} from '~Contexts/ThemeContext';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export const useStyles = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    safeArea: {
      paddingTop: insets.top,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#FFF',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#172B4D',
      marginLeft: 10, // Adjust to match spacing
    },
  });
};
