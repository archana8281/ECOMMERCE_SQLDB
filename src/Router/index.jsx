import Collection from "../pages/Nanoffer/top";
import Home from "../pages/home";
import LOGIN from "../pages/Authent/authent";
import Cart from "../pages/Form/Add cart/cartpg";
import Add from "../pages/Form/Address/add";
import PAY from "../pages/Form/Pay/pay";
import Finial from "../pages/Form/Pay/Finial/finial";
import Index from "../pages/detailpg";
import Help from "../pages/Help/help";
import About from "../pages/About/about";


const ROUTER = [
  {
    url: "/",
    component: Home,
  },
  {
    url: "/collection/*",
    component: Collection,
  },
  {
    url: "/about/*",
    component: About,
  },
  {
    url: "/help/*",
    component: Help,
  },
  {
    url: "/login",
    component: LOGIN,
  },
  {
    url: "/cartpg",
    component: Cart,
  },
  {
    url: "/add",
    component: Add,
  },
  {
    url: "/pay",
    component: PAY,
  },
  {
    url: "/fin",
    component: Finial,
  },
  {
    url: "/detailpg/:productname",
    component: Index,
  },
];

export { ROUTER };
