export type WithId<T> = {
    id: number
} & T;

export type Province =
    | "Luanda"
    | "Benguela"
    | "Huíla"
    | "Namibe"
    | "Bengo"
    | "Uíge"
    | "Lunda Norte"
    | "Zaire"
    | "Malanje"
    | "Huambo"
    | "Cunene"
    | "Moxico"
    | "Cuando Cubango";

export type StoreType = "loja" | "mercado" | "supermercado" | "quiosque";

export type APIResponseType<T> = {
    data: T,
    success: boolean,
    message: string,
    error?: string,
    code?: string
}

export type ComponentStateType<D, C="idle"> = { 
    state: "loading" | "success" | "idle" | "error" | C,
    data: D | Error | null;
}