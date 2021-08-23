import React from 'react'
import {
    Container, 
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap,
    FormH1,
    Form,
    Icon,
    Text
    } from './SigninElements'

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">moolah</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
