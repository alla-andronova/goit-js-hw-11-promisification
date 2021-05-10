// ==========================================================================================================================>>>>>>
// Напиши функцию delay(ms), которая возвращает промис, переходящий
// в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое
// передали во время вызова функции delay.

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      const logger = time => console.log(`Resolved after ${time}ms`);
      resolve(logger(ms));
    }, ms);
  });
};

// ==========================================================================================================================>>>>>>

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );

    resolve(updatedUsers);
  });
};
const logger = updatedUsers => console.table(updatedUsers);
/*
 * Должно работать так
 */
// toggleUserState(users, 'Mango').then(logger);

// ==========================================================================================================================>>>>>>

// Перепиши функцию makeTransaction() так, чтобы она не использовала
// callback - функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ transaction: transaction.id, delay: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ transaction, delay }) => {
  console.log(`Transaction ${transaction} processed in ${delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

//   Должно работать так

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

// ==========================================================================================================================>>>>>>
