import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ReactNode } from "react";
import { View, Text } from "react-native";

type Props = {
    name: any;
    children: ReactNode;
    href: any;
};

export default function ActivityLink({ name, children, href }: Props) {
    return (
        <Link href={href}>
            <View style={{ gap: 10 }} className="flex-row items-center">
                <MaterialCommunityIcons name={name} size={24} />
                <Text className="font-AsapRegular">{children}</Text>
            </View>
        </Link>
    );
}
