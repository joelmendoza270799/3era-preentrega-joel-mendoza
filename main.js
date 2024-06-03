const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this. stock = stock
}

let producto1 = new Producto ("lenovo",1500000,16)
let producto2 = new Producto ("iPhone 15", 2000000 ,10)
let producto3 = new Producto ("motorola", 750000, 22)
let producto4 = new Producto ("xiaomi", 980000,13)
let lista = [producto1,producto2,producto3,producto4]


function filtrarProductos(){

    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value

    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter( (producto)=>producto.nombre.toUpperCase().includes(palabraClave) )

    if(resultado.length  >0){
        const container = document.createElement("div")
        
        resultado.forEach(  (producto) =>{
            const card  = document.createElement("div")

            const nombre = document.createElement("h2")
            nombre.textContent= producto.nombre
            card.appendChild(nombre)

            const precio = document.createElement("p")
            precio.innerHTML= `Precio : ${producto.precio}`
            card.appendChild(precio)
            
            const stock = document.createElement("p")
            stock.innerHTML= `Stock: ${producto.stock}`
            card.appendChild(stock)
            

            container.appendChild(card)
        })
    
        body.appendChild(container)

    }else{
        alert("no se encontro nada")
    }
}


function agregarProducto(){
    const form = document.createElement("form")
    form.innerHTML = `
        <label for="nombre-input">Nombre:</label>
        <input id="nombre-input" type="text" required>

        <label for="precio-input">Precio:</label>
        <input id="precio-input" type="number"  step= "0.01" required>

        <label for="stock-input">Stock:</label>
        <input id="stock-input" type="number"  step= "1" required>


        <button type = "submit">Agregar</button>
    `

    form.addEventListener("submit",function(event){
        event.preventDefault()
        const nombreInput= document.getElementById("nombre-input").value.trim()
        const precioInput= parseFloat(document.getElementById("precio-input").value.trim())
        const stockInput= parseInt(document.getElementById("stock-input").value.trim())
        if(isNaN(precioInput)|| isNaN(stockInput)|| nombreInput ==""){
            alert("porfavor ingresa valores validos")
            return;
        }
    
    
        const producto = new Producto (nombreInput,precioInput,stockInput)
        if(lista.some( (elemento)=>elemento.nombre === producto.nombre )){
            alert("el producto ya esta en la lista")
            return;
        }
    
        lista.push(producto)
        console.table(lista)

        const container =document.createElement("div")
        lista.forEach( (producto)=>{

            const card =document.createElement("div")


            const nombre = document.createElement("h2")
            nombre.textContent= producto.nombre
            card.appendChild(nombre)

            const precio = document.createElement("p")
            precio.innerHTML= `Precio : ${producto.precio}`
            card.appendChild(precio)
            
            const stock = document.createElement("p")
            stock.innerHTML= `Stock: ${producto.stock}`
            card.appendChild(stock)

            container.appendChild(card)

        } )


        const body = document.createAttribute.querySelector("body")
        body.appendChild(container);

        form.reset()
    })

    const body = document.querySelector("body")
    body.appendChild(form);

}






let btnGuardar = document.getElementById("buscar")
btnGuardar.addEventListener("click", filtrarProductos)
let btnAgregar = document.getElementById("agregar")
btnAgregar.addEventListener("click",agregarProducto)