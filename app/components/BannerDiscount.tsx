import { StyleSheet, Dimensions, Image, View, Animated } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "../../constants/Colors";
import { useEffect, useRef, useState } from "react";
import { Banners } from "../../data/Banners";

const WIDTH = Dimensions.get("window").width;

export default function BannerDiscount() {
    const [index, setIndex] = useState(0);
    const stretchAnim0 = useRef(new Animated.Value(5)).current;
    const stretchAnim1 = useRef(new Animated.Value(5)).current;

    // pagination buttons animation
    useEffect(() => {
        function btnAnimationStart(animation: Animated.Value) {
            Animated.timing(animation, {
                toValue: 30,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }

        function btnAnimationEnd(animation: Animated.Value) {
            Animated.timing(animation, {
                toValue: 5,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }

        switch (index) {
            case 0:
                btnAnimationStart(stretchAnim0);
                btnAnimationEnd(stretchAnim1);
                break;
            default:
                btnAnimationStart(stretchAnim1);
                btnAnimationEnd(stretchAnim0);
                break;
        }
    }, [index]);

    return (
        <View className="max-h-[130px]">
            <Carousel
                loop
                style={{ width: "100%", marginTop: 16 }}
                width={WIDTH * 0.7}
                vertical={false}
                data={Banners}
                onSnapToItem={(index) => setIndex(index)}
                renderItem={({ item, index }) => (
                    <View className="w-full ml-5">
                        <Image
                            key={index}
                            className="w-full h-[91px]"
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                )}
            />
            <View className="flex-row justify-center gap-1">
                <Animated.View
                    style={[
                        styles.paginationButton,
                        {
                            backgroundColor:
                                index === 0
                                    ? Colors.Orange
                                    : Colors["Neutral-50"],
                        },
                        { width: stretchAnim0 },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.paginationButton,
                        {
                            backgroundColor:
                                index === 1
                                    ? Colors.Orange
                                    : Colors["Neutral-50"],
                        },
                        { width: stretchAnim1 },
                    ]}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    paginationButton: {
        height: 5,
        borderRadius: 3.5,
    },
});
