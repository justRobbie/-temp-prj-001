import Icons from "@/app/icons";

const {
    // Calendar1Icon,
    // DashboardIcon,
    HomeIcon,
    MegaphoneIcon,
    UsersIcon
} = Icons;

export const COMP_FOOTER_LINKS = [
    { id: "h", name: "Home", link: "/", icon: <HomeIcon /> },
    { id: "t", name: "Equipas e Utilizadores", link: "/manager", icon: <UsersIcon /> },
    // { id: "p", name: "Roteiros", link: "/planner", icon: <Calendar1Icon /> },
    // { id: "a", name: "Dados", link: "/analyst", icon: <DashboardIcon /> },
    { id: "c", name: "Campanhas", link: "/campaigns", icon: <MegaphoneIcon /> },
];

const ComponentGlobalVariables = {
    FOOTER_LINKS: COMP_FOOTER_LINKS
};

export default ComponentGlobalVariables;