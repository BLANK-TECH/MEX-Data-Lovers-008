window.pokemon = {

// FUNCION QUE ORDENA 
   ordenar : (data,propiedad,orden) => {
    let resultado = {};
    if(orden === "ascendente" || orden === "numAscendente") {
    resultado = data.sort((a,b) => (a[propiedad] > b[propiedad] ? 1 : -1));
    } 
    else if(orden === "descendente" || orden === "numDescendente") {
    resultado = data.sort ((a,b) => (a[propiedad] > b[propiedad] ? -1 : 1));
    }
    return resultado;
},

//Funcion que filtra por tipo
filterByType : (data,condicion) => {
  let filtro = data.filter(pokemon => {
    for( let i = 0; i < pokemon.type.length; i++){
      if (pokemon.type[i] === condicion){
        return true;
      }
    }
    return false;
  });
  return filtro;
},

//Funcion que filtra por debilidad

filterByWeaknesses : (data,condicion) => {
  let filtro = data.filter(pokemon => {
    return pokemon.weaknesses.find((arr) => arr === condicion);
      });
      return filtro;
    },     


//Funcion datos curiosos
estadistica : (data,propiedad) => {
  //el mas pesado y el mas alto
  if(propiedad === "weight" || propiedad === 'height'){
    let result = data.sort((a, b) => (parseFloat(b[propiedad]) < parseFloat(a[propiedad]) ? -1 : 1));
            let primero = result[0];
            return primero;
  }
  //promedio de candy_count para evolucionar
  else if(propiedad === "candy_count"){
       let result = data.reduce((total,item)=>{
         if (item.hasOwnProperty('candy_count')){
          return total + item.candy_count;
         }
          return  total + 0;
        },0);
        result = Math.floor(result/data.length);
        return result;
    }
  }
};


// window.ordenar= ordenar;
// window.filterByType = filterByType;
// window.filterByWeaknesses = filterByWeaknesses;
// window.estadistica = estadistica;