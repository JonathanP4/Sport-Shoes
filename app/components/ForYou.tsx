import { View, Text } from "react-native";
import { ShopItems } from "../../data/ShopItemsData";
import ShopItem from "./ShopItem";

export default function ForYou() {
    return (
        <View>
            <Text className="text-xl font-BebasNeue">For you</Text>
            <View
                style={{ rowGap: 16 }}
                className="flex-row flex-wrap mt-4 justify-between p-1"
            >
                {ShopItems.map((item, index) => (
                    <ShopItem key={index} item={item} />
                ))}
            </View>
        </View>
    );
}
