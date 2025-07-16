import { StaticImageData } from "next/image";
import AngoMartImg from "pub/images/angomart.webp";
import CandandoImg from "pub/images/candando.webp";
import CasaDosFrescosImg from "pub/images/casa_dos_frescos.webp";
import DeskontaoImg from "pub/images/deskontão.webp";
import IntermarketImg from "pub/images/intermarket.webp";
import KEROImg from "pub/images/kero.webp";
import MAXIImg from "pub/images/maxi.webp";
import ShopriteImg from "pub/images/shoprite.webp";

export enum EProvince {
    Luanda = "Luanda",
    LundaNorte = "Lunda Norte",
    LundaSul = "Lunda Sul",
    Moxico = "Moxico",
    Namibe = "Namibe",
    CuandoCubango = "Cuando Cubango",
    Zaire = "Zaire",
    Bie = "Bie",
    Malanje = "Malanje",
    Uige = "Uige",
    Huambo = "Huambo",
    Benguela = "Benguela",
    Cabinda = "Cabinda",
    Huila = "Huila",
    Cunene = "Cunene",
    CuanzaSul = "Cuanza Sul",
    CuanzaNorte = "Cuanza Norte",
    Bengo = "Bengo"
};

export enum EBrandType {
    Kero = "Kero",
    MAXI = "MAXI",
    CANDANDO = "CANDANDO",
    Shoprite = "Shoprite",
    CasaDosFrescos = "CasadosFrescos",
    Intermarket = "Intermarket",
    Deskontao = "Deskontao",
    Angomart = "Angomart"
};

export type StoreType = {
    id: number;
    name: string;
    brand: EBrandType;
    location: {
        latitude: number;
        longitude: number;
    };
    province: EProvince;
    thumbnail?: StaticImageData;
    municipality: string[];
}

export const Municipalities = new Map([
    ["Luanda", ["Viana", "Belas", "Cacuaco", "Cazenga", "Ingombota", "Kilamba Kiaxi", "Maianga", "Rangel", "Sambizanga"]],
    ["Benguela", ["Lobito", "Catumbela", "Benguela"]],
    ["Huíla", ["Lubango", "Cacula"]],
    ["Namibe", ["Moçâmedes"]],
    ["Uíge", ["Uíge"]],
    ["Lunda Norte", ["Dundo"]],
    ["Lunda Sul", ["Saurimo"]],
    ["Moxico", ["Luena"]],
    ["Cuando Cubango", ["Menongue"]],
    ["Zaire", ["Mbanza Kongo"]]
]);

export const Thumbnails = new Map([
    [EBrandType.Angomart, AngoMartImg],
    [EBrandType.CANDANDO, CandandoImg],
    [EBrandType.CasaDosFrescos, CasaDosFrescosImg],
    [EBrandType.Deskontao, DeskontaoImg],
    [EBrandType.Intermarket, IntermarketImg],
    [EBrandType.Kero, KEROImg],
    [EBrandType.MAXI, MAXIImg],
    [EBrandType.Shoprite, ShopriteImg],
]);

class Application {
    stores: StoreType[] = [];

    constructor() {
        this.init();
    }

    init() {
        console.log("Application initialized");

        // Initialize stores with some dummy data
        this.stores.push(...Object.values(EBrandType).map((brand, index) => ({
            id: index, 
            name: brand, 
            brand, 
            location: { latitude: 0, longitude: 0 }, 
            province: EProvince.Luanda, 
            thumbnail: Thumbnails.get(brand),
            municipality: Municipalities.get(brand) || []
        })));
    };

    getStore (id: number) {
        return this.stores.find(store => store.id === id);
    }
};

const Executa = new Application();
export default Executa;