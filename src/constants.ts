import MotherAIImage from "pub/images/mother.jpg";
import CokeImg from "pub/images/coke.jpg";
import ChipsAhoyImg from "pub/images/chips.jpg";
import AlimoOilImg from "pub/images/oil.jpg";
import TunaCanImg from "pub/images/tuna.jpg";
import LaysImg from "pub/images/lays.jpg";
import { ComponentStateType, KPIType, Province, StoreType, WithId } from "./types";
import { EBrandType, EProvince } from "./app";
import { StaticImageData } from "next/image";

type CampaignType = {
    id: number,
    name: string,
    startDate: Date,
    endDate: Date,
    description: string,
    thumbnails: StaticImageData[],
    products: ProductType[],
    stats: KPIType[]
};

export const CAMPAIGNS: Record<EBrandType, CampaignType[]> = {
    "Angomart": [],
    "CANDANDO": [],
    "Casa dos Frescos": [
        {
            id: 1,
            name: "MÊS DA MULHER",
            startDate: new Date(),
            endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
            description: `No Dia da Mulher Angolana, celebramos a força, a coragem e a resiliência das mulheres que fazem a diferença em nossa sociedade. Essa campanha tem como objetivo homenagear suas conquistas, promover a igualdade de oportunidades e incentivar o empoderamento feminino em diversas áreas.
            Através de eventos culturais, palestras inspiradoras e ações comunitárias, reforçamos a importância do papel da mulher angolana no desenvolvimento do país. Além disso, incentivamos o reconhecimento de suas histórias, talentos e lutas, mostrando ao mundo o impacto positivo que elas têm no presente e no futuro.
            Junte-se a nós nessa celebração e faça parte dessa jornada de valorização, inspiração e mudança!
            `,
            thumbnails: [
                MotherAIImage
            ],
            products: [],
            stats: [],
        },
    ],
    "Deskontão": [],
    "Intermarket": [],
    "Kero": [],
    "MAXI": [],
    "Shoprite": [],
};

type ProductType = {
    id: number,
    name: string,
    sold: number,
    trend: "u" | "d",
    thumbnail: StaticImageData
};

export const PRODUCTS: Record<EBrandType, ProductType[]> = {
    "Angomart": [],
    "CANDANDO": [],
    "Casa dos Frescos": [],
    "Deskontão": [],
    "Intermarket": [],
    "Kero": [],
    "MAXI": [
        { id: 1, name: "Coca-cola", sold: 3213, trend: "u", thumbnail: CokeImg },
        { id: 2, name: "Chips Ahoy", sold: 132, trend: "d", thumbnail: ChipsAhoyImg },
        { id: 3, name: "Lays", sold: 45, trend: "d", thumbnail: LaysImg },
        { id: 4, name: "Óleo vegetal (ALIMO)", sold: 768, trend: "u", thumbnail: AlimoOilImg },
        { id: 5, name: "Atum", sold: 1034, trend: "d", thumbnail: TunaCanImg }
    ],
    "Shoprite": [],
};

type VisitationType = { 
    id: number, 
    "loja": string, 
    "província": EProvince, 
    "localidade": string, 
    "promotor": string, 
    "visitas": number, 
    "ruturas": number 
};

export const VISITATIONS: Record<EBrandType, VisitationType[]> = {
    "Angomart": [
        { id: 2, "loja": "MAXI", "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "loja": "CANDANDO", "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
        { id: 4, "loja": "Shoprite", "província": "Luanda" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "CANDANDO": [
        { id: 3, "loja": "CANDANDO", "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
        { id: 4, "loja": "Shoprite", "província": "Luanda" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "Casa dos Frescos": [
        { id: 4, "loja": "Shoprite", "província": "Luanda" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "Deskontão": [
        { id: 1, "loja": "Kero", "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "loja": "MAXI", "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "loja": "CANDANDO", "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 }
    ],
    "Intermarket": [
        { id: 1, "loja": "Kero", "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "loja": "MAXI", "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "loja": "CANDANDO", "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 }
    ],
    "Kero": [
        { id: 1, "loja": "Kero", "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "loja": "MAXI", "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "loja": "CANDANDO", "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
    ],
    "MAXI": [
        { id: 1, "loja": "Kero", "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
    ],
    "Shoprite": [
        { id: 1, "loja": "Kero", "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
    ],
};

type UserType = {
    id: number,
    "nome": string,
    "e-mail": string,
    "tipo": string
}

export const USERS: Record<EBrandType, UserType[]> = {
    "Angomart": [],
    "CANDANDO": [],
    "Casa dos Frescos": [],
    "Deskontão": [],
    "Intermarket": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "João Mazunga", "e-mail": "joa.amaz@executa.ao", "tipo": "Promotor" },
        { id: 3, "nome": "António Tchicamby", "e-mail": "atchi@executa.ao", "tipo": "Técnico" },
        { id: 4, "nome": "Stella Feroz", "e-mail": "st@executa.ao", "tipo": "Promotor" },
        { id: 5, "nome": "André Okavango", "e-mail": "aok@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Santos Carlos", "e-mail": "carl@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Alberto Gomes", "e-mail": "alberto.gomes@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Giza Ramos", "e-mail": "giza.ramos@executa.ao", "tipo": "Gestor" },
        { id: 9, "nome": "Milena Milena", "e-mail": "mm.promove@executa.ao", "tipo": "Promotor" },
    ],
    "Kero": [],
    "MAXI": [],
    "Shoprite": [],
};

export type POSType = WithId<{
    "referência": `POS-${number}`,
    "província": Province,
    "município": string,
    "localização (lat:lng)": `${number}:${number}`,
    "tipo": StoreType
}>;

export const POS: Record<EBrandType, POSType[]> = {
    "Angomart": [],
    "CANDANDO": [],
    "Casa dos Frescos": [],
    "Deskontão": [
        { "id": 21, "referência": `POS-432547654153`, "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.1432:13.2342", "tipo": "loja" },
        { "id": 22, "referência": "POS-432547654154", "província": "Luanda", "município": "Belas", "localização (lat:lng)": "-8.9052:13.1842", "tipo": "loja" },
        { "id": 23, "referência": "POS-432547654155", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.3523:13.5445", "tipo": "mercado" },
        { "id": 24, "referência": "POS-432547654156", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9120:13.4973", "tipo": "supermercado" },
        { "id": 25, "referência": "POS-432547654157", "província": "Namibe", "município": "Moçâmedes", "localização (lat:lng)": "-15.1923:12.1465", "tipo": "loja" },
        { "id": 26, "referência": "POS-432547654158", "província": "Luanda", "município": "Cacuaco", "localização (lat:lng)": "-8.7432:13.1543", "tipo": "quiosque" },
        { "id": 27, "referência": "POS-432547654159", "província": "Bengo", "município": "Dande", "localização (lat:lng)": "-9.3214:13.4275", "tipo": "loja" },
        { "id": 28, "referência": "POS-432547654160", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6124:15.0456", "tipo": "mercado" },
        { "id": 29, "referência": "POS-432547654161", "província": "Lunda Norte", "município": "Dundo", "localização (lat:lng)": "-7.3874:20.7823", "tipo": "supermercado" },
        { "id": 30, "referência": "POS-432547654162", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.2674:14.2452", "tipo": "loja" },
        { "id": 31, "referência": "POS-432547654163", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5452:16.3452", "tipo": "quiosque" },
        { "id": 32, "referência": "POS-432547654164", "província": "Huambo", "município": "Cuima", "localização (lat:lng)": "-12.7842:15.9642", "tipo": "loja" },
        { "id": 33, "referência": "POS-432547654165", "província": "Cunene", "município": "Ondjiva", "localização (lat:lng)": "-17.0632:15.1342", "tipo": "mercado" },
        { "id": 34, "referência": "POS-432547654166", "província": "Moxico", "município": "Luena", "localização (lat:lng)": "-11.7832:19.8962", "tipo": "supermercado" },
        { "id": 35, "referência": "POS-432547654167", "província": "Cuando Cubango", "município": "Menongue", "localização (lat:lng)": "-14.6605:17.6823", "tipo": "loja" },
        { "id": 36, "referência": "POS-432547654168", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.5523:13.4678", "tipo": "supermercado" },
        { "id": 37, "referência": "POS-432547654169", "província": "Huambo", "município": "Caála", "localização (lat:lng)": "-12.8896:15.9241", "tipo": "mercado" },
        { "id": 38, "referência": "POS-432547654170", "província": "Luanda", "município": "Icolo e Bengo", "localização (lat:lng)": "-9.1432:13.7632", "tipo": "loja" },
        { "id": 39, "referência": "POS-432547654171", "província": "Bengo", "município": "Ambriz", "localização (lat:lng)": "-7.8923:13.9754", "tipo": "quiosque" },
        { "id": 40, "referência": "POS-432547654172", "província": "Zaire", "município": "Soyo", "localização (lat:lng)": "-6.1324:12.3785", "tipo": "mercado" }
    ],
    "Intermarket": [],
    "Kero": [],
    "MAXI": [],
    "Shoprite": [],
};

export const DEFAULT_COMPONENT_STATE: ComponentStateType<object> = {
    data: null,
    state: "idle"
}