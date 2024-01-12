import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

export default function ProfileHeader() {
    return (
        <View style={{ gap: 16 }} className="flex-row items-center">
            <Image
                className="rounded-full"
                source={require("../../../assets/images/full-length-photo-young-powerful-sports-man-jumping.png")}
            />
            <View className="gap-2">
                <Text className="text-white font-AsapBold text-base">
                    Cameron Williamson
                </Text>
                <View style={{ gap: 2 }} className="flex-row items-center">
                    <MaterialCommunityIcons
                        name="wallet-outline"
                        size={20}
                        color={"white"}
                    />
                    <Text className="text-white text-xs font-AsapRegular">
                        Rp1.000.000
                    </Text>
                </View>
            </View>
        </View>
    );
}
