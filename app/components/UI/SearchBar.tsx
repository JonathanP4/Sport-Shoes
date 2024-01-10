import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";

export default function SearchBar() {
    return (
        <View style={styles.mainContainer}>
            <TextInput
                className="flex-1 px-4 py-3 border-[1px] border-Neutral-40 rounded-lg"
                placeholder="Search items"
                placeholderTextColor={Colors["Neutral-80"]}
            />
            <PrimaryButton>
                <Ionicons name="search-outline" color={"white"} size={20} />
            </PrimaryButton>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
});
