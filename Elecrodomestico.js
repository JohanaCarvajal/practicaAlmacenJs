
export default class Electrodomestico{
    
   
    constructor(procedencia, consumo) {
        this.procedencia = procedencia;
        this.consumo = consumo; 
        this.precio = 0.0;  
    } 
    
  

    calcularPrecio(){
        if(this.procedencia) {this.precio = this.precio + 250000;}
        else {this.precio = this.precio + 350000;}
        switch (this.consumo){
            case "A":
                this.precio = this.precio + 450000;
                break;
            case "B":
                this.precio = this.precio + 350000;
                break;
            case "C":
                this.precio = this.precio + 250000;
                break;
            default:
                console.log("Ingrese A,B o C");

        }
        return this.precio;
    }
     

}


