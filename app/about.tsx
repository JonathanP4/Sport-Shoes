import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Link href={"/"} asChild>
                <Button title="Go to Home page" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
