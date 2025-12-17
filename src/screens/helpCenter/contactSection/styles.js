import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

const styles = StyleSheet.create({
    routeContainer: {
        marginTop: windowWidth(16),
        paddingHorizontal: windowWidth(16)
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: windowWidth(20),
        paddingHorizontal: windowWidth(16),
        borderRadius: windowWidth(12),
        backgroundColor: appColors.white,
        marginBottom: windowWidth(12),

        // 🔹 light border
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.06)',

        // 🔹 subtle shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },


    icon: {
        width: windowWidth(24),
        height: windowWidth(24),
        marginEnd: windowWidth(12),
    },

    title: {
        fontSize: windowWidth(14),
        color: appColors.textDark,
        fontWeight: '500',
        flex: 1,
    },

    content: {
        marginVertical: windowHeight(6),
        lineHeight: windowHeight(17),
        fontSize: fontSizes.FONT18,
        color: appColors.grey,
        fontFamily: appFonts.LatoRegular,
    },
});

export default styles;
