import { useSelector } from "react-redux";

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import phone from '../../images/phone.jpg';
import { Section } from 'components/Section/Section';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation.styled';


export const HomeDescription = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <HomeContainer>
            <Img src={phone} alt='phone' width='200' height='300' />
            <HomeTextContainer>
                <Section title={'Phonebook'}>
                    <p>All your contacts are in a safe place</p>
                    {!isLoggedIn && (
                        <>
                        <p>Join Us Today!</p>
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