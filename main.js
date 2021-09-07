var inventario = [];
var tipo, cantidad, consumo, procedencia;


function ingresarInventario(){

    while (true){
        var option = prompt (" 1. Ingresar inventario\n" +
                             " 2. Facturar productos\n" +
                             " 3. Salir "
                    );
        console.log(option);
            switch (option){
                case 1: 
                    inventario.push([ tipo= prompt ("Ingrese el electrodoméstico: nevera o Televisor"),
                                cantidad = prompt ("ingrese la cantidad"),
                                consumo = prompt ("ingrese el tipo de consumo A, B o C"),
                                procedencia = prompt ("ingrese si es nacional o internacional"),
                ]);
                    var inventarioToString = JSON.stringify(Object.assign([],inventario));
                    var inventarioObject = JSON.parseInt(inventarioToString);
                    console.log (inventarioObject);

        case 2:            
        case 0:
        default:
            prompt ("La opción ingresada es inválida");
    }                
}
}