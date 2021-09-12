const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    
    return new Promise((resolve, reject) => {
        if (allUsers && userName) {
            resolve(allUsers.map(user => user.name === userName ? { ...user, active: !user.active } : user));
        }
        reject('enter data')
    });
};

const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(logger).catch(value => console.error(value));
toggleUserState(users, 'Lux').then(logger).catch(value => console.error(value));

