import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    iconName: any;
    title: string;
};

export default function CategoryItem({ iconName, title }: Props) {
    return (
        <Pressable
            android_ripple={{ color: "#ccc" }}
            className="min-w-[108px] p-5 justify-center items-center gap-2 bg-Neutral-20 rounded-xl"
        >
            <MaterialCommunityIcons name={iconName} size={32} />
            <Text className="text-xl text-Orange font-BebasNeue">{title}</Text>
        </Pressable>
    );
}
