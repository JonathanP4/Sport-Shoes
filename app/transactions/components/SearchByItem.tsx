import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../constants/Colors";

type Props = {
    item: {
        image: any;
        title: string;
        price: number;
        stars: number[];
        testimonials: number;
        id: string;
    };
};

export default function SearchByItem({ item }: Props) {
    return (
        <View className="flex-row gap-4 items-start mb-4">
            <Image className="rounded-md" source={item.image} />
            <View>
                <Text className="font-BebasNeue text-xl max-w-[150px]">
                    {item.title}
                </Text>
                <View className="flex-row items-center gap-1">
                    {item.stars.map((_, i) => (
                        <Ionicons
                            key={i}
                            name="star"
                            color={Colors.Orange}
                            size={15}
                        />
                    ))}
                    <Text className="text-[10px] font-AsapRegular ml-[2px]">{`(${item.testimonials})`}</Text>
                </View>
            </View>
            <Text className="text-Orange text-xs font-AsapBold">
                Rp{item.price.toLocaleString("pt-br")}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({});
