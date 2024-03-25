import {
    Button,
    Container,
    Group,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core'

export function SignIn() {
    return (
        <Group w={'100vw'} justify="center">
            <Container size={420} my={40}>
                <Title ta="center">Welcome back!</Title>

                <Paper
                    withBorder
                    shadow="md"
                    p={30}
                    mt={30}
                    radius="md"
                    w={350}
                >
                    <TextInput
                        label="Email"
                        placeholder="you@mantine.dev"
                        required
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                    />

                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </Group>
    )
}
