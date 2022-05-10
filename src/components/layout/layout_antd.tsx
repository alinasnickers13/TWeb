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
import { Link, Route, Routes } from 'react-router-dom';
import { Show_Cards_Menu } from '../menu_components/Show_Cards_Menu';
import { Show_Table_Menu } from '../menu_components/Show_Table_Menu';

const { Header, Content } = Layout;



export const My_Layout_Main = () => {

    return(
        <Layout className="layout">
                <div>
                   <h2> Elaborat de studenta Axenti Alina din grupa CR-191</h2>
                </div>
            <Header>
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item key={1}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key={2}>
                    <Link to="/myform">My First Form</Link>
                </Menu.Item>
                <Menu.Item key={3}>
                    <Link to="/form_smartphone">Form Smartphone</Link>
                </Menu.Item>
                <Menu.Item key={4}>
                    <Link to="/cards">Show Cards</Link>
                </Menu.Item>
                <Menu.Item key={5}>
                    <Link to="/table_edit">Show Table</Link>
                </Menu.Item>              
            </Menu>
            </Header>

            <Routes>
                <Route path='/login' element={ <My_form_login/> } />
                <Route path='/myform' element={<My_Form_Show /> } />
                <Route path='/form_smartphone' element={<Form_Smartphone/>} />
                <Route path='/cards' element={<Show_Cards_Menu/>} />
                <Route path='/table_edit' element={<Show_Table_Menu/>} />
            </Routes>
           
      </Layout>
    )
}