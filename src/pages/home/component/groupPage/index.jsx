import PropTypes from 'prop-types';
import React, { memo } from 'react';
import GroupWarpper from './style';

const GroupPage = memo((props) => {
    const { infoDate } = props
    return (
        <GroupWarpper>
            <h3 className="group-title">
                租房小组
                <span className='more'>更多</span>
            </h3>
            <div className="am-grid">
                {
                    infoDate.map(item => {
                        return (
                            <div className='am-flexbox1' key={item.id}>
                                <img src={`http://liufusong.top:8080${item.imgSrc}`} alt="" />
                                <div className='right'>
                                    <p>{item.title}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </GroupWarpper>
    )
})

GroupPage.propTypes = {
    infoDate: PropTypes.array
}

export default GroupPage