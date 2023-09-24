import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const AuthNav = styled.div`
    display: flex;
    gap: 20px;
`;

export const AuthLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    color: inherit;
    font-size: 18px;
    text-decoration: none;
`;