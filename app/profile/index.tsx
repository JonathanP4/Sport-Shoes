import { View, Text } from "react-native";
import Tracking from "./components/Tracking";
import Card from "../components/UI/Card";
import ProfileHeader from "./components/ProfileHeader";
import Title from "../components/UI/Title";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivityLink from "./components/ActivityLink";
import BottomNavigation from "../components/UI/BottomNavigation";
export default function index() {
    return (
        <>
            <View className="flex-1">
                <View className="py-4 px-6 bg-Orange -mt-8 rounded-bl-lg rounded-br-lg pt-14 mb-10">
                    <View style={{ gap: 32 }} className="-mb-12">
                        <ProfileHeader />
                        <Tracking />
                    </View>
                </View>
                <View className="py-8 px-6 gap-8">
                    <View style={{ gap: 16 }}>
                        <Title>My Activity</Title>
                        <ActivityLink href={"/"} name="swap-horizontal">
                            Transaction history
                        </ActivityLink>
                        <ActivityLink href={"/"} name="heart-outline">
                            Wishlist
                        </ActivityLink>
                        <ActivityLink href={"/"} name="star-outline">
                            Rating
                        </ActivityLink>
                        <ActivityLink href={"/"} name="history">
                            Last seen product
                        </ActivityLink>
                        <ActivityLink
                            href={"/"}
                            name="ticket-confirmation-outline"
                        >
                            My voucher
                        </ActivityLink>
                    </View>
                    <View style={{ gap: 16 }}>
                        <Title>Other</Title>
                        <ActivityLink href={"/"} name="chat-outline">
                            Chat with Customer Service
                        </ActivityLink>
                        <ActivityLink href={"/"} name="help-circle-outline">
                            Help center
                        </ActivityLink>
                        <ActivityLink href={"/"} name="information-outline">
                            Info
                        </ActivityLink>
                        <ActivityLink href={"/"} name="cellphone">
                            About App
                        </ActivityLink>
                    </View>
                </View>
            </View>
            <BottomNavigation />
        </>
    );
}
