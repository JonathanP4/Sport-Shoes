import { Pressable } from "react-native";

type Props = {
    children: React.ReactNode;
};
export default function PrimaryButton({ children }: Props) {
    return (
        <Pressable
            android_ripple={{ color: "white" }}
            className="bg-Orange p-3 items-center rounded-lg"
        >
            {children}
        </Pressable>
    );
}
