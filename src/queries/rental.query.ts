import { useQuery } from 'react-query'
import { getRequest } from '../api/api.common'
import { apiEndpoints } from '../api/api.endpoints'
import { RentalRequestType } from '../types/rental.type'

const getRentalRequests = async () => {
    const response = await getRequest(apiEndpoints.listRentalRequests)
    return response.data
}

export const useRentalRequestsQuery = () =>
    useQuery<RentalRequestType[]>(
        ['rentalRequests'],
        () => getRentalRequests(),
        {
            refetchOnWindowFocus: false,
        }
    )
