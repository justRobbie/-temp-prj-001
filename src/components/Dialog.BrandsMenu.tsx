"use client";

import { EBrandType, Thumbnails } from "@/app";
import Image, { StaticImageData } from "next/image";
import { useParams, usePathname } from "next/navigation";
import "./Dialog.BrandsMenu.css";
import Link from "next/link";
import { BrandsMenuDialog$STORAGE_ALIAS } from "@/constants";

const BrandsMenuDialog = ({ onClose, ...props }: React.ComponentProps<"dialog"> & { onClose?: () => void }) => {
    const pathname = usePathname();
    const { id: brand } = useParams<{ id: EBrandType }>();

    function handleClose(brand: EBrandType) {
        try {
            const $dialog = document.querySelector("dialog[data-component='BrandsMenuDialog']") as HTMLDialogElement;

            $dialog.removeEventListener('mousedown', BrandsMenuCloseEvent);

            $dialog.close();
        } catch (error) {
            console.error(error);
        } finally {
            localStorage.setItem(BrandsMenuDialog$STORAGE_ALIAS, brand);

            onClose?.();
        }
    };

    return <dialog data-component="BrandsMenuDialog" {...props}>
        {Object.values(EBrandType).map(br => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const goto = `/${br}${pathname.split("/").filter(l => ![...Object.values(EBrandType), "choose"].includes(l as any)).join("/")}`;

            return <Link href={goto} key={br} type="button" data-selected={br === brand} onClick={() => handleClose(br)}>
                <Image src={Thumbnails.get(br) as StaticImageData} alt={`${br}'s logo`} />

                <span>{br}</span>
            </Link>
        })}
    </dialog>;
};

export function BrandsMenuCloseEvent (event: MouseEvent) {
    if (event.target === event.currentTarget) {
        (event.currentTarget as HTMLDialogElement)?.close()
    }
}

export default BrandsMenuDialog;