import React, { useState } from 'react'
import {Form} from 'semantic-ui-react';

function CreateProductForm(props:any) {
    const [ productName, setProductName ] = useState('')
    
    const handleChangeProductName = (e:any) => {
        setProductName(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const jsonData = {
        //   name: productName
        // }
        // const options = {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(jsonData)
        // };
        const res = await fetch('https://localhost:44350/api/v1/products')
        const data  = await res.json();
        console.log('data', data);
        console.log(productName)
        setProductName('');
    }

    return (
        <Form onSubmit={handleSubmit}>
           <Form.Group>
            <Form.Input
              placeholder='Name'
              name='productName'
              value={productName}
              onChange={handleChangeProductName}
            />
            <Form.Button fluid content='Submit' />
          </Form.Group>
        </Form>
    )
}

export default CreateProductForm
