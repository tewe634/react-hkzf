import styled from "styled-components";

 const GroupWarpper = styled.div`
    .group-title {
        position: relative;
        margin: 15px 0 15px 10px;
        font-size: 15px;
        .more {
            color: #787d82;
            position: absolute;
            right: 0;
            font-size: 14px;
            font-weight: 400;
        }
    }
    .am-grid {
        display: flex;
        height: 130px;
        justify-content: space-between;
        flex-wrap: wrap;
        .am-flexbox1 {
            display: flex;
            align-items: center;
            width: 172px;
            height: 50px;
            background-color: #fff;
            margin-bottom: 10px;
            img {
                width: 50px;
                height: 50px;
                margin: 0 10px;
            }
        }
    }
`
export default GroupWarpper