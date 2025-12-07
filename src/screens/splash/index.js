import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { logo, darkLogo, logo2, logo3 } from '@utils/images/images';
import { useValues } from '@App';
import styles from './styles';
import { getValue, setValue } from '@utils/localStorage';
import { useTranslation } from 'react-i18next';

export default function Splash({ navigation }) {
    const width = new Animated.Value(100);
    const height = new Animated.Value(100);
    const { isDark, setIsRTL, setCurrSymbol, setCurrValue, setIsFirstLaunch } =
        useValues();
    const { i18n } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            anim();
        }, 2000);
        getSelectedLanguge();
        getCurruncySymbol();
        getCurruncyVal();
        getRtlval();
    }, []);

    const getSelectedLanguge = async () => {
        getValue('language')
            .then(res => JSON.parse(res))
            .then(val => {
                if (val !== null) {
                    i18n.changeLanguage(selectedLanguge);
                }
            });
    };
    const getRtlval = async () => {
        getValue('rtl')
            .then(res => JSON.parse(res))
            .then(val => {
                if (val !== null) {
                    setIsRTL(val);
                }
            });
    };

    const getCurruncySymbol = async () => {
        getValue('curruncySymbol')
            .then(res => JSON.parse(res))
            .then(val => {
                if (val != null) {
                    setCurrSymbol(val);
                }
            });
    };

    const getCurruncyVal = async () => {
        getValue('curruncyValue')
            .then(res => JSON.parse(res))
            .then(val => {
                if (val != null) {
                    setValue(val);
                }
            });
    };

    const checkIsFirstLaunch = async () => {
        var isFirstLaunch = await getValue('isFirstLaunch');
        if (isFirstLaunch == null) {
            navigation.replace('onBoarding');
            setValue('isFirstLaunch', true.toString());
        } else {
            navigation.replace('Drawer');
        }
    };

    const goToScreen = async () => {
        checkIsFirstLaunch();
    };
    const anim = () => {
        Animated.timing(width, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
        }).start();
        Animated.timing(height, {
            toValue: 550,
            duration: 2000,
            useNativeDriver: false,
        }).start(() => goToScreen());
    };
    return (
        <View style={styles.mainContainer}>
            <Animated.Image
                // source={isDark ? darkLogo : logo}
                source={logo3}
                style={{ width: width, height: height, resizeMode: 'contain' }}
            />
        </View>
    );
}
