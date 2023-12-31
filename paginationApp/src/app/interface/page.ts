import { User } from './user';
export interface Page {
    content: User[],
    pageable: {
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        offset: number,
        pageSize: number,
        pageNumber: number,
        paged: boolean,
        unpaged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    number: number,
    size: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
}
