import { StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./UI/SearchBar";

export default function Navbar() {
    return (
        <View style={styles.mainContainer}>
            <View className="flex-row bg-white items-center justify-between">
                <Image
                    resizeMode="contain"
                    className="h-[22px]"
                    source={require("../../assets/images/SportShoes.jpg")}
                />
                <View style={styles.iconsContainer}>
                    <Ionicons name="heart-outline" size={20} />
                    <Ionicons name="cart-outline" size={20} />
                    <Ionicons name="notifications-outline" size={20} />
                </View>
            </View>
            <SearchBar />
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        gap: 20,
    },
    iconsContainer: {
        flexDirection: "row",
        gap: 16,
    },
});
