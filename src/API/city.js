import requst from "../utils/requst";

export const getAreaCity = (val) => {
    return requst({
        url: `/area/city?level=${val}`,
        method:'GET'
    })
}
export const GetHotCity = () => {
    return requst({
        url: '/area/hot',
        method:'GET'
    })
}