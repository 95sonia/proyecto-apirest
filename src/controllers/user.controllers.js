const User = require('../models/user.model')
const { JWTGenerator } = require('../helpers/jwt')
const bcrypt = require('bcryptjs')

// FUNCION CREAR USUARIO NUEVO
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //console.log(name, email, password)
        // hay que verificar si existe el user
        const existe = await User.findOne({ email })
        //console.log(existe)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = {
            name,
            email,
            password: hashedPassword
        }

        const user = new User(newUser)
        const savedUser = await user.save()
        console.log(savedUser)

        const payload = {
            uid: savedUser._id,
            role: savedUser.role
        }

        const token = await JWTGenerator(payload)

        //console.log({ token })

        return res.status(200).json({
            ok: true,
            msg: 'Usuario creado correctamente',
            user: savedUser,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        })
    }
}

// FUNCIÓN LOGIN

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const existeUser = await User.findOne({ email })
        //console.log(existeUser)
        //comprobar si existe user con ese email
        // Si no existe retornar error 400 = Bad request
        if (!existeUser) {
            return res.status(400).json({
                ok: false,
                msg: 'No hay usuario con ese email',
            })
        }
        // comparar que las contraseñas coinciden
        //si no coinciden retornar error 400 = Bad request
        const passwordOk = bcrypt.compareSync(password, existeUser.password)
        if (!passwordOk) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es válida',
            })
        }

        // Definir Payload para el Token
        const payload = {
            uid: existeUser._id,
            role: existeUser.role
        }
        //Generar el token
        const token = await JWTGenerator(payload)

        //crear un objeto user para la respuesta
        const user = {
            name: existeUser.name,
            email: email,
            uid: existeUser._id
        }
        console.log(user)
        
        //Retornar respuesta exitosa
        return res.status(200).json({
            ok: true,
            msg: 'login de usuario',
            user: user,
            token: token
        })

        // capturar y manejar el error con catch
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        })
    }
}


/*
const renewToken= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
*/

module.exports = {
    createUser,
    loginUser
    // renewToken
}



