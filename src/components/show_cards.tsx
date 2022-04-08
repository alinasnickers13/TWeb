import { Card } from 'antd';
export const My_Card_show = ({title, gif_url, description, phoneNumber} : {title: string, gif_url: string, description: string, phoneNumber: number}) => {
    return(
        <Card 
            title={ title }  
            bordered={ true } 
            hoverable={ true }
            size='small'
        >
            <img src={ gif_url } height="200px" width="auto" /><br />
            <b><i>Descriere</i>:</b> { description } <br />
            <b><i>Telefon:</i></b> { phoneNumber } <br />
        </Card>
    )
}