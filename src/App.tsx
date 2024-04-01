export const App = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
      <Center>
          <Modal
              opened={opened}
              onClose={close}
              title="Authentication"
              fullScreen
          >
              {/* Modal content */}
          </Modal>

          <Button onClick={open}>Open modal</Button>
      </Center>
  )
}