import { View } from "react-native";
import LinkIcon from "./LinkIcon";

export default function BottomNavigation() {
    return (
        <View
            style={{ gap: 16 }}
            className="px-6 py-4 justify-center items-center flex-row"
        >
            <LinkIcon href="/" name="home-outline" />
            <LinkIcon href="/transactions" name="swap-horizontal" />
            <LinkIcon href="/vouchers" name="ticket-confirmation-outline" />
            <LinkIcon href="/articles" name="newspaper-variant-multiple" />
            <LinkIcon href="/profile" name="account-outline" />
        </View>
    );
}
