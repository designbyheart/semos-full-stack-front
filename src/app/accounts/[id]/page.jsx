import {accounts, getAccount} from "@/mockedData/account";

const Accounts = ({ params: { id } }) => {
  const account = getAccount(id)
  
  return (
    <div className={'main'}>
      <h1>Account Details</h1>
      <div className="account-details-container">
        {account.type}
      </div>
    </div>
  );
};

export default Accounts;
