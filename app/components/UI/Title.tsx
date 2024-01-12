import { ReactNode } from "react";
import { Text } from "react-native";

type Props = {
    children: ReactNode;
    cssClass?: string;
};

export default function Title({ children, cssClass }: Props) {
    return (
        <Text className={`${cssClass || ""} font-BebasNeue text-xl`}>
            {children}
        </Text>
    );
}
