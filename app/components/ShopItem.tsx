import { View, Text, Pressable, Image } from "react-native";

type Props = {
    item: {
        img: any;
        title: string;
        category: string;
        price: number;
    };
};

export default function ShopItem({ item }: Props) {
    return (
        <Pressable>
            <Image source={item.img} className="rounded-lg mb-[10px]" />
            <View className="space-y-2">
                <Text className="font-BebasNeue text-base">{item.title}</Text>
                <Text className="font-AsapRegular text-xs">
                    {item.category}
                </Text>
                <Text className="font-AsapBold text-sm text-Orange">
                    Rp{item.price.toLocaleString("pt-br")}
                </Text>
            </View>
        </Pressable>
    );
}
