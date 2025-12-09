import React, { useState, useRef } from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import appColors from "../../../theme/appColors";

export default function OrderStatusWebview({ route, navigation }) {
    const { url } = route.params;
    const [loading, setLoading] = useState(false);
    const webRef = useRef(null);

    const onNavChange = (navState) => {
        // 👇 If user leaves Shopify order page → close
        if (!navState.url.includes("/account/orders/")) {
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                ref={webRef}
                source={{ uri: url }}
                onNavigationStateChange={onNavChange}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            />

            {loading && (
                <ActivityIndicator
                    size="large"
                    color={appColors}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: -20,
                        marginTop: -20,
                    }}
                />
            )}
        </SafeAreaView>
    );
}
