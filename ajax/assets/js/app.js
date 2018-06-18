//selecciono el boton a través de su clase css
const btn = document.querySelector("button");
//donde quiero que se impriman los elementos
const container = document.getElementById("root")
//variable con la ruta
const userJson = "data/cohorts/lim-2018-03-pre-core-pw/users.json"


/*las peticiones son asincronas, dependen de otras cosas (como el servidor), 
se espera a que llegue la llamada pero mientras el código se sigue ejecutando*/

fetch(userJson) //primer then es la respuesta que estoy esperando del url
.then(response => response.json()) //.json los transforma en un archivo json
.then(data => {
    console.log(data); //me llega una respuesta y la llamo data (es el nombre de lo que recibí)
    //console.log nos entrega la data que es un array, queremos recorrerla.
    renderUsers(data); //creo la funcion con data, el recorrido de los elementos
})
//creamos variable con una función, llamamos a la data como parámetro
//solo se ejecutara cuando se reciba la repuesta anterior
const renderUsers = data => {
    btn.addEventListener("click", () => {
            //recorro los elementos con un forEach
        const render = data.forEach(element => {
            //le digo que me imprima los elementos
            //me retorne en el container
            //+= lo concatatena, el igual lo sobreescribe
            return container.innerHTML += `<p>${element.name}</p>` 
            //destructuring, le digo que me escriba el element (variable que va uno por uno) .name (punto lo que quiero obtener del arreglo del data)
            // una nueva forma de llamar a un elemento, va con comillas al reves
        })
        return render;
         //retornamos la función conectada en el fetch, el data a recorrer
        })
    }
    
    
   
   