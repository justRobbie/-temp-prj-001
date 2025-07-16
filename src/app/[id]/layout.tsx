import { EBrandType } from "@/app";
import { notFound } from "next/navigation";

export default async function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ id: EBrandType }>;
}>) {
    const id = (await params).id;

    if (!Object.values(EBrandType).includes(id)) notFound();
    
    return (
        <>
          {children}  
        </>
    );
}
