import { MantineProvider } from '@mantine/core';
import { Layout } from './components/Layout/Layout';

export const App = () => {

  return (
    <MantineProvider >
      <Layout />
    </MantineProvider>
  );
}