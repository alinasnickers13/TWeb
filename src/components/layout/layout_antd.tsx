import { Layout, List, Menu, Row } from 'antd';
import { observer } from 'mobx-react-lite'
import './layout_style.css';
import { My_Form_Show } from '../form/my_form';
import { My_Card_show } from '../show_cards';
import { cardInfo, smartphoneDict } from '../storage_data_local';
import { Form_Smartphone } from '../form/form_smartphone';
import { Edit_form_show, Show_Smartphone_row } from '../show_Smartphone_row';
import { useEffect } from 'react';
import { useRootStore } from '../..';
import { IContentModel } from '../interface/Interface';
import { My_form_login } from '../form/my_form_login';

const { Header, Content } = Layout;



export const My_Layout_Main = observer(() => {
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])
    return(
        <Layout className="layout">
                <div>
                   <h2> Elaborat de studenta Axenti Alina din grupa CR-191</h2>
                </div>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>

            <main>
                <Content style={{ padding: '0 50px' }}>
                   <div className="formGrid" >
                       <My_form_login/>
                       <My_Form_Show /> 
                       <Form_Smartphone/>  
                   </div>
                    
                    <div className="site-layout-content grid-3">                   
                        {
                            cardInfo.map((el, index) => {
                                return(

                                    <My_Card_show key={ el.id } title={ el.title } gif_url={el.gif_url} description={ el.description } phoneNumber={ el.phoneNumber } />
                                )
                            })
                        }
                    </div> 
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
                                // smartphoneDict.map((esl)=> {
                                //     return(
                                //     //{
                                //         // console.log("--->> ",esl)
                                //         //<Show_Smartphone_row smartphone_charact={esl} smartphone_charact_base={esl} />
                                //     //}
                                //     )
                                // })

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


                </Content>
            </main>

           
      </Layout>
    )
})