import Icons from "@/app/icons";

const {
    // Calendar1Icon,
    // DashboardIcon,
    HomeIcon,
    MegaphoneIcon,
    PointOfSaleIcon,
    UsersIcon
} = Icons;

export const COMP_FOOTER_LINKS = [
    { id: "h", name: "Home", link: "/", icon: <HomeIcon /> },
    { id: "t", name: "Equipas", link: "/manager", icon: <UsersIcon /> },
    { id: "p", name: "Pontos de Venda", link: "/pos", icon: <PointOfSaleIcon /> },
    // { id: "p", name: "Roteiros", link: "/planner", icon: <Calendar1Icon /> },
    // { id: "a", name: "Dados", link: "/analyst", icon: <DashboardIcon /> },
    { id: "c", name: "Campanhas", link: "/campaigns", icon: <MegaphoneIcon /> },
];

const ComponentGlobalVariables = {
    FOOTER_LINKS: COMP_FOOTER_LINKS
};

export default ComponentGlobalVariables;