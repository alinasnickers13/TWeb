import RootStore from "./Root_store"


const storeProvider = RootStore.create({
    contents: [
            {
            id: '1',
            seen: false,
            model: 'MODEL_1',
            tip_baterie: 'TIP_BATERIE_1',
            capacitatea_bateriei: 'CAPACITATEA_BATERIEI_1',
            greutate: 'GREUTATE_1',
            ram: 'RAM_1',
            memorie_interna: 'MEMORIE_INTERNA_1',
            cpu: 'CPU_1',
            },
            {
            id: '2',
            seen: false,
            model: 'MODEL_2',
            tip_baterie: 'TIP_BATERIE_2',
            capacitatea_bateriei: 'CAPACITATEA_BATERIEI_2',
            greutate: 'GREUTATE_2',
            ram: 'RAM_2',
            memorie_interna: 'MEMORIE_INTERNA_2',
            cpu: 'CPU_2',
            },
            {
            id: '3',
            seen: false,
            model: 'MODEL_3',
            tip_baterie: 'TIP_BATERIE_3',
            capacitatea_bateriei: 'CAPACITATEA_BATERIEI_3',
            greutate: 'GREUTATE_3',
            ram: 'RAM_3',
            memorie_interna: 'MEMORIE_INTERNA_3',
            cpu: 'CPU_3',
            },
            {
            id: '4',
            seen: false,
            model: 'MODEL_4',
            tip_baterie: 'TIP_BATERIE_4',
            capacitatea_bateriei: 'CAPACITATEA_BATERIEI_4',
            greutate: 'GREUTATE_4',
            ram: 'RAM_4',
            memorie_interna: 'MEMORIE_INTERNA_4',
            cpu: 'CPU_4',
            }
    ]
})

export default storeProvider