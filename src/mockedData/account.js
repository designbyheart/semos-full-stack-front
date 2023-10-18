export const accounts = [
  {
    id: "5",
    monthly_fee: "",
    card_type: "",
    ebank_enabled: "",
    transaction_fee: "",
    type: "Biz",
    user_id: "",
    status: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    deleted_by: "",
    balance: "",
  },
];

export const getAccount = (id) => {
  let foundAccounts = accounts.filter((account)=> account.id === id) 
  return foundAccounts.length > 0 ? foundAccounts[0] : {
    type: "Not found"
  }
}