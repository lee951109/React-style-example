import styled from 'styled-components';

const StyledA = styled.a.atttrs(props => ({
  target : "_blank"
}))`
  color : ${props => props.color};
`;

export default StyledA;