import { View, Text } from "react-native";
import BottomNavigation from "../components/UI/BottomNavigation";
import { Vouchers } from "../../data/Vouchers";
import Voucher from "./components/Voucher";
import { DateTime } from "luxon";

export default function index() {
    function checkVoucher(v: VoucherItem) {
        const voucherExpiry = DateTime.fromFormat(
            v.validUntil,
            "dd/MM/yyyy"
        ).toISO();

        const dateNow = DateTime.now().toISO();
        return dateNow < voucherExpiry!;
    }

    return (
        <>
            <View className="px-6 py-2 flex-1">
                <Text className="font-BebasNeue text-xl mb-4">
                    Active Voucher
                </Text>
                {Vouchers.map((v) => {
                    const isValid = checkVoucher(v);
                    return (
                        isValid && (
                            <Voucher key={v.id} isValid={isValid} item={v} />
                        )
                    );
                })}

                <Text className="font-BebasNeue text-xl my-4">
                    Expired Voucher
                </Text>
                {Vouchers.map((v) => {
                    const isValid = checkVoucher(v);

                    return (
                        !isValid && (
                            <Voucher key={v.id} isValid={isValid} item={v} />
                        )
                    );
                })}
            </View>
            <BottomNavigation />
        </>
    );
}
