import { View, Text } from "react-native";
import BottomNavigation from "../components/UI/BottomNavigation";
import SearchBar from "../components/UI/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { searchByData } from "../../data/SearchByItems";
import SearchByItem from "./components/SearchByItem";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import Filter from "../components/UI/Filter";

export default function index() {
    return (
        <>
            <Card>
                <Title>TRANSACTION</Title>
                <View className="my-4">
                    <SearchBar />
                </View>
                <View className="py-4 flex-row justify-between items-center">
                    <Title>Search By</Title>
                    <Filter />
                </View>
                <View className="flex-1">
                    <FlatList
                        data={searchByData}
                        renderItem={SearchByItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </Card>
            <BottomNavigation />
        </>
    );
}
