import { Layout, Menu } from 'antd';

import './layout_style.css';
import { My_Form_Show } from '../form/my_form';
import { My_Card_show } from '../show_cards';
import { cardInfo } from '../storage_data_local';

const { Header, Content } = Layout;

export const My_Layout_Main = () => {

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
                <My_Form_Show />
                   
                    
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
            </main>

           
      </Layout>
    )
}