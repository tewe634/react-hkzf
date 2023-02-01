import styled from "styled-components";

export const HomeWarpper = styled.div`
    position: relative;
    overflow: hidden;
    .am-flexbox {
        position: absolute;
        top: 25px;
        width: 100%;
        padding: 0 10px;
        z-index: 2;
        align-items: center;
        overflow: hidden;
    }
    .gridPage {
        height: 122px;
        background-color: #fff;
    }
    .group {
        background-color: #f6f5f6;
        overflow: hidden;
        padding: 0 10px;
    }
`