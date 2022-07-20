import { Account, Image, User } from "../../types";
import { Row } from "../components";

export default (users: User[],
    accounts: Account[],
    images: Image[]): Row[] => {
    const rowsArray = users.map((user: User) => {
        const account = accounts.find((acc: Account) => acc.userID === user.userID);
        const image = images.find((img: Image) => img.userID === user.userID);
        // lets assume that payments array is already sorted
        const lastPayments = account.payments.length > 0 ? account.payments[0].totalSum : 0;
        return {
            avatar: image?.url || "",
            username: user.username,
            country: user.country,
            name: user.name,
            lastPayments,
            posts: account?.posts || 0
        } as Row
    });
    return rowsArray;
}