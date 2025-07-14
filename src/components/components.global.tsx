import Icons from "@/app/icons";

const {
    // Calendar1Icon,
    // DashboardIcon,
    CheckInIcon,
    HomeIcon,
    MegaphoneIcon,
    PointOfSaleIcon,
    InventoryIcon,
    UsersIcon
} = Icons;

export const COMP_FOOTER_LINKS = [
    { id: "h", name: "Home", link: "/", icon: <HomeIcon /> },
    { id: "t", name: "Equipas", link: "/manager", icon: <UsersIcon /> },
    { id: "p", name: "Pontos de Venda", link: "/pos", icon: <PointOfSaleIcon /> },
    { id: "v", name: "Visitas", link: "/visits", icon: <CheckInIcon /> },
    { id: "i", name: "Inventário", link: "/stock", icon: <InventoryIcon /> },
    { id: "c", name: "Campanhas", link: "/campaigns", icon: <MegaphoneIcon /> },
    // { id: "p", name: "Roteiros", link: "/planner", icon: <Calendar1Icon /> },
    // { id: "a", name: "Dados", link: "/analyst", icon: <DashboardIcon /> },
];

const ComponentGlobalVariables = {
    FOOTER_LINKS: COMP_FOOTER_LINKS
};

export default ComponentGlobalVariables;