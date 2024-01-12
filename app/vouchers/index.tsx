import BottomNavigation from "../components/UI/BottomNavigation";
import { Vouchers } from "../../data/Vouchers";
import Voucher from "./components/Voucher";
import { DateTime } from "luxon";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";

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
            <Card>
                <Title cssClass="mb-4">Active Voucher</Title>
                {Vouchers.map((v) => {
                    const isValid = checkVoucher(v);
                    return (
                        isValid && (
                            <Voucher key={v.id} isValid={isValid} item={v} />
                        )
                    );
                })}

                <Title cssClass="my-4">Expired Voucher</Title>
                {Vouchers.map((v) => {
                    const isValid = checkVoucher(v);

                    return (
                        !isValid && (
                            <Voucher key={v.id} isValid={isValid} item={v} />
                        )
                    );
                })}
            </Card>
            <BottomNavigation />
        </>
    );
}
