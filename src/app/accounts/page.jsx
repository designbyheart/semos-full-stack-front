import { accounts } from "@/mockedData/account";
import AccountListItem from '@/components/molecules/AccountListItem'

const Accounts = () => {
  return (
    <div className={'acccounts-container'}>
      <h1>Accounts</h1>
      <div className="accounts-container">
        {accounts.map((account) => (<AccountListItem key={account.id} account={account}/>))}
      </div>
    </div>
  );
};

export default Accounts;
