import { EBrandType } from "@/app";
import { notFound } from "next/navigation";

export default async function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { id: EBrandType };
}>) {
    const { id } = params;
    
    console.log(id);
    console.log(Object.values(EBrandType));

    if (!Object.values(EBrandType).includes(id)) notFound();
    
    return (
        <>
          {children}  
        </>
    );
}
