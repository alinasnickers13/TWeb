import { Smartphone_Base } from "./interface/Interface";

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