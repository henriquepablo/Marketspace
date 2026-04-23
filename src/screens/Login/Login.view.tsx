import { LogoApp } from "@/assets"
import { ButtonCreateAccount, ButtonCreateAccountText, ButtonLogin, ButtonLoginText, Container, Content, Description, Footer, Form, Input, Logo, Title } from "./styles"
import { useAuthViewModel } from "./useLogin.viewModel"
import { router } from "expo-router"

const AuthView: React.FC<ReturnType<typeof useAuthViewModel>> = ({ email, setEmail, password, setPassword, handleLogin }) => {
    return (
        <Container>
            <Content>
                <Logo source={LogoApp} />

                <Title>
                    MarketSpace
                </Title>

                <Description>
                    Seu espaço de compra e venda
                </Description>

                <Form>
                    <Description>
                        Acesse sua conta
                    </Description>

                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <ButtonLogin onPress={handleLogin}>
                        <ButtonLoginText>
                            Entrar
                        </ButtonLoginText>
                    </ButtonLogin>
                </Form>
            </Content>

            <Footer>
                <Description>
                    Ainda não tem acesso?
                </Description>

                <ButtonCreateAccount onPress={() => router.navigate('/(public)/signup')}>
                    <ButtonCreateAccountText>
                        Criar Conta
                    </ButtonCreateAccountText>
                </ButtonCreateAccount>
            </Footer>
        </Container>
    )
}

export default AuthView