function userReg(onSuccess, onError) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      onSuccess({
        msg: 'user registered',
        id: 1
      })
    } else {
      onError({
        msg: 'user not registered'
      })
    }
  }, 1000)
}


function userAuth(id, onSuccess, onError) {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      onSuccess({
        msg: `Auth res # id${id}`,
        token: 'kfjfirkf',
      })
    } else {
      onError({ msg: 'Auth error' })
    }
  })
}

function userDate(token, onSuccess, onError) {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      onSuccess({
        msg: `get token ${token}`,
        data: {
          id: 1,
          name: 'John',
        }
      })
    }
    else {
      onError({
        msg: 'Error in data'
      })
    }
  }, 3000)
}



userReg(
  (regRes) => {
    console.log(regRes)

    userAuth(
      regRes.id,
      (authRes) => {
        console.log('authRes: ', authRes)

        userDate(
          authRes.token,
          (dataRes) => {
            console.log(dataRes)
            console.log(dataRes.data)
          },
          (err) => console.log(err),
        )

      },
      (authError) => console.log(authError)
    )
  },
  (error) => console.log(error)
)

