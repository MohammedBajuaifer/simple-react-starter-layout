import { Group, Table, Title } from '@mantine/core'
import { useRentalRequestsQuery } from '../queries/rental.query'

const RentalRequestPage = () => {
    const { data: requests } = useRentalRequestsQuery()

    const rows = requests?.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.rentalAmount}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td>{element.rentalStartDate}</Table.Td>
        </Table.Tr>
    ))

    const ths = (
        <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Rental Amount</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Date</Table.Th>
        </Table.Tr>
    )

    return (
        <Group>
            <Title>Requests</Title>

            <Table miw={800} verticalSpacing="sm">
                <Table.Thead>{ths}</Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Group>
    )
}

export default RentalRequestPage
