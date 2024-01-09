import { StyleSheet } from "react-native";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
    const [fontsLoaded] = useFonts({
        AsapRegular: require("../node_modules/@expo-google-fonts/asap/Asap_400Regular.ttf"),
        AsapBold: require("../node_modules/@expo-google-fonts/asap/Asap_700Bold.ttf"),
        BebasNeue: require("../node_modules/@expo-google-fonts/bebas-neue/BebasNeue_400Regular.ttf"),
    });

    const onLayoutView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <SafeAreaView onLayout={onLayoutView} style={styles.appContainer}>
                <Slot />
            </SafeAreaView>
            <StatusBar style="inverted" />
        </>
    );
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "white",
    },
});
