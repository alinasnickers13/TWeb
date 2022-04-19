import { getParent, getParentOfType, types } from 'mobx-state-tree'
import RootStore from './Root_store'


export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    seen: false,
    model: '',
    tip_baterie: '',
    capacitatea_bateriei: '',
    greutate: '',
    ram: '',
    memorie_interna: '',
    cpu: ''
})
    .views((self) => ({
        get isSeen() {
            return self.seen
        },

        findInTitle(param: any) {
            self.model.includes(param)
        }
    }))
    .actions((self) => ({
        changeMODEL(value: string) {
            self.model = value
        },
        changeTIP_BATERIE(value: string) {
            self.tip_baterie = value
        },
        changeCAPACITATEA_BATERIEI(value: string) {
            self.capacitatea_bateriei = value
        },
        changeGREUTATE(value: string) {
            self.greutate = value
        },
        changeRAM(value: string) {
            self.ram = value
        },
        changeMEMORIE_INTERNA(value: string) {
            self.memorie_interna = value
        },
        changeCPU(value: string) {
            self.cpu = value
        },

        changeSeen(state: boolean) {
            console.log('>>state', state)
            self.seen = state
        },

        addNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.addNote(self.id)
        },

        removeNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.removeNote(self.id)
        }

    }))


