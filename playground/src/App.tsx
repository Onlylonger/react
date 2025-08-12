import { CheckboxGroup, Input, FormItem, Form, Button } from '../../src'

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

export function App() {
  return (
    <>
      <div className="flex min-h-svh items-center justify-center">
        <Form onSubmit={(v) => console.log(v)} className="max-w-[300px]">
          <FormItem
            label="Username"
            name="username"
            rules={{
              required: '内容必填',
            }}
            render={<Input autoComplete="on" />}
          />
          <FormItem
            label="Password"
            name="password"
            rules={{
              required: 'message',
            }}
            render={<Input autoComplete="on" />}
          />
          <FormItem
            label="like"
            name="food"
            rules={{
              required: 'message',
            }}
            controlled
            className="items-start"
            render={<CheckboxGroup options={options} />}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  )
}
