/**
 * para criar: name, email, password
 */
//export default function createUser(name='', email:string, password:string){ for default values
//Interfaces sao criadas para definir o formato de um objeto
interface TechObject{
    title:string;
    experience:number;
}

interface CreateUserData{ //criar uma desestruturação dos valores, para indicar quais sao eles
    name?: string; //? significa que é opcional
    email: string;
    password: string;
    techs: Array<string | TechObject>; //ou tech:strings[] quando for um tipo unico
}
export default function createUser({name='', email, password}:CreateUserData){
    const user = {
        name, 
        email,
        password
    }
    
    return user;
}
