import styled from "styled-components";

export const Container = styled.div`
    background: red;
    height: 90px;
`;

export const ListItem = styled.li`
    list-style: none;
    color: ${(props) => props.active? '#fff' : '#333'};
`;