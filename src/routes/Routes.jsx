import AddProduct from "../components/admin/AddProduct/AddProduct";
import AdminRoot from "../layout/admin/AdminRoot";
import SiteRoot from "../layout/site/SiteRoot";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Contact from "../pages/site/Contact/Contact";
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
      //Bu açılan zaman useParams istifadə olunmadığı üçün error page-n yerinə keçir
      // {
      //   path: "/:id",
      //   element: <Details />
      // },
      {
        path: "contact",
        element: <Contact/>
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