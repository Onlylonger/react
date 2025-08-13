import { Button, CheckboxGroup, Form, FormItem, Input } from '@shilong/react'
import { useState } from 'react'

const options = [
  {
    label: '豆腐',
    value: 'toufu',
  },
  {
    label: '棉花糖',
    value: 'mianhuatang',
  },
  {
    label: '棉花糖2',
    value: 'mianhuatang2',
  },
  {
    label: '棉花糖3',
    value: 'mianhuatang3',
  },
  {
    label: '棉花糖4',
    value: 'mianhuatang4',
  },
]

function App() {
  const [json, setJson] = useState('')

  const handleSubmit = (v: object) => {
    console.log(v)
    setJson(JSON.stringify(v))
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 450,
            padding: 50,
            boxShadow:
              '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 600 }}>
            Sign in
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontWeight: 400,
              color: '#0009',
              fontSize: 14,
            }}
          >
            Welcome user, please sign in to continue
          </p>
          <Form
            onSubmit={handleSubmit}
            style={{
              marginTop: 40,
            }}
          >
            <FormItem
              name="username"
              label="Username"
              rules={{ required: '必填项' }}
              render={<Input placeholder="Please input" />}
            />
            <FormItem
              name="password"
              label="Password"
              rules={{ required: '必填项' }}
              render={<Input type="password" placeholder="Please input" />}
            />
            <FormItem
              name="food"
              label="Food"
              rules={{ required: '必填项' }}
              className="items-start"
              controlled
              render={<CheckboxGroup options={options} />}
            />
            <Button type="submit" style={{ marginTop: 20 }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>{json}</div>
    </>
  )
}

export default App
