import { useSelector } from "react-redux";

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import phone from '../../images/fon2.jpg';
import { Section } from 'components/Section/Section';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation.styled';
import { AuthLinkHome,
    HomeContainer,
    HomeTextContainer,
    Img,
} from './HomeDescription.styled';

export const HomeDescription = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <HomeContainer>
            <Img src={phone} alt='phone' width='300' height='200' />
            <HomeTextContainer>
                <Section title={'Phonebook'}>
                    <p>All your contacts are in a safe place</p>
                    {!isLoggedIn && (
                        <>
                            <AuthNav>
                                <AuthLinkHome to="/register">Register</AuthLinkHome>
                                <AuthLinkHome to="/login">Log In</AuthLinkHome>
                            </AuthNav>
                        </>
                    )}
                </Section>
            </HomeTextContainer>
        </HomeContainer>
    );
};