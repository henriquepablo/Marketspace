import { LogoApp } from "@/assets"
import { ButtonCreateAccount, ButtonCreateAccountText, ButtonLogin, ButtonLoginText, ButtonPhoto, Container, Description, Footer, Form, Header, Input, Logo, Title, ViewIconEdit } from "./styles"
import { PencilSimpleLineIcon, UserIcon } from 'phosphor-react-native'
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { useRegisteriewModel } from "./useRegister.viewModel"

const RegisterView: React.FC<ReturnType<typeof useRegisteriewModel>> = ({ name, setName, email, setEmail, phone, setPhone, password, setPassword, confirmPassword, setConfirmPassword, handleRegister, backToLogin  }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                >
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
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Input
                            placeholder='Telefone'
                        />
                        <Input
                            placeholder='Senha'
                            secureTextEntry
                        />
                        <Input
                            placeholder='Confirmar senha'
                            secureTextEntry
                        />

                        <ButtonCreateAccount onPress={handleRegister}>
                            <ButtonCreateAccountText>
                                Criar
                            </ButtonCreateAccountText>
                        </ButtonCreateAccount>
                    </Form>


                    <Footer>
                        <Description>
                            Já possui conta?
                        </Description>

                        <ButtonLogin onPress={backToLogin}>
                            <ButtonLoginText>
                                Ir para o Login
                            </ButtonLoginText>
                        </ButtonLogin>
                    </Footer>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterView