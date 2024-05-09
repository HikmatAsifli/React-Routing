import AddProduct from "../components/admin/AddProduct/AddProduct";
import AdminRoot from "../layout/admin/AdminRoot";
import SiteRoot from "../layout/site/SiteRoot";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Details from "../pages/site/Details/Details";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "/:id",
        element: <Details />
      },
      {
        path: "*",
        element: <Error />
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add",
        element: <AddProduct />,
      }
    ],
  },
];

export default ROUTES