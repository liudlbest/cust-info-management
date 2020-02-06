module.exports = function() {
  let faker = require('faker');
  let data = { customers: [] };
  let CUST_STATUS = ["prospective", "current", "non-active"]
  for (let i = 0; i < 100; i++) {
    data.customers.push({
      id: faker.finance.account(),
      name: faker.name.firstName(),
      status: CUST_STATUS[faker.random.number()%3],
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      notes: [faker.company.companyName()]
    })
  }
  return data;
}