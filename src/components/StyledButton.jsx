import styled, { css } from 'styled-components';


// 특이라게 백틱(₩₩)으로 스타일을 정의한다.. 너무 불편쓰
// 그리고 문자열이라서 오타가 나도 티가 안남... 플러그인을 쓰던가 해야하는데 굳이,,,??


// 그럼에도 불구하고 사용하는 이유는 ? 스코프에 전염되는 일이 거의 없어서?
const StyledButton = styled.button`
  background : transparent;
  border-radius : 3px;
  border : 2px solid palevioletred;
  color : palevioletred;
  margin : 0 1em;
  padding : 0.25em 1em;
  font-size : 20px;


  ${ props => props.primary && 
    css`
   background : palevioletred;
   color : white;
  `}
`;

export default StyledButton;
