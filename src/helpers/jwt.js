const jwt = require('jsonwebtoken'); // importar libreria jwt

const JWTGenerator = (payload) => {

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, // son los datos que se incluirán en el token
            process.env.SECRET_KEY,
            { expiresIn: '2h'},
            (error, token) => {
                if (error) {
                    console.log(error)
                    reject('error')
                } else {
                    resolve(token)
                }
            }
        )
    })

}

module.exports = { JWTGenerator }