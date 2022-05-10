import { Content } from "antd/lib/layout/layout"
import { My_Card_show } from "../show_cards"
import { cardInfo } from "../storage_data_local"

export const Show_Cards_Menu= () => {
    return (
        <>
         <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content grid-3">                   
                        {
                            cardInfo.map((el, index) => {
                                return(

                                    <My_Card_show key={ el.id } title={ el.title } gif_url={el.gif_url} description={ el.description } phoneNumber={ el.phoneNumber } />
                                )
                            })
                        }
                    </div> 
         </Content>
        </>
    )
}