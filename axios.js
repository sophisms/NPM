const axios = require('axios')

const greet = name => 'Hola' + name;

//const users = () =>{
//  const res = axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
//  console.log(res)
//}

const users = async () =>{
  const res =await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
  //console.log(res)
  return res.data;
}

//users();

users()
.then(res => console.log(res))

//Exportar

module.exports = {
users,
greet
}