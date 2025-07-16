import { ComponentStateType } from "./types";

export const DEFAULT_COMPONENT_STATE: ComponentStateType<object> = {
    data: null,
    state: "idle"
}

export const BrandsMenuDialog$STORAGE_ALIAS = `BrandsMenuDialog$CACHED`;