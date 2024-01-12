import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { Link, usePathname } from "expo-router";
import { useEffect, useState } from "react";

type Props = {
    name: any;
    href: any;
};

export default function LinkIcon({ name, href }: Props) {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsActive(href === pathname);
    }, [pathname]);

    return (
        <Link
            href={href}
            className={`${
                isActive ? "bg-Orange/10" : ""
            } p-4 items-center justify-center rounded-lg`}
        >
            <MaterialCommunityIcons
                name={name}
                size={24}
                color={isActive ? Colors["Orange"] : Colors["Neutral-60"]}
            />
        </Link>
    );
}
