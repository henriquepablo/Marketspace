import { LogoApp } from "@/assets"
import { ButtonPhoto, Container, Description, Form, Header, Input, Logo, Title, ViewIconEdit } from "./styles"
import { PencilSimpleLineIcon, UserIcon } from 'phosphor-react-native'
import { KeyboardAvoidingView, Platform } from "react-native"

const RegisterView: React.FC = () => {
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container>
                <Header>
                    <Logo source={LogoApp} />

                    <Title>
                        Boas vindas!
                    </Title>

                    <Description>
                        Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                    </Description>
                </Header>

                <Form>
                    <ButtonPhoto>
                        <UserIcon color="#D9D8DA" size={46} weight="bold" />

                        <ViewIconEdit>
                            <PencilSimpleLineIcon color="white" size={14} />
                        </ViewIconEdit>
                    </ButtonPhoto>

                    <Input
                        placeholder='Nome'
                    />
                    <Input
                        placeholder='E-mail'
                    />
                    <Input
                        placeholder='Telefone'
                    />
                    <Input
                        placeholder='Senha'
                    />
                    <Input
                        placeholder='Confirmar senha'
                    />
                </Form>
            </Container>
        </KeyboardAvoidingView>
    )
}

export default RegisterView