const obtenerPokemons=async()=>{
//este metodo retorna el array de pokemons
//buena practica se exponga por medio de un metodo fachada ya que es mala practica obtener de una el método
/*
console.log(getNumeroAleatorio(1,600))
console.log(obtenerVectorNumerico())
obtenerNombresPokemon(obtenerVectorNumerico())
await consumirAPI(1)
console.log(obtenerNombresPokemon())
*/
console.log('Aleatorio')
const vectorObj=await obtenerNombresPokemon(obtenerVectorNumerico()) 
console.log(vectorObj)
return vectorObj;
}

function getNumeroAleatorio(min,max){
    //obtiene numeres randomicos en un rango 
    max++
    return Math.floor(Math.random()*(max-min)+min)
}

const obtenerVectorNumerico=()=>{
    const vector=[getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600)]
    return vector;
}



//si yo le consumo dentro de mis metodos 
 const consumirAPI=async(id)=>{
 const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result=>result.json())
 console.log(data.name)
 console.log(data.id)

 return data
}

//desustructarar apartir de un arrglo qu estamos recibiendo lo estamos desestructurando para poderlo utilziar
const obtenerNombresPokemon=async([id1,id2,id3,id4]=[])=>{
//si estoy consumineto la api debo poner el await
const data1=await consumirAPI(id1)
const data2=await consumirAPI(id2)
const data3=await consumirAPI(id3)
const data4=await consumirAPI(id4)

//imprime los objetos
console.log(data1.name)
console.log(data2.name)
console.log(data3.name)
console.log(data4.name)

//vamos a realizar un array de objetos contruyendo 4 objetos
const obj1={
    nombre:data1.name,
    id: data1.id
}
const obj2={
    nombre:data2.name,
    id: data2.id
}
const obj3={
    nombre:data3.name,
    id: data3.id
}
const obj4={
    nombre:data4.name,
    id: data4.id
}
//hacemos la contruccion de array objetos
const vectorObjetos=[obj1,obj2,obj3,obj4]


return vectorObjetos

}
/*
const obtenerNombresPokemon2=(arreglo)=>{
    id1=arreglo[0];

}
*/
const obtenerFachadaPokemons=async()=>{
    return await obtenerPokemons()
}


//para exportarlo o exponer debemos poner al final de mi archivo

export default obtenerFachadaPokemons