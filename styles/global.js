import css from 'styled-jsx/css'

export default css.global`
    body {
        font-family: 'Verdana, Geneva, sans-serif';
        background: #f2f2f2 !important;
    }

    .stories-header, .stories-footer {
        background: #e96429;
    }

    .stories-header a {
        color: black;
        margin-left: 5px;
        margin-right: 5px;
    }

    .stories-header a:active {
        color: #fff;
    }

    .stories-source-logo{
        border: 1px solid #fff;
        margin: 2px;
    }

    .story-list {
        margin: 5px;
        font-size: 12px;
    }
    
    .story {
        
        display: flex;
        flex-direction: row;
    }

    .story:nth-child(even) {
        background-color: #fff;
    }

    .story:nth-child(odd) {
        background-color: #e6e6df;
    }

    .story:hover {
        background-color: #f2f2f2;
    }
    
    .story div {
        padding: 2px;
        float: left;
    }
    .story-num-comments {
        width: 50px;
        text-align: right;
        margin-right: 20px;
    }
    .story-up-votes {
        text-align: right;
        margin-right: 20px;
    }
    .story-author {
        font-size: 10px;
        line-height: 2;
    }
    .story-created-at{
        font-size: 10px;
        line-height: 2;
        color: #828282;
    }

    .story-hide {
        font-size: 10px;
        line-height: 2;
        cursor: pointer;
    }
    .votearrow {
        width:      10px;
        height:     10px;
        border:     0px;
        margin:     5px 2px;
        background: url("https://news.ycombinator.com/grayarrow.gif") no-repeat;
      }

    .votearrow:hover {
        cursor: pointer;
    }
`