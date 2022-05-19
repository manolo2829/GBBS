
import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import jwt from "jsonwebtoken";



// Crear un registro


export const createUser = async(req, res) => {
    try {
        const password = req.body.password
        let passHash = await bcryptjs.hash(password, 8)
        await UserModel.create({
            email: req.body.email,
            username: req.body.username,
            password: passHash
        })

        res.json({
            'message':'¡Usuario creado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const login = async(req, res) => {

    try {
        
        const username = req.body.username
        const password = req.body.password

        console.log(`intentando logear a ${username} - ${password}`)

        if(!username || !password){
            res.json('¡no hay usuario!')
            console.log('¡no hay usuario!')
        }else{
            const user = await UserModel.findAll({
                where:{username:username}
            })
            if(user.length === 0 || !(await bcryptjs.compare(password, user[0].password))){
                res.json('¡nombre y/o contraseña incorrectos')
                console.log('¡nombre y/o contraseña incorrectos')
            }else{
                const id = user[0].id

                const token = jwt.sign({id:id}, 'super_secreto', {
                    expiresIn: '7d'
                })

                console.log('TOKEN: '+ token + ' para el usuario: '+username)

                const cookiesOptions = {
                    expires: new Date(Date.now()+ 90 * 24 * 60 * 60 * 1000 ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookiesOptions)
                res.json({
                    "message": 'usuario logeado',
                    "cookie": token, cookiesOptions
                })
                console.log('usuario logeado')
            }
            
        }

    } catch (error) {
        console.log(error)
        res.json(error)
        
    }
}