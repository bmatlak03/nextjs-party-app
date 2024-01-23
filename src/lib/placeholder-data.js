const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const expenses = [
  {
    user_id: users[0].id,
    amount: 100,
    timestamp: new Date().toISOString(),
  },
];

module.exports = { users, expenses };
