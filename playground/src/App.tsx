import { Button, Input, Popover, Toaster, Tooltip, toast } from '@shilong/ui'

export function App() {
  return (
    <>
      <Input />
      <Button onClick={() => toast('nih')}>Toast</Button>
      <Toaster position="top-center" />
      <Popover trigger={<Button>Trigger</Button>}>
        <div>nihao</div>
      </Popover>

      <Popover trigger={<Button>Trigger1</Button>}>
        <>nihao</>
      </Popover>

      <Tooltip trigger={<Button variant="outline">E</Button>} arrow>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus
        suscipit distinctio asperiores vero molestias, quos rerum aliquid? Et
        nulla ducimus, qui repudiandae culpa quod pariatur ipsam aut magni sint.
      </Tooltip>
    </>
  )
}
