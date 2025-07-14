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

export enum EBrandType {
    Kero = "Kero",
    MAXI = "MAXI",
    CANDANDO = "CANDANDO",
    Shoprite = "Shoprite",
    CasaDosFrescos = "Casa dos Frescos",
    Intermarket = "Intermarket",
    Deskontao = "Deskontão",
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
    municipality: string[];
}

class Application {
    stores: StoreType[] = [];

    constructor() {
        this.init();
        
        // Initialize stores with some dummy data
        this.stores.push(...Object.values(EBrandType).map((brand, index) => ({
            id: index,
            name: brand,
            brand,
            location: {
                latitude: 0,
                longitude: 0
            },
            province: EProvince.Luanda,
            municipality: Municipalities.get(brand) || []
        })));
    }

    init() {
        console.log("Application initialized");
    };

    getStore (id: number) {
        return this.stores.find(store => store.id === id);
    }
};

const Executa = new Application();
export default Executa;