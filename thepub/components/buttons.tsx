'use client';

import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const {data: session, status} = useSession();
    if (status === 'loading') {
        return <>...</>
    }
    
    if (status === 'authenticated') {
        return (
            <>
                <Link href={'/dashboard'}>
                    <Image
                    src={session.user?.image ?? '/vercel.svg'}
                    width={32}
                    height={32}
                    alt="Your Name"/>
                </Link>
                <SignOutButton />
            </>
        )
    }
    
    return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
    const {data: session, status} = useSession();
    if (status !== 'authenticated') {
        return <></>;
    }
    return <button onClick={() => signOut()}>Sign out</button>
}