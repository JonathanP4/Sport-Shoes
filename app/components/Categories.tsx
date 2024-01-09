import { StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";

export default function Categories() {
    return (
        <View className="px-6 py-4 mt-6">
            <Text className="text-xl font-BebasNeue">Shop by Category</Text>
            <View style={styles.categoryItemsContainer}>
                <CategoryItem iconName={"shoe-print"} title="Footwear" />
                <CategoryItem iconName={"bag-personal"} title="Bags" />
                <CategoryItem
                    iconName={"tshirt-crew-outline"}
                    title="Apparel"
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    categoryItemsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        gap: 10,
    },
});
