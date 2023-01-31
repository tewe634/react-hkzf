import requst from "../utils/requst";
export const getSwiperList = () => {
    return requst({
        url: '/home/swiper',
        method:'GET'
    })
}