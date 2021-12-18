class Cliente {
    constructor (nombre, impuesto){
        this.nombre = nombre;
        this.impuesto = impuesto;
    
    }

    getnombre(){
        return this.nombre
    }
    
    set_nombre(nombre){
        return this.nombre = nombre;
    }
    
    // metodo para calcular el impuesto
    calcularImpuesto() {
        const monto_bruto_anual = this.impuesto.get_monto_bruto_anual();
        const deducciones = this.impuesto.get_deducciones();
        return (monto_bruto_anual - deducciones) * 21/100;
    }
}



class Impuesto {
    constructor (_monto_bruto_anual, _deducciones){
        this.monto_bruto_anual = _monto_bruto_anual;
        this.deducciones = _deducciones;

    }
    //metodo getter y setter
    get_monto_bruto_anual(){
        return this.monto_bruto_anual;
    }
    setmonto_bruto_anual(nuevo_monto_bruto_anual){
        this.monto_bruto_anual = nuevo_monto_bruto_anual
    }
    get_deducciones(){
        // acá falta
        return this.deducciones
    
    
    }
    set_deducciones(nuevas_deducciones){
        this.deducciones = nuevas_deducciones;    
    }
}

// Ahora vamos a crear un impuesto y un cliente
const iva = new Impuesto(6000000,400000);
const juan = new Cliente('juan', iva);

console.log(juan.calcularImpuesto ());