import { Book, ContactPage, Home, Info, OndemandVideo } from "@mui/icons-material";


export const navItems = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: <Home />
    },
    {
        id: 2,
        title: "Books",
        url: "/books",
        icon: <Book />
    },
    {
        id: 3,
        title: "Videos",
        url: "/videos",
        icon: <OndemandVideo />
    },
    {
        id: 4,
        title: "Learnings",
        url: "/learnings",
        icon: <Book />
    },
    {
        id: 5,
        title: "About",
        url: "/about",
        icon: <Info />
    },
    {
        id: 6,
        title: "Contact",
        url: "/contact",
        icon: <ContactPage />
    },
];