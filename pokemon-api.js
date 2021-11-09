/**
 * async await
 */

const obtenerPokemons = async () => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await respuesta.json()
        
        datos.results.forEach(element => {
            console.log(element.name)
        });

        let arrayNombres = datos.results.map(pokemon => pokemon.name)
        arrayNombres.forEach(element => {
            console.log(element)
        });
    } catch (error) {
        console.log(error)
    }
}
obtenerPokemons()
