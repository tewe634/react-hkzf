import requst from "../utils/requst";
export const getSwiperList = () => {
    return requst({
        url: '/home/swiper',
        method:'GET'
    })
}
export const getGroupArea = (val) => {
    return requst({
        url: '/home/groups?area=' + val,
        method:'GET'
    })
}