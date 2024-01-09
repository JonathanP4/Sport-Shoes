import { View, Text, ScrollView } from "react-native";
import BottomNavigation from "../components/UI/BottomNavigation";
export default function index() {
    return (
        <>
            <ScrollView>
                <Text>TRANSACTIONS</Text>
            </ScrollView>
            <BottomNavigation />
        </>
    );
}
