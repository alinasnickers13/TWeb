import { IContentModel, Smartphone_Base } from "./interface/Interface";
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Button, Checkbox, Input } from 'antd'

export const Show_Smartphone_row = (props: Smartphone_Base) => {
    return(
        <tr>
            <td>{ props.smartphone_charact.model }</td>
            <td>{ props.smartphone_charact.tip_baterie }</td>
            <td>{ props.smartphone_charact.capacitatea_bateriei }</td>
            <td>{ props.smartphone_charact.greutate }</td>
            <td>{ props.smartphone_charact.ram }</td>
            <td>{ props.smartphone_charact_base.memorie_interna }</td>
            <td>{ props.smartphone_charact_base.cpu }</td>
        </tr>
    );
}

export const Edit_form_show = observer(({ content }: { content: IContentModel }) => {

    const { model, changeMODEL, tip_baterie, changeTIP_BATERIE, capacitatea_bateriei, changeCAPACITATEA_BATERIEI, greutate, changeGREUTATE, ram, changeRAM, memorie_interna, changeMEMORIE_INTERNA, cpu, changeCPU, isSeen, changeSeen, seen, addNote, removeNote } = content


    useEffect(() => {
        if (isSeen) {
            // alert(`Is seen ${ title }`)
            console.log('>>title', model)
        }
    }, [ isSeen ])

    return (
        <Card title={ model } bordered={ false }>
           

           <Input
                value={ model }
                placeholder={ model }
                onChange={ (e) => changeMODEL(e.target.value) }
            />
            <Input
                value={ tip_baterie }
                placeholder={ tip_baterie }
                onChange={ (e) => changeTIP_BATERIE(e.target.value) }
            />
            <Input
                value={ capacitatea_bateriei }
                placeholder={ capacitatea_bateriei }
                onChange={ (e) => changeCAPACITATEA_BATERIEI(e.target.value) }
            />
            <Input
                value={ greutate }
                placeholder={ greutate }
                onChange={ (e) => changeGREUTATE(e.target.value) }
            />
            <Input
                value={ ram }
                placeholder={ ram }
                onChange={ (e) => changeRAM(e.target.value) }
            />
            <Input
                value={ memorie_interna }
                placeholder={ memorie_interna }
                onChange={ (e) => changeMEMORIE_INTERNA(e.target.value) }
            />
            <Input
                value={ cpu }
                placeholder={ cpu }
                onChange={ (e) => changeCPU(e.target.value) }
            />

            <Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />
            <Button onClick={ addNote }>Add</Button>
            <Button type={ 'primary' } onClick={ removeNote }>Remove</Button>

        </Card>
    )

})