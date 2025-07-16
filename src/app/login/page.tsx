"use client"

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Icons from '../icons'
import { BrandsMenuDialog$STORAGE_ALIAS } from '@/constants';

export default function Login() {
    const [seePassword, setSeePassword] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const {
        EyeIcon,
        EyeSlashIcon,
        LoadingIcon,
        ShieldIcon
    } = Icons;

    async function POST(event: FormEvent<HTMLFormElement>) {
        setLoading(true);

        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        const lastUsedBrand = localStorage.getItem(BrandsMenuDialog$STORAGE_ALIAS);

        if (response.ok) {
            if (lastUsedBrand) router.push(`/${lastUsedBrand}`);

            else router.push(`/choose`);
        } else {
            setError(new Error('Credenciais inválidas.'))
            setLoading(false)
        }
    }

    function toggleSeePassword() {
        setSeePassword(!seePassword);
    }

    useEffect(() => {
        return () => {
            setLoading(false);
        }
    }, [])

    return <form id="login-form" onSubmit={POST}>
        <section data-styletype={!error ? "primary" : "danger"}>
            <ShieldIcon className='text-7xl' />

            <fieldset disabled={loading}>
                <input type="email" name="email" placeholder="Email" required />

                <div className='w-full flex flex-row'>
                    <input type={seePassword ? "text" : "password"} name="password" placeholder="Password" required />

                    <button title='Revelar password' type="button" data-styletype="secondary" onClick={toggleSeePassword}>
                        {!seePassword ? <EyeIcon className='text-2xl' /> : <EyeSlashIcon className='text-2xl' />}
                    </button>
                </div>
            </fieldset>

            {error && <p data-error className='text-center p-2'>{error.message}</p>}

            <button type="submit" data-styletype="primary" disabled={loading}>
                {loading ? <LoadingIcon className='animate-spin' /> : "Login"}
            </button>
        </section>
    </form>;
}