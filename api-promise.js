function userReg() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({
          msg: 'user registered',
          id: 1
        })
      } else {
        reject({
          msg: 'user not registered'
        })
      }
    }, 1000)
  })
}


function userAuth(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve({
          msg: `Auth res # id${id}`,
          token: 'kfjfirkf',
        })
      } else {
        reject({ msg: 'Auth error' })
      }
    })
  })
}

function userDate(token) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve({
          msg: `get token ${token}`,
          data: {
            id: 1,
            name: 'John',
          }
        })
      }
      else {
        reject({
          msg: 'Error in data'
        })
      }
    }, 3000)
  })
}

userReg()
  .then((regRes) => {
    console.log('regRes: ', regRes)
    return userAuth(regRes.id)
  })
  .then((authRes) => {
    console.log('authRes: ', authRes);
    return userDate(authRes.token)
  })
  .then((dataRes) => {
    console.log('dataRes: ', dataRes);
    console.log('dataRes: ', dataRes.data);

  })
  .catch((err) => {
    console.log('err: ', err);
  })



