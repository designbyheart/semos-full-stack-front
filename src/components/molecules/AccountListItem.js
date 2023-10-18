import Link from "next/link";

const AccountListItem = ({ account }) => {
    return <div className={'account-list-item'}>
        <h2>{account?.type}</h2>
        <Link href={`/accounts/${account.id}`}>Pogledaj detaljnije</Link>
    </div>
}

export default AccountListItem