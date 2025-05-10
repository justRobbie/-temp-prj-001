import MotherAIImage from "pub/images/mother.jpg";
import CokeImg from "pub/images/coke.jpg";
import ChipsAhoyImg from "pub/images/chips.jpg";
import AlimoOilImg from "pub/images/oil.jpg";
import TunaCanImg from "pub/images/tuna.jpg";
import LaysImg from "pub/images/lays.jpg";

export const CAMPAIGNS = [
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
];

export const PRODUCTS = [
    { id: 1, name: "Coca-cola", sold: 3213, trend: "u", thumbnail: CokeImg },
    { id: 2, name: "Chips Ahoy", sold: 132, trend: "d", thumbnail: ChipsAhoyImg },
    { id: 3, name: "Lays", sold: 45, trend: "d", thumbnail: LaysImg },
    { id: 4, name: "Óleo vegetal (ALIMO)", sold: 768, trend: "u", thumbnail: AlimoOilImg },
    { id: 5, name: "Atum", sold: 1034, trend: "d", thumbnail: TunaCanImg }
];

export const VISITATIONS = [
    { id: 1, "loja": "Kero", "província": "Luanda", "localidade": "Talatona", "promotor": "João", "visitas": 10, "ruturas": 0 },
    { id: 2, "loja": "MAXI", "província": "Luanda", "localidade": "Morro Bento", "promotor": "André", "visitas": 3, "ruturas": 1 },
    { id: 3, "loja": "CANDANDO", "província": "Luanda", "localidade": "Kinaxixi", "promotor": "Milena", "visitas": 29, "ruturas": 3 },
    { id: 4, "loja": "Shoprite", "província": "Luanda", "localidade": "Palanca", "promotor": "Santos", "visitas": 2, "ruturas": 11 },
];

export const USERS = [
    { id: 1, "nome": "Admin", "e-mail": "admin@executa.ao", "tipo": "Administrador" },
    { id: 2, "nome": "João Mazunga", "e-mail": "joa.amaz@executa.ao", "tipo": "Promotor" },
    { id: 3, "nome": "António Tchicamby", "e-mail": "atchi@executa.ao", "tipo": "Técnico" },
    { id: 4, "nome": "Stella Feroz", "e-mail": "st@executa.ao", "tipo": "Promotor" },
    { id: 5, "nome": "André Okavango", "e-mail": "aok@executa.ao", "tipo": "Promotor" },
    { id: 6, "nome": "Santos Carlos", "e-mail": "carl@executa.ao", "tipo": "Promotor" },
    { id: 7, "nome": "Alberto Gomes", "e-mail": "alberto.gomes@executa.ao", "tipo": "Gestor" },
    { id: 8, "nome": "Giza Ramos", "e-mail": "giza.ramos@executa.ao", "tipo": "Gestor" },
    { id: 9, "nome": "Milena Milena", "e-mail": "mm.promove@executa.ao", "tipo": "Promotor" },
]