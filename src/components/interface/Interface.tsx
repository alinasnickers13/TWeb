
export interface Smartphone{
    smartphone_charact:{
        model : string;
        tip_baterie : string;
        capacitatea_bateriei : string;
        greutate : string;
        ram: string;
    }
}

export interface Smartphone_Base extends Smartphone {
    smartphone_charact_base:{
        memorie_interna : string;
        cpu : string;
    }
}