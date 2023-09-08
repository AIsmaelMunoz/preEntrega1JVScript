//let carritoTotal = 0

let mostrarRemOPant = parseInt(prompt('Que desea ver?\n1-Remeras\n2-Pantalones\n0-Salir'))


/*function sumaTotal(precios){
    carritoTotal = carritoTotal + precios
    console.log('Total en carrito $'+carritoTotal)
}*/

function filtrarPorMarca(productos, marca) {
    const productosFiltrados = productos.filter((producto) => producto.marca === marca);
    return productosFiltrados;
}

const marcaDeseada = prompt('Ingrese la marca que desea filtrar:');
const productosFiltrados = filtrarPorMarca(remeras, marcaDeseada);

if (productosFiltrados.length === 0) {
    console.log(`No se encontraron productos de la marca ${marcaDeseada}.`);
} else {
    console.table(productosFiltrados);
}

while(mostrarRemOPant){

    switch(mostrarRemOPant){
        case 1: console.table(remeras)
        break;
        case 2: console.table(pantalones)
        break;
        default:
            console.log('⛔Opcion incorrecta, vuelva a intentar')
    }
    mostrarRemOPant = parseInt(prompt('Que desea ver?\n1-Remeras\n2-Pantalones\n0-Salir'))
}





//alert('El total de su compra es de $'+carritoTotal)




