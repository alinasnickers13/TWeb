import { Instance } from 'mobx-state-tree'
import { ContentModel } from '../store/Model_Content';
import RootStore from '../store/Root_store';

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

export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}