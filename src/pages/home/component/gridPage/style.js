import styled from "styled-components";

const GridWarpper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
        width: 25%;
        height: 120px;
        text-align: center;
        padding: 10px 0;
        box-sizing: border-box;
        img {
            width: 60px;
            height: 60px;
        }
        h2 {
            margin: 12px 0;
            font-size: 14px;
            font-weight: 400;
        }
    }
`
export default GridWarpper