"use client"

import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, Heading, Radio, RadioGroupField, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { formFields } from '@/lib/constants';


Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
        }
    }
});

const components = {
    SignIn: {
        Header() {
            return (
                <View className="mt-4 mb-7">
                    <Heading level={3} className="!text-2xl !font-bold !cursor-pointer">
                        RENT
                        <span className="!text-secondary-500 !font-bold">IFUL</span>
                    </Heading>
                    <p className="text-muted-foreground mt-2">
                        <span className="font-bold">
                            Hello!<span> Let’s get started – please sign in.</span>
                        </span>
                    </p>
                </View>
            )
        },
        Footer() {
            const { toSignUp, toForgotPassword } = useAuthenticator();
            return (
                <View className="mt-4 text-center">
                    <p className="text-muted-foreground">
                        Don&apos;t have an account?{" "}

                        <button
                            onClick={toSignUp}
                            className="text-primary hover:underline bg-transparent border-none p-0"
                        >
                            Sign up Here
                        </button>
                    </p>

                    {/* Forgot Password Button */}
                    <p className="text-muted-foreground mt-2">
                        <button
                            onClick={toForgotPassword}
                            className="text-primary hover:underline bg-transparent border-none p-0"
                        >
                            Forgot Password?
                        </button>
                    </p>
                </View>
            )
        },
    },

    SignUp: {
        Header() {
            return (
                <View className="mt-4 mb-7">
                    <Heading level={3} className="!text-2xl !font-bold !cursor-pointer">
                        RENT
                        <span className="!text-secondary-500 !font-bold">IFUL</span>
                    </Heading>
                    <p className="text-muted-foreground mt-2">
                        <span className="font-bold">
                            Welcome aboard!<span> Set up your account to explore.</span>
                        </span>
                    </p>
                </View>
            )
        },
        FormFields() {
            const { validationErrors } = useAuthenticator();
            return (
                <>
                    <Authenticator.SignUp.FormFields />
                    <RadioGroupField
                        legend="Role"
                        name="custom:role"
                        errorMessage={validationErrors?.["custom:role"]}
                        hasError={!!validationErrors?.["custom:role"]}
                        isRequired
                    >
                        <Radio value="tenant">Tenant</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioGroupField>
                </>
            )
        },

        Footer() {
            const { toSignIn } = useAuthenticator();
            return (
                <View className="mt-4 text-center">
                    <p className="text-muted-foreground">
                        Already have an account?{" "}

                        <button
                            onClick={toSignIn}
                            className="text-primary hover:underline bg-transparent border-none p-0"
                        >
                            Sign in
                        </button>
                    </p>
                </View>
            )
        },
    }
}

const Auth = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    const router = useRouter();
    const pathname = usePathname();

    const isAuthPage = pathname.match(/^\/(signin|signup)$/);

    // const isDashboardPage = pathname.startsWith('/manager') || pathname.startsWith('/tenant');

    useEffect(() => {
        if (user && isAuthPage) {
            router.push("/");
        }
    }, [user, isAuthPage, router]);

    if (!isAuthPage) {
        return <>{children}</>;
    }


    return (
        <main className="auth-container">

            {/* Right side - Authenticator */}
            <section className="md:w-1/2 w-full flex items-center justify-center p-6">
                <Authenticator
                    initialState={pathname.includes('signup') ? 'signUp' : 'signIn'}
                    components={components}
                    formFields={formFields}
                >
                    {() => <>{children}</>}
                </Authenticator>
            </section>

            {/* Left side - Image */}
            <section className="auth-illustration">
                <Image
                    src="/authimage.jpg"
                    alt="auth"
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </section>
        </main>


    );
}

export default Auth;
