import { Row } from "antd"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useRootStore } from "../.."
import { IContentModel } from "../interface/Interface"
import { Edit_form_show, Show_Smartphone_row } from "../show_Smartphone_row"

export const Show_Table_Menu = observer(() => {
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])
    return (
        <>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                <th>MODEL</th>
                                <th>TIP_BATERIE</th>
                                <th>CAPACITATEA_BATERIEI</th>
                                <th>GREUTATE</th>
                                <th>RAM</th>
                                <th>MEMORIE_INTERNA</th>
                                <th>CPU</th>
                                </tr>
                            </thead>

                            <tbody> 
                            {
                                contents_notes.map((content: IContentModel) => {
                                    return (
                                        <Show_Smartphone_row smartphone_charact={content} smartphone_charact_base={content} />
                                        
                                    )
                                })
                                
                            }
                            </tbody>

                        </table>    
                    </div>

                        <div className='site-layout-content'>
                            <Row gutter={ 16 }>
                            { contents.map((content: IContentModel) => {

                                return (
                                    <Edit_form_show key={ content.id } content={ content } />
                                )
                            }) }
                            </Row>
                        </div>
        </>
    )
})