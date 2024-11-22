let timeout = (ms) => new Promise(r => setTimeout(r, ms))
let _throw = (m) => {
  throw new Error(m)
}
async function userReg() {
  await timeout(1000)

  return Math.random() > 0.2
    ? {
      msg: 'user registered',
      id: 1
    }
    : _throw('user not registered')
}

async function userAuth(id) {
  await timeout(1000)

  return Math.random() > 0.2
    ? {
      msg: `Auth res # id${id}`,
      token: 'kfjfirkf',
    }
    : _throw('Auth error')
}


async function userDate(token) {
  await timeout(1000)

  return Math.random() > 0.2
    ? {
      msg: `get token ${token}`,
      data: {
        id: 1,
        name: 'John',
      }
    }
    : _throw('Error in data')
}

async function userProcess() {
  const regRes = await userReg()
  const authRes = await userAuth(regRes)
  const dataRes = await userDate(authRes.token)
  return dataRes
}

userProcess().then(console.log).catch(console.error)



