"use client"

import Icons from "@/app/icons"
import DynamicTable from "../../components/DynamicTable";
import { DEFAULT_COMPONENT_STATE, POSType } from "@/constants";
import { HTMLAttributes, useEffect, useState, useRef, useMemo } from "react";
import { ComponentStateType, Province, StoreType } from "@/types";
import './POS.css';

interface IPOSProps extends HTMLAttributes<HTMLElement> {
    defaultList: POSType[];
}

export const POS$STORAGE_ALIAS = `POS$CACHED`;

const POS = ({ defaultList, ...props }: IPOSProps) => {
    const POS$TABLE_NAME = `points-of-sale`;

    const {
        AddIcon,
        CloseIcon,
        LoadingIcon
    } = Icons;

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [showForm, toggleForm] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");
    const [component, updateComponent] = useState<ComponentStateType<POSType[], "fetching">>({ ...DEFAULT_COMPONENT_STATE, data: defaultList });

    const list = useMemo(() => (["error", "fetching"].includes(component.state)
        ? defaultList
        : component.data as POSType[]
    ).filter(p => searchText === "" ? true : Object.values(p).some(v => v.toString().includes(searchText))), [searchText, component, defaultList]);

    function clearSearchText () {
        setSearchText("");

        const $input = document.getElementById("search-text") as HTMLInputElement;

        if (!$input) return;

        $input.value = "";
        $input.focus();
    };

    function post(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const $form = e.target as HTMLFormElement;

        let id: number = 0;

        try {
            updateComponent(c => { return { ...c, state: "fetching" } });

            const elements = $form.elements;

            const data = [...component.data as POSType[]];

            id = (data.at(-1)?.id ?? 0) + 1;

            const newPOS: POSType = {
                id,
                "referência": `POS-${parseInt(((component.data as POSType[]).at(-1)?.referência ?? `POS-${0}`).split('-')[1]) + 1}`,
                "localização (lat:lng)": `${parseFloat(parseFloat((elements.namedItem("lat") as HTMLInputElement).value).toFixed(6))}:${parseFloat(parseFloat((elements.namedItem("lng") as HTMLInputElement).value).toFixed(6))}`,
                "município": (elements.namedItem("município") as HTMLInputElement).value,
                "província": (elements.namedItem("província") as HTMLInputElement).value as Province,
                "tipo": (elements.namedItem("tipo") as HTMLSelectElement).value as StoreType
            };

            const cachedStorage = localStorage.getItem(POS$STORAGE_ALIAS);
            const cachedPOSArray = (cachedStorage ? JSON.parse(cachedStorage) as POSType[] : []);

            data.push(newPOS);

            cachedPOSArray.push(newPOS);
            localStorage.setItem(POS$STORAGE_ALIAS, JSON.stringify(cachedPOSArray));

            updateComponent({ state: "success", data });
        } catch (error) {
            id = 0;

            updateComponent({ state: "error", data: (error as Error) });
        } finally {
            $form.reset();

            toggleForm(t => !t);

            if (id === 0) return;

            setTimeout(() => {
                document.getElementById(`${POS$TABLE_NAME}-${id}`)?.scrollIntoView({ "behavior": "smooth", block: "center" });
            }, 3000);
        }
    };

    function updateSearchText(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setSearchText(text);
        }, 5000);
    };

    function updateSearchText_Immediate(e: React.KeyboardEvent<HTMLInputElement>) {
        const text = (e.target as HTMLInputElement).value;

        if (e.key !== "Enter") return;

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setSearchText(text);
    };

    useEffect(() => {
        updateComponent(c => { return { ...c, state: "fetching" } });

        const cachedStorage = localStorage.getItem(POS$STORAGE_ALIAS);

        if (!cachedStorage) return;

        const cachedPOSArray = JSON.parse(cachedStorage) as POSType[];

        updateComponent({
            data: [
                ...defaultList,
                ...cachedPOSArray
            ], state: "idle"
        });
    }, [defaultList])

    return <section data-component="POS" {...props}>
        <div className="w-full flex flex-row justify-start items-center gap-2">
            {["fetching", "loading"].includes(component.state) && <LoadingIcon className="animate-spin" />}

            <div className="flex flex-row justify-start items-center w-min-[200px]">
                <input id="search-text" type="text" name="província" placeholder="Pesquisa por referência, província, município, tipo ou localização" onKeyDown={updateSearchText_Immediate} onChange={updateSearchText} className="w-full" />

                <button type="button" data-styletype="primary" title="limpar" className="ml-auto" onClick={clearSearchText} disabled={searchText === ""}>
                    <CloseIcon />
                </button>
            </div>


            <button type="button" data-styletype="primary" className="ml-auto" onClick={() => toggleForm(t => !t)}>
                {showForm ? <CloseIcon /> : <AddIcon />}

                {showForm ? "Cancelar" : "Adicionar POS"}
            </button>
        </div>

        <form onSubmit={post} data-toggled={showForm}>
            <fieldset>
                <label>
                    <span>Província</span>

                    <br />

                    <input type="text" name="província" placeholder="província" required />
                </label>

                <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <label>
                        <span>Latitude</span>

                        <br />

                        <input type="text" name="lat" placeholder="+/-0.0000" required />
                    </label>

                    <label>
                        <span>Longitude</span>

                        <br />

                        <input type="text" name="lng" placeholder="+/-0.0000" required />
                    </label>
                </div>

                <label>
                    <span>Município</span>

                    <br />

                    <input type="text" name="município" placeholder="município" required />
                </label>

                <label>
                    <span>Tipo</span>

                    <br />

                    <select name="tipo" required defaultValue="">
                        <option value="" hidden>Escolha um tipo</option>
                        {(["loja", "mercado", "quiosque", "supermercado"] as StoreType[]).map(st => <option key={st} value={st}>{st}</option>)}
                    </select>
                </label>
            </fieldset>

            <button type="submit" data-styletype="primary" className="w-full">
                <AddIcon />

                Criar POS
            </button>
        </form>

        {component.state === "error" && <div data-state="error" onClick={() => updateComponent({ state: "idle", data: defaultList })}>
            <CloseIcon />

            {(component.data as Error).message}
        </div>}

        <DynamicTable name={POS$TABLE_NAME} className={["w-full", showForm ? "opacity-5" : ""].join(" ")} {...{ list }} />
    </section>;
}

export default POS;