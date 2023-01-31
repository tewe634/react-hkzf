import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Swiper, Image } from 'antd-mobile'

const SwiperPage = memo((props) => {
    const { infoDate } = props
    const items = infoDate.map((item) => (
        <Swiper.Item key={item.id}>
            <Image src={`http://liufusong.top:8080${item.imgSrc}`} />
        </Swiper.Item>
    ))
    return (
        <div>
            <Swiper loop>{items}</Swiper>
        </div>
    )
})

SwiperPage.propTypes = {
    infoDate: PropTypes.array
}

export default SwiperPage