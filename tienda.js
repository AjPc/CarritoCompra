let procesadores = [
    {
        id: "mic1",
        producto: "Micro",
        tipo: "i3",
        cantidad: "1",
        frecuencia: "2",
        precio: "100",
    },
    {
        id: "mic2",
        producto: "Micro",
        tipo: "i5",
        cantidad: "1",
        frecuencia: "2,5",
        precio: "200",
    },
    {
        id: "mic3",
        producto: "Micro",
        tipo: "i7",
        cantidad: "1",
        frecuencia: "3",
        precio: "250",
    }
];
let memorias = [
    {
        id: "ram1",
        producto: "Ram",
        tipo: "LG",
        frecuencia: "2200",
        cantidad: "1",
        espacio: "4",
        precio: "70",
    },
    {
        id: "ram2",
        producto: "Ram",
        tipo: "Samsung",
        frecuencia: "2600",
        cantidad: "1",
        espacio: "8",
        precio: "120",
    },
    {
        id: "ram3",
        producto: "Ram",
        tipo: "Sony",
        frecuencia: "2800",
        cantidad: "1",
        espacio: "16",
        precio: "140",
    }
];
let discos = [
    {
        id: "hdd1",
        producto: "Disco",
        tipo: "Seagate",
        cantidad: "1",
        frecuencia: "1024",
        precio: "70",
    },
    {
        id: "hdd2",
        producto: "Disco",
        tipo: "Hitachi",
        cantidad: "1",
        frecuencia: "2048",
        precio: "120",
    },
    {
        id: "hdd3",
        producto: "Disco",
        tipo: "Western-Digital",
        cantidad: "1",
        frecuencia: "3072",
        precio: "140",
    }
];

let selectMicros = document.getElementById("micro");
let selectMemorias = document.getElementById("ram");
let selectDiscos = document.getElementById("hdd");

let microAlmacenado = [];
let ramAlmacenada = [];
let hddAlmacenado = [];
let almacen = [];

let visa = document.getElementById("visa");
let paypal = document.getElementById("paypal");
let transfe = document.getElementById("transfe");

window.onload = () => {
    pintarDatos();
}
function pintarDatos() {
    for (let i = 0; i < procesadores.length; i++) {
        selectMicros.innerHTML += `<option value="${procesadores[i].tipo}">${procesadores[i].tipo}</option>`;
    }
    for (let i = 0; i < memorias.length; i++) {
        selectMemorias.innerHTML += `<option value="${memorias[i].tipo}">${memorias[i].tipo}</option>`;
    }
    for (let i = 0; i < discos.length; i++) {
        selectDiscos.innerHTML += `<option value="${discos[i].tipo}">${discos[i].tipo}</option>`;
    }
    document.getElementById("frecuencyMicro").innerHTML = procesadores[0].frecuencia;
    document.getElementById("priceMicro").innerHTML = procesadores[0].precio + " €";
    microAlmacenado = procesadores[0];
    document.getElementById("frecuencyRam").innerHTML = memorias[0].frecuencia;
    document.getElementById("priceRam").innerHTML = memorias[0].precio + " €";
    ramAlmacenada = memorias[0];
    document.getElementById("frecuencyHdd").innerHTML = discos[0].frecuencia;
    document.getElementById("priceHdd").innerHTML = discos[0].precio + " €";
    hddAlmacenado = discos[0];
}
function getMicro() {
    let micro1 = "";
    let micro2 = "";
    let micro3 = "";

    for (let i = 0; i < procesadores.length; i++) {
        if (procesadores[i].tipo == "i3") { micro1 = "i3" };
        if (procesadores[i].tipo == "i5") { micro2 = "i5" };
        if (procesadores[i].tipo == "i7") { micro3 = "i7" };
    }
    if (selectMicros.value == micro1) {
        document.getElementById("frecuencyMicro").innerHTML = procesadores[0].frecuencia;
        document.getElementById("priceMicro").innerHTML = procesadores[0].precio + " €";
        microAlmacenado = procesadores[0];
    }
    if (selectMicros.value == micro2) {
        document.getElementById("frecuencyMicro").innerHTML = procesadores[1].frecuencia;
        document.getElementById("priceMicro").innerHTML = procesadores[1].precio + " €";
        microAlmacenado = procesadores[1];
    }
    if (selectMicros.value == micro3) {
        document.getElementById("frecuencyMicro").innerHTML = procesadores[2].frecuencia;
        document.getElementById("priceMicro").innerHTML = procesadores[2].precio + " €";
        microAlmacenado = procesadores[2];
    }
}
function getRam() {
    let ram1 = "";
    let ram2 = "";
    let ram3 = "";

    for (let i = 0; i < memorias.length; i++) {
        if (memorias[i].tipo == "LG") { ram1 = "LG" };
        if (memorias[i].tipo == "Samsung") { ram2 = "Samsung" };
        if (memorias[i].tipo == "Sony") { ram3 = "Sony" };
    }
    if (selectMemorias.value == ram1) {
        document.getElementById("frecuencyRam").innerHTML = memorias[0].frecuencia + " / " + memorias[0].espacio;
        document.getElementById("priceRam").innerHTML = memorias[0].precio + " €";
        ramAlmacenada = memorias[0];
    }
    if (selectMemorias.value == ram2) {
        document.getElementById("frecuencyRam").innerHTML = memorias[1].frecuencia + " / " + memorias[1].espacio;
        document.getElementById("priceRam").innerHTML = memorias[1].precio + " €";
        ramAlmacenada = memorias[1];
    }
    if (selectMemorias.value == ram3) {
        document.getElementById("frecuencyRam").innerHTML = memorias[2].frecuencia + " / " + memorias[2].espacio;
        document.getElementById("priceRam").innerHTML = memorias[2].precio + " €";
        ramAlmacenada = memorias[2];
    }
}
function getHDD() {
    let hdd1 = "";
    let hhd2 = "";
    let hhd3 = "";

    for (let i = 0; i < discos.length; i++) {
        if (discos[i].tipo == "Seagate") { hdd1 = "Seagate" };
        if (discos[i].tipo == "Hitachi") { hhd2 = "Hitachi" };
        if (discos[i].tipo == "Western-Digital") { hhd3 = "Western-Digital" };
    }
    if (selectDiscos.value == hdd1) {
        document.getElementById("frecuencyHdd").innerHTML = discos[0].frecuencia;
        document.getElementById("priceHdd").innerHTML = discos[0].precio + " €";
        hddAlmacenado = discos[0];
    }
    if (selectDiscos.value == hhd2) {
        document.getElementById("frecuencyHdd").innerHTML = discos[1].frecuencia;
        document.getElementById("priceHdd").innerHTML = discos[1].precio + " €";
        hddAlmacenado = discos[1];
    }
    if (selectDiscos.value == hhd3) {
        document.getElementById("frecuencyHdd").innerHTML = discos[2].frecuencia;
        document.getElementById("priceHdd").innerHTML = discos[2].precio + " €";
        hddAlmacenado = discos[2];
    }
}
function addMicro() {
    let i3Obj = almacen.findIndex(almacen => almacen.tipo === "i3");
    let i5Obj = almacen.findIndex(almacen => almacen.tipo === "i5");
    let i7Obj = almacen.findIndex(almacen => almacen.tipo === "i7");

    if (i3Obj != -1 && microAlmacenado.id == "mic1") {
        almacen[i3Obj].cantidad = parseInt(almacen[i3Obj].cantidad) + 1;
        almacen[i3Obj].precio = parseInt(almacen[i3Obj].precio) + 100;

    } else if (i5Obj != -1 && microAlmacenado.id == "mic2") {
        almacen[i5Obj].cantidad = parseInt(almacen[i5Obj].cantidad) + 1;
        almacen[i5Obj].precio = parseInt(almacen[i5Obj].precio) + 200;

    } else if (i7Obj != -1 && microAlmacenado.id == "mic3") {
        almacen[i7Obj].cantidad = parseInt(almacen[i7Obj].cantidad) + 1;
        almacen[i7Obj].precio = parseInt(almacen[i7Obj].precio) + 250;
    }
    else {
        almacen.push(microAlmacenado);
    }
    pintarCarrito();
}
function addRam() {
    let ram1Obj = almacen.findIndex(almacen => almacen.tipo === "LG");
    let ram2Obj = almacen.findIndex(almacen => almacen.tipo === "Samsung");
    let ram3Obj = almacen.findIndex(almacen => almacen.tipo === "Sony");

    if (ram1Obj != -1 && ramAlmacenada.id == "ram1") {
        almacen[ram1Obj].cantidad = parseInt(almacen[ram1Obj].cantidad) + 1;
        almacen[ram1Obj].precio = parseInt(almacen[ram1Obj].precio) + 70;

    } else if (ram2Obj != -1 && ramAlmacenada.id == "ram2") {
        almacen[ram2Obj].cantidad = parseInt(almacen[ram2Obj].cantidad) + 1;
        almacen[ram2Obj].precio = parseInt(almacen[ram2Obj].precio) + 120;

    } else if (ram3Obj != -1 && ramAlmacenada.id == "ram3") {
        almacen[ram3Obj].cantidad = parseInt(almacen[ram3Obj].cantidad) + 1;
        almacen[ram3Obj].precio = parseInt(almacen[ram3Obj].precio) + 140;
    }
    else {
        almacen.push(ramAlmacenada);
    }
    pintarCarrito();
}
function addHDD() {
    let hdd1Obj = almacen.findIndex(almacen => almacen.tipo === "Seagate");
    let hdd2Obj = almacen.findIndex(almacen => almacen.tipo === "Hitachi");
    let hdd3Obj = almacen.findIndex(almacen => almacen.tipo === "Western-Digital");

    if (hdd1Obj != -1 && hddAlmacenado.id == "hdd1") {
        almacen[hdd1Obj].cantidad = parseInt(almacen[hdd1Obj].cantidad) + 1;
        almacen[hdd1Obj].precio = parseInt(almacen[hdd1Obj].precio) + 70;

    } else if (hdd2Obj != -1 && hddAlmacenado.id == "hdd2") {
        almacen[hdd2Obj].cantidad = parseInt(almacen[hdd2Obj].cantidad) + 1;
        almacen[hdd2Obj].precio = parseInt(almacen[hdd2Obj].precio) + 120;

    } else if (hdd3Obj != -1 && hddAlmacenado.id == "hdd3") {
        almacen[hdd3Obj].cantidad = parseInt(almacen[hdd3Obj].cantidad) + 1;
        almacen[hdd3Obj].precio = parseInt(almacen[hdd3Obj].precio) + 140;
    }
    else {
        almacen.push(hddAlmacenado);
    }
    pintarCarrito();
}

let precioTotal2 = 0;
let comision = 0;

function pintarCarrito() {
    let precioTotal = 0;
    document.getElementById("resumenProducts").innerHTML = "";
    for (let i = 0; i < almacen.length; i++) {
        document.getElementById("resumenProducts").innerHTML +=
        `<tr>
            <td class="pt-3">${almacen[i].producto}</td>
            <td class="pt-3">${almacen[i].tipo}</td>
            <td class="pt-3">${almacen[i].cantidad}</td>
            <td class="pt-3">${almacen[i].precio}</td>
            <td><button type="button" class="btn btn-danger" id="${almacen[i].id}" onclick="borrarRegistro()">Eliminar</button></td>
        </tr>
        `
        precioTotal = parseFloat(precioTotal) + parseFloat(almacen[i].precio);
        precioTotal2 = precioTotal;
    }
    document.getElementById("resumenPrecio").innerHTML = precioTotal + " €";
    document.getElementById("sumaProductos").innerHTML = precioTotal + " €";

    if (visa.checked) {
        comision = (parseFloat(precioTotal) * parseFloat(8.50)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Tarjeta Crédito";
        document.getElementById("sumaComisiones").innerHTML = "8,50 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal + " €";
    };

    if (paypal.checked) {
        comision = (parseFloat(precioTotal) * parseFloat(5.50)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Paypal";
        document.getElementById("sumaComisiones").innerHTML = "5,50 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal + " €";
    };

    if (transfe.checked) {
        comision = (parseFloat(precioTotal) * parseFloat(7)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Transferencia";
        document.getElementById("sumaComisiones").innerHTML = "7,00 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal + " €";
    }
}

visa.addEventListener("change", function () {
    if (this.checked) {
        comision = (parseFloat(precioTotal2) * parseFloat(8.50)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Tarjeta Crédito";
        document.getElementById("sumaComisiones").innerHTML = "8,50 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal2 + " €";
    }
});
paypal.addEventListener("change", function () {
    if (this.checked) {
        comision = (parseFloat(precioTotal2) * parseFloat(5.50)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Paypal";
        document.getElementById("sumaComisiones").innerHTML = "5,50 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal2 + " €";
    }
});
transfe.addEventListener("change", function () {
    if (this.checked) {
        comision = (parseFloat(precioTotal2) * parseFloat(7)) / 100;
        document.getElementById("metodoElegido").innerHTML = "Transferencia";
        document.getElementById("sumaComisiones").innerHTML = "7,00 %";
        document.getElementById("sumaTotal").innerHTML = comision + precioTotal2 + " €";
    }
});

// function gestionarMetodosDePago(paramPayMethod) {
//     if (paramPayMethod == "paypal") {
//         let metodoElegido = "Paypal";
//         let comisiones = "7,00 %";
//         let comisionesRaw = 7;
//     } else if (paramPayMethod == "visa") {
//         let metodoElegido = "Tarjeta Crédito";
//         let comisiones = "8,50 %";
//         let comisionesRaw = 8.5;
//     } else if (paramPayMethod == "transfe") {
//         let metodoElegido = "Transferencia";
//         let comisiones = "5,50 %";
//         let comisionesRaw = 5.5;
//     }

//     comision = (parseFloat(precioTotal2) * parseFloat(comisionesRaw)) / 100;
//     document.getElementById("metodoElegido").innerHTML = metodoElegido;
//     document.getElementById("sumaComisiones").innerHTML = comisiones;
//     document.getElementById("sumaTotal").innerHTML = comision + precioTotal2 + " €";
// }

function borrarRegistro() {
    for (let item in almacen) {
        if (event.target.id == almacen[item].id) {
            almacen[item].cantidad = parseInt(almacen[item].cantidad) - 1;

            if (almacen[item].id == "mic1") {
                almacen[item].precio = parseInt(almacen[item].precio) - 100;
            } else if (almacen[item].id == "mic2") {
                almacen[item].precio = parseInt(almacen[item].precio) - 200;
            } else if (almacen[item].id == "mic3") {
                almacen[item].precio = parseInt(almacen[item].precio) - 250;
            } else if (almacen[item].id == "ram1" || almacen[item].id == "hdd1") {
                almacen[item].precio = parseInt(almacen[item].precio) - 70;
            } else if (almacen[item].id == "ram2" || almacen[item].id == "hdd2") {
                almacen[item].precio = parseInt(almacen[item].precio) - 120;
            } else if (almacen[item].id == "ram3" || almacen[item].id == "hdd3") {
                almacen[item].precio = parseInt(almacen[item].precio) - 140;
            }

            if (almacen[item].cantidad < 1) {
                let busqueda = almacen[item].tipo;
                let indice = almacen.findIndex((objeto) => objeto.tipo === busqueda);
                almacen.splice(indice, 1);
            }
        }
    };
    pintarCarrito();
}