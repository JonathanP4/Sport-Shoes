import { View, Text, Image } from "react-native";

type Props = {
    item: {
        image: any;
        date: string;
        title: string;
        id: string;
    };
};

export default function Article({ item }: Props) {
    return (
        <View className="flex-row items-center mb-4">
            <Image
                className="rounded-lg mr-4"
                source={item.image}
                resizeMode="contain"
            />
            <View className="gap-2">
                <Text className="text-xs text-Neutral-80 font-AsapRegular">
                    {item.date}
                </Text>
                <Text className="font-BebasNeue text-base max-w-[168px]">
                    {item.title}
                </Text>
            </View>
        </View>
    );
}
