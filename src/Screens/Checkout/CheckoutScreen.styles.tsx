import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.backgroundColor,
            padding: theme.spacing.HGap1,
            paddingBottom: theme.spacing.V10,
        },
        itemContainer: {
            flexDirection: 'row',
            marginBottom: theme.spacing.V2,
            backgroundColor: theme.colors.white,
            borderRadius: theme.spacing.V1,
            padding: theme.spacing.HGap1,
            shadowColor: theme.colors.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
        },
        image: {
            width: 60,
            height: 60,
            borderRadius: theme.spacing.V1,
            marginRight: theme.spacing.HGap1,
        },
        detailsContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        paymentSection: {
            marginTop: theme.spacing.V4,
        },
        sectionTitle: {
            marginBottom: theme.spacing.V2,
        },
        paymentMethod: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: theme.spacing.V3,
        },
        methodButton: {
            flex: 1,
            padding: theme.spacing.V2,
            borderWidth: 1,
            borderColor: theme.colors.lightGray,
            borderRadius: theme.spacing.V1,
            alignItems: 'center',
            marginHorizontal: theme.spacing.H2,
        },
        methodButtonActive: {
            backgroundColor: theme.colors.primaryColor,
            borderColor: theme.colors.primaryColor,
        },
        bankSelection: {
            marginBottom: theme.spacing.V3,
        },
        bankOption: {
            padding: theme.spacing.V2,
            borderWidth: 1,
            borderColor: theme.colors.lightGray,
            borderRadius: theme.spacing.V1,
            marginBottom: theme.spacing.V1,
        },
        bankOptionSelected: {
            backgroundColor: theme.colors.primaryColor,
            borderColor: theme.colors.primaryColor,
        },
        noteInput: {
            height: 80,
            textAlignVertical: 'top',
        },
        totalSection: {
            height: theme.spacing.V10,
            justifyContent: 'center',
            padding: theme.spacing.V1,
            backgroundColor: theme.colors.white,
            borderRadius: theme.spacing.V1,
            marginVertical: theme.spacing.V3,
        },
        confirmButton: {
            backgroundColor: theme.colors.white,
            padding: theme.spacing.V3,
            borderRadius: theme.spacing.V1,
            alignItems: 'center',
            elevation: 4,
            shadowColor: theme.colors.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.15,
            shadowRadius: 6,
        },
        confirmButtonText: {
            color: theme.colors.secondaryColor,
        },
        shippingSection: {
            marginVertical: theme.spacing.V4,
        },
        addressContainer: {
            padding: theme.spacing.V2,
            borderWidth: 1,
            borderColor: theme.colors.lightGray,
            borderRadius: theme.spacing.V1,
            marginBottom: theme.spacing.V2,
        },
        deleteButton: {
            position: 'absolute',
            right:theme.spacing.V1,
            marginTop: theme.spacing.V1,
            alignSelf: 'flex-start',
            padding: theme.spacing.V1,
            backgroundColor: theme.colors.error,
            borderRadius: theme.spacing.V1,
        },
        addButton: {
            marginTop: theme.spacing.V3,
            padding: theme.spacing.V2,
            backgroundColor: theme.colors.primaryOrange,
            borderRadius: theme.spacing.V1,
            alignItems: 'center',
            color: theme.colors.white,
        },
        input: {
            borderWidth: 1,
            borderColor: theme.colors.lightGray,
            borderRadius: theme.spacing.V1,
            padding: theme.spacing.V2,
            marginBottom: theme.spacing.V2,
        },
        addButtonText: {
            color: theme.colors.white,
            fontSize: theme.fonts.paragraphRegularSmall.fontSize,
            fontFamily: theme.fonts.paragraphRegularSmall.fontFamily,
        },
        modalHeader: {
            padding: theme.spacing.V2,
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.colors.backgroundColor,
            padding: theme.spacing.HGap2,
            gap: theme.spacing.V2,
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: theme.spacing.V2,
        },
        emptyAddressContainer: {
            padding: theme.spacing.V2,
            borderWidth: 1,
            borderColor: theme.colors.lightGray,
            borderRadius: theme.spacing.V1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.V2,
        },
        emptyAddressText: {
            color: theme.colors.gray,
            textAlign: 'center',
        },
        addressInfo: {
            marginBottom: theme.spacing.V1,
            color: theme.colors.black,
        },
        selectedAddressContainer: {
            backgroundColor: theme.colors.white,
        },
        label:{
            marginVertical: theme.spacing.V1,
        },
        disabledInput: {
            backgroundColor: theme.colors.lightGray,
        },
    });
  
};