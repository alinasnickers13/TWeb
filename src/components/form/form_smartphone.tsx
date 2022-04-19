import { Form, Input, Button, notification } from 'antd';
import { useState } from 'react';

export const Form_Smartphone = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Open Console.log',
        });
    };


    const [model, Set_model] = useState("");
    const [tip_baterie, Set_tip_baterie] = useState("");
    const [capacitatea_bateriei, Set_capacitatea_bateriei] = useState("");
    const [greutate, Set_greutate] = useState("");
    const [ram, Set_ram] = useState("");
    const [memorie_interna, Set_memorie_interna] = useState("");
    const [cpu, Set_cpu] = useState("");



    const submitSmartphone= () => {
        const input_fild = {
            "1. model: ": model,
            "1. tip_baterie: ": tip_baterie,
            "1. capacitatea_bateriei: ": capacitatea_bateriei,
            "1. greutate: ": greutate,
            "1. ram: ": ram,
            "1. memorie_interna: ": memorie_interna,
            "1. cpu: ": cpu
        };
        console.log(input_fild)
    }

    return (
        <>
            <Form
                name='basic'
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                autoComplete="off"
                onFinish={ onFinish}
            >
                <Form.Item
                    label="MODEL:"
                    name="model"
                    rules={[
                        { required: true, message: 'Insert Smartphone model!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_model(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="TIP_BATERIE:"
                    name="tip_baterie"
                    rules={[
                        { required: true, message: 'Insert Smartphone tip_baterie!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_tip_baterie(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="CAPACITATEA_BATERIEI:"
                    name="capacitatea_bateriei"
                    rules={[
                        { required: true, message: 'Insert Smartphone capacitatea_bateriei!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_capacitatea_bateriei(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="GREUTATE:"
                    name="greutate"
                    rules={[
                        { required: true, message: 'Insert Smartphone greutate!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_greutate(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="RAM:"
                    name="ram"
                    rules={[
                        { required: true, message: 'Insert Smartphone ram!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_ram(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="MEMORIE_INTERNA:"
                    name="memorie_interna"
                    rules={[
                        { required: true, message: 'Insert Smartphone memorie_interna!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_memorie_interna(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="CPU:"
                    name="cpu"
                    rules={[
                        { required: true, message: 'Insert Smartphone cpu!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_cpu(e.target.value) }}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 7 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={ submitSmartphone }
                        ghost
                    >
                        Introdu
                    </Button>

                </Form.Item>

            </Form>
        </>
    );
}