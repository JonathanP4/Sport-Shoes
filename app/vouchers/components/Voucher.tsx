import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

type Props = {
    item: VoucherItem;
    isValid: boolean;
};
export default function Voucher({ item, isValid }: Props) {
    return (
        <ImageBackground
            source={
                isValid
                    ? require("../../../assets/images/voucher.png")
                    : require("../../../assets/images/voucher-2.png")
            }
            resizeMode="stretch"
            className="mb-4"
        >
            <View className="px-6 py-4 flex-row justify-between">
                <View style={{ gap: 5 }}>
                    <Text style={[styles.title, styles.text]}>
                        {item.discount} OFF
                    </Text>
                    <Text
                        style={styles.descriptionText}
                        className="text-xs text-Orange"
                    >
                        {item.discountType}
                    </Text>
                </View>
                <View className="flex-row mt-1">
                    <Text
                        style={[styles.text, styles.descriptionText]}
                        className="text-[10px]"
                    >
                        {item.createdOn} -{" "}
                    </Text>
                    <Text
                        style={[styles.text, styles.descriptionText]}
                        className="text-[10px]"
                    >
                        {item.validUntil}
                    </Text>
                </View>
            </View>
            <Text className="px-6 py-4 text-Neutral-90 font-BebasNeue text-base">
                Payment with {item.payment}
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.Orange,
    },
    title: {
        fontSize: 25,
        fontFamily: "BebasNeue",
    },
    descriptionText: {
        fontFamily: "AsapRegular",
    },
});
