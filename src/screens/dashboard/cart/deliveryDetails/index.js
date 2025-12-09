// import React, { useEffect, useMemo } from 'react';
// import { ScrollView } from 'react-native';
// import { Header, Divider } from '@commonComponents';
// import Data from '@utils/json';
// import { useTranslation } from 'react-i18next';
// import AddressDetails from './addressDetail';
// import BtnContainer from './btnContainer';
// import { WebView } from 'react-native-webview';
// import ButtonContainer from '@commonComponents/buttonContainer';
// import appColors from '@theme/appColors';
// import { windowHeight } from '@theme/appConstant';
// import { useFocusEffect, useTheme } from '@react-navigation/native';
// import { useValues } from '@App';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useShopifyAddress } from '../../../../hooks/useShopifyAddress';
// import { useCart } from '../../../../context/cartContext';
// import { useCustomer } from '../../../../context/customerContext';

// export default function deliveryDetails({ navigation }) {
//   const { currSymbol, currValue } = useValues();
//   const { t } = useTranslation();
//   const { colors, dark } = useTheme();
//   const { cart, clearCart } = useCart();
//   const { customer } = useCustomer();
//   const { addresses, fetchAddresses, deleteAddress } = useShopifyAddress();
//   const [selectedAddress, setSelectedAddress] = useState(null);


//   const webViewRef = useRef(null);

//   const [checkoutUrl, setCheckoutUrl] = useState(null);
//   const [showWebView, setShowWebView] = useState(false);
//   const [isThankYouPage, setIsThankYouPage] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const totalAmount = useMemo(() => {
//     if (!cart || !Array.isArray(cart)) return 0;

//     let total = 0;

//     cart.forEach(item => {
//       const price = Number(item?.price) || 0;
//       const qty = Number(item?.quantity) || 1;
//       total += price * qty;
//     });

//     return total;
//   }, [cart]);

//   return (
//     <SafeAreaView style={{ flex: 1 }} >
//       <Header
//         text={t('deliveryDetails.deliveryDetails')}
//         showText
//         subText={t('deliveryDetails.steps')}
//         navigation={navigation}
//         searchIcon
//         // notificationIcon
//         showWishListIcon
//       />
//       <ScrollView
//         contentContainerStyle={{
//           paddingBottom: windowHeight(90),
//         }}>
//         <AddressDetails
//           address={addresses}
//           t={t}
//           colors={colors}
//           deleteAddress={deleteAddress}
//           selectedAddress={selectedAddress}
//           setSelectedAddress={setSelectedAddress}
//         />
//         <BtnContainer t={t} navigation={navigation} colors={colors} />
//         <Divider />
//         {/* <ExpectedDelivery
//           data={Data.expectedDeliveryData}
//           t={t}
//           colors={colors}
//         /> */}
//       </ScrollView>
//       <ButtonContainer
//         t={t}
//         colors={colors}
//         curruncyIcon={currSymbol}
//         text={`${(totalAmount * currValue).toFixed(2)}`}
//         btnTitle={t('deliveryDetails.ProceedPayment')}
//         subText={t('cart.viewDetails')}
//         subTextColor={appColors.primary}
//         btnClick={() => {
//           navigation.navigate('Checkout');
//         }}
//         bottom={5}
//       />
//     </SafeAreaView>
//   );
// }


import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import AddressDetails from './addressDetail';
import BtnContainer from './btnContainer';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyAddress } from '../../../../hooks/useShopifyAddress';
import { useCart } from '../../../../context/cartContext';
import { useCustomer } from '../../../../context/customerContext';
import { WebView } from 'react-native-webview';
import { useShopifyCart } from '../../../../hooks/useShopifyCart';

export default function DeliveryDetails({ navigation }) {
  const { currSymbol, currValue } = useValues();
  const { t } = useTranslation();
  const { colors, dark } = useTheme();
  const { cart } = useCart();
  const { customer } = useCustomer();
  const { addresses, fetchAddresses, deleteAddress } = useShopifyAddress();
  const { createShopifyCheckoutUrl, clearCart } = useShopifyCart();

  const [selectedAddress, setSelectedAddress] = useState(null);

  // WebView States
  const webViewRef = useRef(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [showWebView, setShowWebView] = useState(false);
  const [isThankYouPage, setIsThankYouPage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch user addresses
  useEffect(() => {
    fetchAddresses();
  }, []);

  // Default to first address
  useEffect(() => {
    if (addresses.length > 0 && !selectedAddress) {
      setSelectedAddress(addresses[0]);
    }
  }, [addresses]);

  // Calculate Cart Total
  const totalAmount = useMemo(() => {
    if (!cart?.length) return 0;
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  // Begin Checkout → Create Shopify Cart URL
  // const beginCheckout = async () => {
  //   if (!selectedAddress) {
  //     alert("Please select an address before checking out.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const formattedCartItems = cart.items.map(item => ({
  //       quantity: item.quantity,
  //       merchandiseId: item.variantId,
  //     }));

  //     const cartDetail = {
  //       formattedCartItems,
  //       selectedAddress,
  //       email: customer?.email
  //     };

  //     const url = await createShopifyCheckoutUrl(cartDetail);

  //     setCheckoutUrl(url);
  //     setShowWebView(true);
  //   } catch (err) {
  //     console.log("Checkout error:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const beginCheckout = async () => {
    if (!selectedAddress) {
      alert("Please select an address before checking out.");
      return;
    }

    try {
      setLoading(true);

      const cartDetail = {
        cartItems: cart,   // raw items, NOT formatted
        selectedAddress,
        email: customer?.email,
      };

      const url = await createShopifyCheckoutUrl(cartDetail);

      setCheckoutUrl(url);
      setShowWebView(true);

    } catch (err) {
      console.log("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };


  // Detect Shopify Thank-You page
  const handleWebNavigation = (navState) => {
    const url = navState.url.toLowerCase();

    if (url.includes("thank-you") || url.includes("thank_you") || url.includes("thankyou")) {
      setIsThankYouPage(true);
      clearCart();

      navigation.reset({
        index: 0,
        routes: [{ name: "(tabs)" }]
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* IF WebView is open → Show checkout */}
      {showWebView ? (
        <>
          <Header
            text={isThankYouPage ? "Thank You!" : "Checkout"}
            showText
            navigation={navigation}
            subText={t('checkout.subTitle')}
          />

          <WebView
            ref={webViewRef}
            source={{ uri: checkoutUrl }}
            onNavigationStateChange={handleWebNavigation}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />

          {loading && (
            <ActivityIndicator
              style={{ position: "absolute", top: "50%", left: "50%" }}
              size="large"
            />
          )}
        </>
      ) : (
        /* NORMAL DELIVERY DETAILS SCREEN */
        <>
          <Header
            text={t('deliveryDetails.deliveryDetails')}
            showText
            subText={t('deliveryDetails.steps')}
            navigation={navigation}
            searchIcon
            showWishListIcon
          />

          <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(100) }}>
            <AddressDetails
              address={addresses}
              t={t}
              colors={colors}
              deleteAddress={deleteAddress}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />

            <BtnContainer t={t} navigation={navigation} colors={colors} />
            <Divider />
          </ScrollView>

          <ButtonContainer
            t={t}
            colors={colors}
            curruncyIcon={currSymbol}
            text={`${(totalAmount * currValue).toFixed(2)}`}
            btnTitle={t('deliveryDetails.ProceedPayment')}
            subText={t('cart.viewDetails')}
            subTextColor={appColors.primary}
            btnClick={beginCheckout}
            bottom={5}
          />
        </>
      )}

      {loading && !showWebView && (
        <ActivityIndicator
          style={{ position: "absolute", top: "50%", left: "50%" }}
          size="large"
        />
      )}
    </SafeAreaView>
  );
}
