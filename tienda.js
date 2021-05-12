let procesadores = [
    {
        producto: "Micro",
        tipo: "i3",
        frecuencia: "2",
        precio: "100"
    },
    {
        producto: "Micro",
        tipo: "i5",
        frecuencia: "2,5",
        precio: "200"
    },
    {
        producto: "Micro",
        tipo: "i7",
        frecuencia: "3",
        precio: "250"
    }
];
let memorias = [
    {
        producto: "Ram",
        tipo: "LG",
        frecuencia: "2200",
        espacio: "4",
        precio: "70"
    },
    {
        producto: "Ram",
        tipo: "Samsung",
        frecuencia: "2600",
        espacio: "8",
        precio: "120"
    },
    {
        producto: "Ram",
        tipo: "Sony",
        frecuencia: "2800",
        espacio: "16",
        precio: "240"
    }
];
let discos = [
    {
        producto: "Disco",
        tipo: "Seagate",
        frecuencia: "1024",
        precio: "70"
    },
    {
        producto: "Disco",
        tipo: "Hitachi",
        frecuencia: "2048",
        precio: "120"
    },
    {
        producto: "Disco",
        tipo: "Western-Digital",
        frecuencia: "3072",
        precio: "140"
    }
];

let selectMicros = document.getElementById("micro");
let selectMemorias = document.getElementById("ram");
let selectDiscos = document.getElementById("hdd");

let microAlmacenado = [];
let ramAlmacenada = [];
let hddAlmacenado = [];
let almacen = [];

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
    document.getElementById("frecuencyRam").innerHTML = procesadores[0].frecuencia;
    document.getElementById("priceRam").innerHTML = procesadores[0].precio + " €";
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
    almacen.push(microAlmacenado);
    pintarCarrito();
}
function addRam() {
    almacen.push(ramAlmacenada);
    pintarCarrito();
}
function addHDD() {
    almacen.push(hddAlmacenado);
    pintarCarrito();
}
function pintarCarrito() {
    document.getElementById("resumenProducts").innerHTML = "";
    let precioTotal = 0;
    for (let i = 0; i < almacen.length; i++) {
        document.getElementById("resumenProducts").innerHTML +=
            `<tr>
        <td class="pt-3">${almacen[i].producto}</td>
        <td class="pt-3">${almacen[i].tipo}</td>
        <td class="pt-3">${almacen[i].precio}</td>
        <td><button type="button" class="btn btn-danger" id="${i}" onclick="borrarRegistro()">Eliminar</button></td>
        </tr>
        `
    precioTotal = parseFloat(precioTotal) + parseFloat(almacen[i].precio);
    }
    document.getElementById("resumenPrecio").innerHTML = precioTotal + " €";
}

function borrarRegistro(){
    
}