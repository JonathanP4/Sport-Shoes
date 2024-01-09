import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
export default function Balance() {
    return (
        <View style={styles.balanceContainer}>
            <View>
                <Text style={styles.description}>Wallet balance</Text>
                <View className="flex-row gap-[10px]">
                    <Ionicons name="wallet-outline" size={24} />
                    <Text className="font-AsapBold text-base">Rp1.000.000</Text>
                </View>
            </View>
            <View className="h-full mx-5 w-[2px] bg-Neutral-40" />
            <View>
                <Text style={styles.description}>Top up balance</Text>
                <View className="flex-row gap-[10px]">
                    <Ionicons name="add-circle-outline" size={24} />
                    <Text className="font-AsapBold text-base">Top up</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    balanceContainer: {
        elevation: 4,
        padding: 16,
        backgroundColor: "white",
        shadowColor: Colors["Neutral-80"],
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 24,
    },
    description: {
        fontSize: 12,
        fontFamily: "AsapRegular",
        marginBottom: 8,
    },
});
