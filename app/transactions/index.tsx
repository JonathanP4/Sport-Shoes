import { View, Text } from "react-native";
import BottomNavigation from "../components/UI/BottomNavigation";
import SearchBar from "../components/UI/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { searchByData } from "../../data/SearchByItems";
import SearchByItem from "./components/SearchByItem";
export default function index() {
    return (
        <>
            <View className="px-6 py-2 flex-1">
                <Text className="font-BebasNeue text-xl">TRANSACTION</Text>
                <View className="my-4">
                    <SearchBar />
                </View>
                <View className="py-4">
                    <Text className="font-BebasNeue text-xl">Search By</Text>
                </View>
                <View className="flex-1">
                    <FlatList
                        data={searchByData}
                        renderItem={SearchByItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <BottomNavigation />
        </>
    );
}
