import styled from "styled-components";

export const SearchWarpper = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    .search {
        display: flex;
        width: 310px;
        height: 34px;
        margin: 0 10px;
        padding: 5px 5px 5px 8px;
        border-radius: 3px;
        background-color: #fff;
        box-sizing: border-box;
        .location {
            .name {
                font-size: 14px;
                color: #333;
            }
            .iconfont {
                margin-left: 2px;
                font-size: 12px;
                color: #7f7f80;
            }
        }
        .form {
            
            border-left: 1px solid #e5e5e5;
            margin-left: 12px;
            line-height: 24px;
            .icon-seach {
                vertical-align: middle;
                padding: 0 2px 0 12px;
                color: #9c9fa1;
                font-size: 15px;
            }
            .text {
                padding-left: 4px;
                font-size: 13px;
                color: #9c9fa1;
            }
        }
    }
    .iconfont {
        font-size: 25px;
        color: #fff;
    }
` 