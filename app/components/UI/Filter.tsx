import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function Filter() {
    return (
        <View className="flex-row items-center gap-2">
            <Ionicons name="filter" color={Colors.Orange} size={16} />
            <Text className="text-Orange font-AsapRegular">Filter</Text>
        </View>
    );
}
