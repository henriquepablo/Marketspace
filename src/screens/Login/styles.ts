import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.gray[700]};
`;

export const Content = styled.View`
    background-color: ${colors.gray[600]};
    width: 100%;
    height: 500px;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const Logo = styled.Image`
    margin-top: 50px;
`;

export const Title = styled.Text`
    color: ${colors.gray[100]};
    font-family: ${fonts.bold};
    font-size: 22px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    color: ${colors.gray[300]};
    font-size: 14px;
    font-family: ${fonts.regular};
`;

export const Form = styled.View`
    margin-top: 77px;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: ${colors.gray[700]};
    height: 45px;
    width: 279px;
    border-radius: 6px;
    font-family: ${fonts.regular};
    font-size: 14px;
    padding-left: 10px;
    margin-top: 20px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    background-color: ${colors.blueLight};
    height: 42px;
    width: 279px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 32px;
`;

export const ButtonLoginText = styled.Text`
    color: ${colors.gray[700]};
    font-size: 14px;
    font-family: ${fonts.bold};
`;

export const Footer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
    background-color: ${colors.gray[500]};
    width: 279px;
    height: 42px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;

export const ButtonCreateAccountText = styled.Text`
    color: ${colors.gray[200]};
    font-family: ${fonts.bold};
    font-size: 14px;
`;