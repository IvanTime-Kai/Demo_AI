import { GET_CONTENT_CHECK_BOX, SEARCH } from "../types/types";

export const actContent = (data) => ({
    type : GET_CONTENT_CHECK_BOX,
    data : data
})

export const actSearch = (data) => ({
    type : SEARCH,
    data
})