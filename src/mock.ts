import MotherAIImage from "pub/images/mother.jpg";
import CokeImg from "pub/images/coke.jpg";
import ChipsAhoyImg from "pub/images/chips.jpg";
import AlimoOilImg from "pub/images/oil.jpg";
import TunaCanImg from "pub/images/tuna.jpg";
import LaysImg from "pub/images/lays.jpg";
import RiceImg from "pub/images/basmati-rice.webp";
import SoapImg from "pub/images/blue-soap.webp";
import OMOImg from "pub/images/omo.jpeg";
import WaterImg from "pub/images/water.webp";
import MangoImg from "pub/images/mango.webp";
import OIKOSImg from "pub/images/oikos.webp";
import CornFImg from "pub/images/corn-flower.webp";
import FrozenChickenImg from "pub/images/frozen-chicken.jpg";
import ToothPasteImg from "pub/images/tooth-paste.webp";
import MariaImg from "pub/images/maria.jpg";
import UHTMilkImg from "pub/images/milk-uht.jpeg";
import LiptonImg from "pub/images/lipton-tea.webp";
import CreamCrackersImg from "pub/images/cream-crackers.webp";
import GingaImg from "pub/images/ginga.webp";
import { KPIType, Province, StoreType, WithId } from "./types";
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
    "CasadosFrescos": [
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
    "Deskontao": [],
    "Intermarket": [],
    "Kero": [],
    "MAXI": [],
    "Shoprite": [],
};

type GraphDataType = Record<"col" | "pos" | "brd", { labels: string[], data: number[] }>;
export const LINE_GRAPH_DATA: Record<EBrandType, GraphDataType> = {
    "Angomart": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [40, 52, 60] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [28, 37, 44, 59, 33] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [12, 25, 88, 31, 6] }
    },
    "CANDANDO": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [77, 62, 41] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [70, 65, 57, 43, 38] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [18, 5, 66, 24, 11] }
    },
    "CasadosFrescos": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [51, 47, 38] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [39, 42, 30, 36, 28] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [5, 23, 54, 19, 7] }
    },
    "Deskontao": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [63, 49, 57] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [55, 66, 71, 48, 34] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [14, 8, 92, 21, 3] }
    },
    "Intermarket": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [58, 63, 45] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [49, 51, 60, 58, 47] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [9, 19, 75, 30, 4] }
    },
    "Kero": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [82, 66, 70] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [61, 77, 85, 69, 58] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [25, 13, 102, 37, 16] }
    },
    "MAXI": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [65, 59, 80] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [65, 59, 80, 81, 56] },
        brd: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba', 'Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [65, 59, 80, 81, 56, 1, 43, 99, 23, 6, 10] }
    },
    "Shoprite": {
        col: { labels: ['Cidade', 'Kilamba', 'Talatona'], data: [71, 53, 64] },
        pos: { labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'], data: [62, 60, 58, 74, 41] },
        brd: { labels: ['Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'], data: [7, 31, 84, 29, 14] }
    }
};

type ProductType = {
    id: number,
    name: string,
    sold: number,
    trend: "u" | "d",
    thumbnail: StaticImageData
};

export const PRODUCTS: Record<string, ProductType[]> = {
    "Angomart": [
        { id: 6, name: "Arroz branco (1kg)", sold: 1325, trend: "u", thumbnail: RiceImg },
        { id: 7, name: "Sabão Azul e Branco", sold: 420, trend: "d", thumbnail: SoapImg }
    ],
    "CANDANDO": [
        { id: 8, name: "Detergente líquido OMO", sold: 978, trend: "u", thumbnail: OMOImg },
        { id: 9, name: "Água mineral Dooja (6L)", sold: 332, trend: "d", thumbnail: WaterImg }
    ],
    "CasadosFrescos": [
        { id: 10, name: "Manga fresca (kg)", sold: 198, trend: "u", thumbnail: MangoImg },
        { id: 11, name: "Iogurte natural", sold: 123, trend: "d", thumbnail: OIKOSImg }
    ],
    "Deskontao": [
        { id: 12, name: "Farinha de milho (500g)", sold: 785, trend: "u", thumbnail: CornFImg },
        { id: 13, name: "Frango congelado (kg)", sold: 254, trend: "d", thumbnail: FrozenChickenImg }
    ],
    "Intermarket": [
        { id: 14, name: "Pasta de dentes Colgate", sold: 911, trend: "u", thumbnail: ToothPasteImg },
        { id: 15, name: "Bolacha Maria", sold: 387, trend: "d", thumbnail: MariaImg }
    ],
    "Kero": [
        { id: 16, name: "Leite UHT Candando", sold: 1421, trend: "u", thumbnail: UHTMilkImg },
        { id: 17, name: "Chá Lipton (caixa)", sold: 69, trend: "d", thumbnail: LiptonImg }
    ],
    "MAXI": [
        { id: 1, name: "Coca-cola", sold: 3213, trend: "u", thumbnail: CokeImg },
        { id: 2, name: "Chips Ahoy", sold: 132, trend: "d", thumbnail: ChipsAhoyImg },
        { id: 3, name: "Lays", sold: 45, trend: "d", thumbnail: LaysImg },
        { id: 4, name: "Óleo vegetal (ALIMO)", sold: 768, trend: "u", thumbnail: AlimoOilImg },
        { id: 5, name: "Atum", sold: 1034, trend: "d", thumbnail: TunaCanImg }
    ],
    "Shoprite": [
        { id: 18, name: "Café Ginga (250g)", sold: 1165, trend: "u", thumbnail: GingaImg },
        { id: 19, name: "Biscoito Cream Crackers", sold: 218, trend: "d", thumbnail: CreamCrackersImg }
    ]
};

type VisitationType = {
    id: number,
    "província": EProvince,
    "localidade": string,
    "promotor": string,
    "visitas": number,
    "ruturas": number
};

export const VISITATIONS: Record<EBrandType, VisitationType[]> = {
    "Angomart": [
        { id: 2, "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "província": "Cabinda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
        { id: 4, "província": "Benguela" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "CANDANDO": [
        { id: 3, "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
        { id: 4, "província": "Moxico" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "CasadosFrescos": [
        { id: 4, "província": "Luanda" as EProvince, "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
    ],
    "Deskontao": [
        { id: 1, "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 }
    ],
    "Intermarket": [
        { id: 1, "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "província": "Luanda" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "província": "Luanda" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 }
    ],
    "Kero": [
        { id: 1, "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
        { id: 2, "província": "Huambo" as EProvince, "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
        { id: 3, "província": "Benguela" as EProvince, "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
    ],
    "MAXI": [
        { id: 1, "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
    ],
    "Shoprite": [
        { id: 1, "província": "Luanda" as EProvince, "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
    ],
};

type UserType = {
    id: number,
    "nome": string,
    "e-mail": string,
    "tipo": string
}

export const USERS: Record<EBrandType, UserType[]> = {
    "Angomart": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Carolina Pereira", "e-mail": "carolina.pereira@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Miguel Santos", "e-mail": "miguel.santos@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Fernanda Luís", "e-mail": "fernanda.luis@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Pedro Nzau", "e-mail": "pedro.nzau@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Mariana Costa", "e-mail": "mariana.costa@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Rafael Domingos", "e-mail": "rafael.domingos@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Beatriz Melo", "e-mail": "beatriz.melo@executa.ao", "tipo": "Técnico" }
    ],
    "CANDANDO": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "José Kandimba", "e-mail": "jose.kandimba@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Ana Kiluanje", "e-mail": "ana.kiluanje@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Carlos Mateus", "e-mail": "carlos.mateus@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Marta Chicola", "e-mail": "marta.chicola@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "António Benguela", "e-mail": "antonio.benguela@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Luísa Fernandes", "e-mail": "luisa.fernandes@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Daniel Quimbundo", "e-mail": "daniel.quimbundo@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Patrícia Neto", "e-mail": "patricia.neto@executa.ao", "tipo": "Promotor" },
        { id: 10, "nome": "Francisco Dumbo", "e-mail": "francisco.dumbo@executa.ao", "tipo": "Promotor" }
    ],
    "CasadosFrescos": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Esperança Silva", "e-mail": "esperanca.silva@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Manuel Gaspar", "e-mail": "manuel.gaspar@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Rosa Mukongo", "e-mail": "rosa.mukongo@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Tomás Bento", "e-mail": "tomas.bento@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Isabel Muhongo", "e-mail": "isabel.muhongo@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Joaquim Tchissola", "e-mail": "joaquim.tchissola@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Cristina Baptista", "e-mail": "cristina.baptista@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Domingos Kuvango", "e-mail": "domingos.kuvango@executa.ao", "tipo": "Promotor" }
    ],
    "Deskontao": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Helena Macedo", "e-mail": "helena.macedo@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Artur Kalungo", "e-mail": "artur.kalungo@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Sónia Kiala", "e-mail": "sonia.kiala@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Benedito Ngola", "e-mail": "benedito.ngola@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Lurdes Chitangua", "e-mail": "lurdes.chitangua@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Osvaldo Pinto", "e-mail": "osvaldo.pinto@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Júlia Mandume", "e-mail": "julia.mandume@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Armando Dala", "e-mail": "armando.dala@executa.ao", "tipo": "Promotor" },
        { id: 10, "nome": "Conceição Malebo", "e-mail": "conceicao.malebo@executa.ao", "tipo": "Promotor" },
        { id: 11, "nome": "Mário Tchihongo", "e-mail": "mario.tchihongo@executa.ao", "tipo": "Gestor" },
        { id: 12, "nome": "Graça Kundonge", "e-mail": "graca.kundonge@executa.ao", "tipo": "Técnico" }
    ],
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
    "Kero": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Nádia Correia", "e-mail": "nadia.correia@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Henrique Katunda", "e-mail": "henrique.katunda@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Vanessa Tchiungo", "e-mail": "vanessa.tchiungo@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Rui Kassoma", "e-mail": "rui.kassoma@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Teresa Mbungo", "e-mail": "teresa.mbungo@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Bernardo Tchissola", "e-mail": "bernardo.tchissola@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Palmira Nzau", "e-mail": "palmira.nzau@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Edmundo Kalumbu", "e-mail": "edmundo.kalumbu@executa.ao", "tipo": "Promotor" },
        { id: 10, "nome": "Celeste Ngola", "e-mail": "celeste.ngola@executa.ao", "tipo": "Promotor" }
    ],
    "MAXI": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Vítor Kambala", "e-mail": "vitor.kambala@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Cláudia Muhongo", "e-mail": "claudia.muhongo@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Eduardo Tchivango", "e-mail": "eduardo.tchivango@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Dulce Matias", "e-mail": "dulce.matias@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Frederico Gomes", "e-mail": "frederico.gomes@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Sandra Kiluanje", "e-mail": "sandra.kiluanje@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Adão Chitangua", "e-mail": "adao.chitangua@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Lúcia Domingos", "e-mail": "lucia.domingos@executa.ao", "tipo": "Promotor" },
        { id: 10, "nome": "Gaspar Nzau", "e-mail": "gaspar.nzau@executa.ao", "tipo": "Promotor" },
        { id: 11, "nome": "Odete Mukongo", "e-mail": "odete.mukongo@executa.ao", "tipo": "Gestor" },
        { id: 12, "nome": "Florindo Kalungo", "e-mail": "florindo.kalungo@executa.ao", "tipo": "Técnico" },
        { id: 13, "nome": "Noémia Tchissola", "e-mail": "noemia.tchissola@executa.ao", "tipo": "Promotor" },
        { id: 14, "nome": "Octávio Ngola", "e-mail": "octavio.ngola@executa.ao", "tipo": "Promotor" }
    ],
    "Shoprite": [
        { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
        { id: 2, "nome": "Eugénia Kasola", "e-mail": "eugenia.kasola@executa.ao", "tipo": "Gestor" },
        { id: 3, "nome": "Sebastião Kundonge", "e-mail": "sebastiao.kundonge@executa.ao", "tipo": "Promotor" },
        { id: 4, "nome": "Natália Tchiungo", "e-mail": "natalia.tchiungo@executa.ao", "tipo": "Técnico" },
        { id: 5, "nome": "Augusto Malebo", "e-mail": "augusto.malebo@executa.ao", "tipo": "Promotor" },
        { id: 6, "nome": "Piedade Mukongo", "e-mail": "piedade.mukongo@executa.ao", "tipo": "Promotor" },
        { id: 7, "nome": "Filipe Kandimba", "e-mail": "filipe.kandimba@executa.ao", "tipo": "Gestor" },
        { id: 8, "nome": "Alzira Ngola", "e-mail": "alzira.ngola@executa.ao", "tipo": "Técnico" },
        { id: 9, "nome": "Paulino Tchissola", "e-mail": "paulino.tchissola@executa.ao", "tipo": "Promotor" },
        { id: 10, "nome": "Dulcineia Kiala", "e-mail": "dulcineia.kiala@executa.ao", "tipo": "Promotor" },
        { id: 11, "nome": "Leonel Dala", "e-mail": "leonel.dala@executa.ao", "tipo": "Gestor" },
        { id: 12, "nome": "Esperança Chitangua", "e-mail": "esperanca.chitangua@executa.ao", "tipo": "Técnico" },
        { id: 13, "nome": "Silvino Mbungo", "e-mail": "silvino.mbungo@executa.ao", "tipo": "Promotor" },
        { id: 14, "nome": "Zulmira Kalungo", "e-mail": "zulmira.kalungo@executa.ao", "tipo": "Promotor" },
        { id: 15, "nome": "Rodrigo Nzau", "e-mail": "rodrigo.nzau@executa.ao", "tipo": "Gestor" },
        { id: 16, "nome": "Carmen Tchihongo", "e-mail": "carmen.tchihongo@executa.ao", "tipo": "Técnico" }
    ],
};

export type POSType = WithId<{
    "referência": string,
    "província": Province,
    "município": string,
    "localização (lat:lng)": `${number}:${number}`,
    "tipo": StoreType
}>;

export const POS: Record<EBrandType, POSType[]> = {
    "Angomart": [
        { "id": 1, "referência": "POS-AMT001234567", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8069:13.2342", "tipo": "supermercado" },
        { "id": 2, "referência": "POS-AMT001234568", "província": "Luanda", "município": "Cacuaco", "localização (lat:lng)": "-8.7842:13.1643", "tipo": "loja" },
        { "id": 3, "referência": "POS-AMT001234569", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.5763:13.4045", "tipo": "supermercado" },
        { "id": 4, "referência": "POS-AMT001234570", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9172:13.4932", "tipo": "loja" },
        { "id": 5, "referência": "POS-AMT001234571", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8432:13.2842", "tipo": "mercado" },
        { "id": 6, "referência": "POS-AMT001234572", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.7763:15.7393", "tipo": "supermercado" },
        { "id": 7, "referência": "POS-AMT001234573", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5452:16.3452", "tipo": "loja" },
        { "id": 8, "referência": "POS-AMT001234574", "província": "Bengo", "município": "Caxito", "localização (lat:lng)": "-8.5763:13.6645", "tipo": "mercado" }
    ],
    "CANDANDO": [
        { "id": 41, "referência": "POS-CDD987654321", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8169:13.2442", "tipo": "supermercado" },
        { "id": 42, "referência": "POS-CDD987654322", "província": "Luanda", "município": "Belas", "localização (lat:lng)": "-8.9152:13.1942", "tipo": "loja" },
        { "id": 43, "referência": "POS-CDD987654323", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.3623:13.5545", "tipo": "supermercado" },
        { "id": 44, "referência": "POS-CDD987654324", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9220:13.5073", "tipo": "loja" },
        { "id": 45, "referência": "POS-CDD987654325", "província": "Namibe", "município": "Moçâmedes", "localização (lat:lng)": "-15.2023:12.1565", "tipo": "mercado" },
        { "id": 46, "referência": "POS-CDD987654326", "província": "Luanda", "município": "Cacuaco", "localização (lat:lng)": "-8.7532:13.1643", "tipo": "loja" },
        { "id": 47, "referência": "POS-CDD987654327", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6224:15.0556", "tipo": "supermercado" },
        { "id": 48, "referência": "POS-CDD987654328", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.2774:14.2552", "tipo": "loja" },
        { "id": 49, "referência": "POS-CDD987654329", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.7863:15.7493", "tipo": "supermercado" },
        { "id": 50, "referência": "POS-CDD987654330", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.5863:13.4145", "tipo": "mercado" }
    ],
    "CasadosFrescos": [
        { "id": 51, "referência": "POS-CDF123456789", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8269:13.2542", "tipo": "supermercado" },
        { "id": 52, "referência": "POS-CDF123456790", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8532:13.2942", "tipo": "loja" },
        { "id": 53, "referência": "POS-CDF123456791", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.5963:13.4245", "tipo": "supermercado" },
        { "id": 54, "referência": "POS-CDF123456792", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9320:13.5173", "tipo": "loja" },
        { "id": 55, "referência": "POS-CDF123456793", "província": "Luanda", "município": "Belas", "localização (lat:lng)": "-8.9252:13.2042", "tipo": "mercado" },
        { "id": 56, "referência": "POS-CDF123456794", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.7963:15.7593", "tipo": "supermercado" },
        { "id": 57, "referência": "POS-CDF123456795", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.3723:13.5645", "tipo": "loja" },
        { "id": 58, "referência": "POS-CDF123456796", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5552:16.3552", "tipo": "mercado" },
        { "id": 59, "referência": "POS-CDF123456797", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.2874:14.2652", "tipo": "loja" },
        { "id": 60, "referência": "POS-CDF123456798", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6324:15.0656", "tipo": "supermercado" }
    ],
    "Deskontao": [
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
    "Intermarket": [
        { "id": 61, "referência": "POS-INT555666777", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8369:13.2642", "tipo": "supermercado" },
        { "id": 62, "referência": "POS-INT555666778", "província": "Luanda", "município": "Cacuaco", "localização (lat:lng)": "-8.7632:13.1743", "tipo": "loja" },
        { "id": 63, "referência": "POS-INT555666779", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.6063:13.4345", "tipo": "supermercado" },
        { "id": 64, "referência": "POS-INT555666780", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9420:13.5273", "tipo": "loja" },
        { "id": 65, "referência": "POS-INT555666781", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8632:13.3042", "tipo": "mercado" },
        { "id": 66, "referência": "POS-INT555666782", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.8063:15.7693", "tipo": "supermercado" },
        { "id": 67, "referência": "POS-INT555666783", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.3823:13.5745", "tipo": "loja" },
        { "id": 68, "referência": "POS-INT555666784", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5652:16.3652", "tipo": "mercado" },
        { "id": 69, "referência": "POS-INT555666785", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.2974:14.2752", "tipo": "loja" },
        { "id": 70, "referência": "POS-INT555666786", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6424:15.0756", "tipo": "supermercado" },
        { "id": 71, "referência": "POS-INT555666787", "província": "Namibe", "município": "Moçâmedes", "localização (lat:lng)": "-15.2123:12.1665", "tipo": "loja" },
        { "id": 72, "referência": "POS-INT555666788", "província": "Lunda Norte", "município": "Dundo", "localização (lat:lng)": "-7.3974:20.7923", "tipo": "mercado" }
    ],
    "Kero": [
        { "id": 81, "referência": "POS-KER888999000", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8469:13.2742", "tipo": "supermercado" },
        { "id": 82, "referência": "POS-KER888999001", "província": "Luanda", "município": "Belas", "localização (lat:lng)": "-8.9352:13.2142", "tipo": "loja" },
        { "id": 83, "referência": "POS-KER888999002", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.6163:13.4445", "tipo": "supermercado" },
        { "id": 84, "referência": "POS-KER888999003", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9520:13.5373", "tipo": "loja" },
        { "id": 85, "referência": "POS-KER888999004", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8732:13.3142", "tipo": "mercado" },
        { "id": 86, "referência": "POS-KER888999005", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.8163:15.7793", "tipo": "supermercado" },
        { "id": 87, "referência": "POS-KER888999006", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.3923:13.5845", "tipo": "loja" },
        { "id": 88, "referência": "POS-KER888999007", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5752:16.3752", "tipo": "quiosque" },
        { "id": 89, "referência": "POS-KER888999008", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.3074:14.2852", "tipo": "loja" },
        { "id": 90, "referência": "POS-KER888999009", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6524:15.0856", "tipo": "mercado" }
    ],
    "MAXI": [
        { "id": 91, "referência": "POS-MXI111222333", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8569:13.2842", "tipo": "supermercado" },
        { "id": 92, "referência": "POS-MXI111222334", "província": "Luanda", "município": "Cacuaco", "localização (lat:lng)": "-8.7732:13.1843", "tipo": "loja" },
        { "id": 93, "referência": "POS-MXI111222335", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.6263:13.4545", "tipo": "supermercado" },
        { "id": 94, "referência": "POS-MXI111222336", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9620:13.5473", "tipo": "loja" },
        { "id": 95, "referência": "POS-MXI111222337", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8832:13.3242", "tipo": "mercado" },
        { "id": 96, "referência": "POS-MXI111222338", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.8263:15.7893", "tipo": "supermercado" },
        { "id": 97, "referência": "POS-MXI111222339", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.4023:13.5945", "tipo": "loja" },
        { "id": 98, "referência": "POS-MXI111222340", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5852:16.3852", "tipo": "mercado" },
        { "id": 99, "referência": "POS-MXI111222341", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.3174:14.2952", "tipo": "loja" },
        { "id": 100, "referência": "POS-MXI111222342", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6624:15.0956", "tipo": "supermercado" },
        { "id": 101, "referência": "POS-MXI111222343", "província": "Namibe", "município": "Moçâmedes", "localização (lat:lng)": "-15.2223:12.1765", "tipo": "loja" },
        { "id": 102, "referência": "POS-MXI111222344", "província": "Lunda Norte", "município": "Dundo", "localização (lat:lng)": "-7.4074:20.8023", "tipo": "mercado" },
        { "id": 103, "referência": "POS-MXI111222345", "província": "Cunene", "município": "Ondjiva", "localização (lat:lng)": "-17.0732:15.1442", "tipo": "loja" },
        { "id": 104, "referência": "POS-MXI111222346", "província": "Moxico", "município": "Luena", "localização (lat:lng)": "-11.7932:19.9062", "tipo": "supermercado" }
    ],
    "Shoprite": [
        { "id": 105, "referência": "POS-SHP444555666", "província": "Luanda", "município": "Luanda", "localização (lat:lng)": "-8.8669:13.2942", "tipo": "supermercado" },
        { "id": 106, "referência": "POS-SHP444555667", "província": "Luanda", "município": "Belas", "localização (lat:lng)": "-8.9452:13.2242", "tipo": "supermercado" },
        { "id": 107, "referência": "POS-SHP444555668", "província": "Benguela", "município": "Benguela", "localização (lat:lng)": "-12.6363:13.4645", "tipo": "supermercado" },
        { "id": 108, "referência": "POS-SHP444555669", "província": "Huíla", "município": "Lubango", "localização (lat:lng)": "-14.9720:13.5573", "tipo": "supermercado" },
        { "id": 109, "referência": "POS-SHP444555670", "província": "Luanda", "município": "Viana", "localização (lat:lng)": "-8.8932:13.3342", "tipo": "supermercado" },
        { "id": 110, "referência": "POS-SHP444555671", "província": "Huambo", "município": "Huambo", "localização (lat:lng)": "-12.8363:15.7993", "tipo": "supermercado" },
        { "id": 111, "referência": "POS-SHP444555672", "província": "Benguela", "município": "Lobito", "localização (lat:lng)": "-12.4123:13.6045", "tipo": "supermercado" },
        { "id": 112, "referência": "POS-SHP444555673", "província": "Malanje", "município": "Malanje", "localização (lat:lng)": "-9.5952:16.3952", "tipo": "supermercado" },
        { "id": 113, "referência": "POS-SHP444555674", "província": "Zaire", "município": "Mbanza Kongo", "localização (lat:lng)": "-6.3274:14.3052", "tipo": "supermercado" },
        { "id": 114, "referência": "POS-SHP444555675", "província": "Uíge", "município": "Uíge", "localização (lat:lng)": "-7.6724:15.1056", "tipo": "supermercado" },
        { "id": 115, "referência": "POS-SHP444555676", "província": "Namibe", "município": "Moçâmedes", "localização (lat:lng)": "-15.2323:12.1865", "tipo": "supermercado" },
        { "id": 116, "referência": "POS-SHP444555677", "província": "Lunda Norte", "município": "Dundo", "localização (lat:lng)": "-7.4174:20.8123", "tipo": "supermercado" },
        { "id": 117, "referência": "POS-SHP444555678", "província": "Cunene", "município": "Ondjiva", "localização (lat:lng)": "-17.0832:15.1542", "tipo": "supermercado" },
        { "id": 118, "referência": "POS-SHP444555679", "província": "Moxico", "município": "Luena", "localização (lat:lng)": "-11.8032:19.9162", "tipo": "supermercado" },
        { "id": 119, "referência": "POS-SHP444555680", "província": "Cuando Cubango", "município": "Menongue", "localização (lat:lng)": "-14.6705:17.6923", "tipo": "supermercado" },
        { "id": 120, "referência": "POS-SHP444555681", "província": "Bengo", "município": "Caxito", "localização (lat:lng)": "-8.5863:13.6745", "tipo": "supermercado" }
    ],
};

export const KPIS: Record<EBrandType, KPIType[]> = {
    "Angomart": [
        { id: "sales", title: "Equipas em campo hoje", value: 324, tendency: -3 },
        { id: "visits", title: "Pontos de venda ativos", value: VISITATIONS["Angomart"].length, tendency: 10 },
        { id: "increase", title: "Nível médio de stock", value: 10, tendency: 3 },
        { id: "products", title: "Campanhas ativas", value: PRODUCTS["Angomart"].length, tendency: 0 }
    ],
    "CANDANDO": [
        { id: "sales", title: "Operações concluídas hoje", value: 287, tendency: 5 },
        { id: "visits", title: "Novos pontos ativados", value: VISITATIONS["CANDANDO"].length, tendency: 8 },
        { id: "increase", title: "Reposição média de produtos", value: 12, tendency: 1 },
        { id: "products", title: "Campanhas em curso", value: PRODUCTS["CANDANDO"].length, tendency: -1 }
    ],
    "CasadosFrescos": [
        { id: "sales", title: "Visitas de promotores", value: 129, tendency: -2 },
        { id: "visits", title: "Lojas com vendas hoje", value: VISITATIONS["CasadosFrescos"].length, tendency: 6 },
        { id: "increase", title: "Rotação de produtos frescos", value: 15, tendency: 4 },
        { id: "products", title: "Campanhas internas", value: PRODUCTS["CasadosFrescos"].length, tendency: 0 }
    ],
    "Deskontao": [
        { id: "sales", title: "Pedidos atendidos hoje", value: 452, tendency: 7 },
        { id: "visits", title: "Superfícies cobertas", value: VISITATIONS["Deskontao"].length, tendency: 9 },
        { id: "increase", title: "Média de novas entradas", value: 8, tendency: -1 },
        { id: "products", title: "Campanhas regionais", value: PRODUCTS["Deskontao"].length, tendency: 0 }
    ],
    "Intermarket": [
        { id: "sales", title: "Vendas processadas hoje", value: 298, tendency: 6 },
        { id: "visits", title: "Mercados ativos", value: VISITATIONS["Intermarket"].length, tendency: 5 },
        { id: "increase", title: "Fluxo médio de produtos", value: 13, tendency: 2 },
        { id: "products", title: "Promoções visíveis", value: PRODUCTS["Intermarket"].length, tendency: 1 }
    ],
    "Kero": [
        { id: "sales", title: "Registros de vendas", value: 507, tendency: -4 },
        { id: "visits", title: "Centros com operação", value: VISITATIONS["Kero"].length, tendency: 11 },
        { id: "increase", title: "Stock médio atual", value: 9, tendency: 3 },
        { id: "products", title: "Campanhas especiais", value: PRODUCTS["Kero"].length, tendency: -1 }
    ],
    "MAXI": [
        { id: "sales", title: "Total de vendas hoje", value: 689, tendency: 12 },
        { id: "visits", title: "Visibilidade em municípios", value: VISITATIONS["MAXI"].length, tendency: 10 },
        { id: "increase", title: "Capacidade média de stock", value: 11, tendency: 2 },
        { id: "products", title: "Campanhas MAX", value: PRODUCTS["MAXI"].length, tendency: 1 }
    ],
    "Shoprite": [
        { id: "sales", title: "Volume de transações", value: 442, tendency: 6 },
        { id: "visits", title: "Pontos ativos", value: VISITATIONS["Shoprite"].length, tendency: 7 },
        { id: "increase", title: "Taxa média de reposição", value: 10, tendency: 3 },
        { id: "products", title: "Campanhas em destaque", value: PRODUCTS["Shoprite"].length, tendency: 0 }
    ]
};