import { View, Text, FlatList } from "react-native";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import Filter from "../components/UI/Filter";
import BottomNavigation from "../components/UI/BottomNavigation";
import { Articles } from "../../data/Articles";
import Article from "./components/Article";
export default function index() {
    return (
        <>
            <Card>
                <View className="flex-row justify-between items-center mb-6">
                    <Title>Articles</Title>
                    <Filter />
                </View>
                <FlatList
                    className="flex-1"
                    data={Articles}
                    renderItem={Article}
                    keyExtractor={(item) => item.id}
                />
            </Card>
            <BottomNavigation />
        </>
    );
}
