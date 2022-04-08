import { Form, Input, Button, notification } from 'antd';

export const My_Form_Show = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Deschide consola CTRL+SHIFT+I',
        });
        console.log('Output', values);
    };

    return(
        <Form
            name='basic'
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 5}}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Titlul:"
                name="titlu"
                rules={[
                    { required: true, message: 'Introdu un titlu!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="GIF_URL:"
                name="gif_url"
                rules={[
                    { required: true, message: 'Introdu un GIF_URL!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Textul din interior:"
                name="text"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Numarul de telefon:"
                name="nrTelefon"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input type={ 'number' } />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 7}}>
                <Button type='primary' htmlType='submit' ghost>
                    Introdu
                </Button>

            </Form.Item>

        </Form>
    )
}