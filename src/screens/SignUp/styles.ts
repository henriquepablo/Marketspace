import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.gray[600]};
    padding: 56px 48px;
`;

export const Header = styled.View`
    align-items: center;
    gap: 12px;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 40px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${fonts.bold};
    color: ${colors.gray[100]};
`;

export const Description = styled.Text`
    text-align: center;
    color: ${colors.gray[200]};
    font-family: ${fonts.regular};
    font-size: 14px;
`;

export const Form = styled.View`
    align-items: center;
    gap: 14px;
`;

export const ButtonPhoto = styled.TouchableOpacity`
    margin-top: 32px;
    width: 88px;
    height: 88px;
    border-radius: 44px;
    border-color: ${colors.blueLight};
    border-width: 3px;
    justify-content: center;
    align-items: center;
    background-color: '#D9D8DA';
    position: relative;
`;

export const ViewIconEdit = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${colors.blueLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: -10px;
`;

export const Input = styled.TextInput`
    background-color: ${colors.gray[700]};
    height: 45px;
    border-radius: 6px;
    width: 279px;
    padding-left: 10px;
    font-family: ${fonts.regular};
`;