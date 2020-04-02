import styled, {css} from 'styled-components'

export const List = styled.ul`
  display:flex;
  overflow:scroll;
  width:100%;
  ${props => props.fixed && css`
    background:#fff;
    border-radius:50px;
    box-shadow: 0 0 20px rgba(0,0,0,.3);
    left: 0;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right:0;
    top:-20px;
    transform: scale(.6);
    z-index:1;
  `}
  padding-top:10px;
  border-width: 1.5px;
  border-style: solid;
  border-color:rgba(20,20,20,.1);
  padding-bottom:10px;
  border-left:none;
  border-right:none;
`

export const Item = styled.li`
  padding:0 8px;
`