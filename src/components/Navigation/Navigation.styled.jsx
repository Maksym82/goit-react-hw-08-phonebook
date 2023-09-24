import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import { BiSolidHomeHeart, BiSolidContact } from 'react-icons/bi';

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const HomeIcon = styled(BiSolidHomeHeart)`
    fill: currentColor;
`;

export const ContactIcon = styled(BiSolidContact)`
    fill: currentColor;
`;

export const Link = styled(NavLink)`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: inherit;

    font-size: 18px;
    text-decoration: none;

    :hover,
    :focus {
    text-shadow: 5px 5px 10px white;
    }

    &.active {
        color: white;

        :hover,
        :focus {
            text-shadow: 5px 5px 10px black;
        }
    }
`;