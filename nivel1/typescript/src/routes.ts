import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request:Request, response:Response){
    //const user = createUser('Ricardo', 'ricardo.kenzo@hotmail.com', '1234) //para dados nao desestruturados
    const user = createUser({
        email:'ricardo.kenzo@hotmail.com',
        password:'1234',
        techs:[
            'Node.js', 
            'ReactJS', 
            'React Native',
            {title: 'Javascript', experience: 100}
        ],
    })

    return response.json({message: 'Hello World'});
}