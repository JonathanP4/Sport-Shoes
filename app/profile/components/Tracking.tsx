import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Divider from "./Divider";
export default function Tracking() {
    return (
        <View
            style={{ elevation: 2 }}
            className="p-4 rounded-xl items-center justify-between flex-row bg-white"
        >
            <View className="gap-3 items-center">
                <MaterialCommunityIcons name="wallet-outline" size={24} />
                <Text style={styles.text}>Pending</Text>
            </View>

            <Divider />

            <View className="gap-3 items-center">
                <MaterialCommunityIcons
                    name="package-variant-closed"
                    size={24}
                />
                <Text style={styles.text}>Packaged</Text>
            </View>

            <Divider />

            <View className="gap-3 items-center">
                <MaterialCommunityIcons name="truck-outline" size={24} />
                <Text style={styles.text}>Sent</Text>
            </View>

            <Divider />

            <View className="gap-3 items-center">
                <MaterialCommunityIcons name="star-outline" size={24} />
                <Text style={styles.text}>Reviews</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "AsapRegular",
        fontSize: 11,
    },
});
