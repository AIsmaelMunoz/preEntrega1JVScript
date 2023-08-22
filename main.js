let carritoTotal = 0

function sumaTotal(precios){
    carritoTotal = carritoTotal + precios
    console.log('Totalen carrito $'+carritoTotal)
}

let idProducto = parseInt(prompt('Tienda A la Par\n1-Remera adidas. $20000\n2-Campera Nike. $40000\n3-Pantalon Puma. $35000\n4-Short Nike. $22000\n0-Para finalizar'))

while (idProducto !== 0) {
    switch(idProducto){
        case 1:
            alert('Sumaste Remera Adidas al carrito')
            sumaTotal(20000)
            break
        case 2:
            alert('Sumaste Campera Nike al carrito')
            sumaTotal(40000)
            break
        case 3:
            alert('Sumaste Pantalon Puma al carrito')
            sumaTotal(35000)
            break
        case 4:
            alert('Sumaste Short Nike al carrito')
            sumaTotal(22000)
            break
        default:
            alert('⛔El valor seleccionado no es válido')
            break    
    }
    idProducto = parseInt(prompt('Tienda A la Par\n1-Remera adidas. $20000\n2-Campera Nike. $40000\n3-Pantalon Puma. $35000\n4-Short Nike. $22000\n0-Para finalizar'))
}

alert('El total de su compre es de $'+carritoTotal)

