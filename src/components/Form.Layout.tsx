"use client"

import { useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

const LayoutForm = (props: HTMLAttributes<HTMLElement>) => {
    const params = useSearchParams();

    return <form data-active={params.get("layout") === "form"} data-component="layout-form" {...props}>
        boo: {JSON.stringify(Array.from(params.entries()))}
    </form>
};

export default LayoutForm;