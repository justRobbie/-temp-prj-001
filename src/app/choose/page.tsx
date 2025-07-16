"use client"

import { useEffect } from 'react'
import Icons from '../icons'

export default function Login() {
    const {
        LoadingIcon,
    } = Icons;

    useEffect(() => {
        const $dialog = document.querySelector("dialog[data-component='BrandsMenuDialog']") as HTMLDialogElement;

        if (!$dialog) return;

        $dialog.showModal();

        return () => { }
    }, [])

    return <section className='h-full w-full flex flex-col items-center justify-center'>
        <LoadingIcon className="animation-spin" />
    </section>;
}