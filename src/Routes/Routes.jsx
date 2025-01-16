import {
    createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Profile from "../Pages/Dashboard/Profile/Profile";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Order from "../Pages/Dashboard/Order/Order";
import AdminHostRoute from "./AdminHostRoute";

import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/ManageProduct/UpdateProduct";


import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import SearchResults from "../Pages/SearchResults/SearchResults";
import PopularPodcut from "../Pages/PopularProduct/PopularPodcut";
import JustForYou from "../Pages/JustForYou/JustForYou";
import ReturnPolicy from "../Pages/ReturnPolicy/ReturnPolicy";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Faq from "../Pages/Faq/Faq";
import ShippingAndDelivery from "../Pages/ShippingAndDelivery/ShippingAndDelivery";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllProducts from "../Pages/AllProducts/AllProducts";


import AddMenu from "../Pages/Dashboard/AddMenu/AddMenu";
import ManageMenu from "../Pages/Dashboard/ManageMenu/ManageMenu";
import UpdateSubmenu from "../Pages/Dashboard/ManageMenu/UpdateSubmenu";
import SubmenusProducts from "../Pages/SubmenusProduct/SubmenusProducts";
import AddBanner from "../Pages/Dashboard/AddBanner/AddBanner";
import ManageBanner from "../Pages/Dashboard/ManageBanner/ManageBanner";
import LocalStoreCart from "../Pages/LocalStoreCart/LocalStoreCart";
import CategoryShoping from "../Pages/CategoryShoping/CategoryShoping";
import BlogLayout from "../Layout/BlogLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout></MainLaout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                
            },
            {
                path:"/:menu",
                element:<SubmenusProducts></SubmenusProducts>
            },
            {
                path:"/collection/:menu",
                element:<CategoryShoping></CategoryShoping>
            },
            {
                path: '/my-cart',
                element: <LocalStoreCart></LocalStoreCart>
            },
        
            {
                path:'/popularProducts',
                element:<PopularPodcut></PopularPodcut>
            },
            {
                path:'/justForYou',
                element:<JustForYou></JustForYou>
            },
            {
                path:'/allProducts',
                element:<AllProducts></AllProducts>
            },

           
           
            // ============================================================================/> 
            // Search routs 
            {
                path:'/search',
                element:<SearchResults></SearchResults>
            },
            {
                path:'/returnPolicy',
                element:<ReturnPolicy></ReturnPolicy>
            },
            {
                path:'/termsConditons',
                element:<TermsConditions></TermsConditions>
            },
            {
                path:'/privecyPolicy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            
            {
                path:'/shippingAndDelivery',
                element:<ShippingAndDelivery></ShippingAndDelivery>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
        ]
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'add-menu',
                element: <AdminHostRoute><AddMenu></AddMenu></AdminHostRoute>
            },
            {
                path: 'manage-menu',
                element: <AdminHostRoute><ManageMenu></ManageMenu></AdminHostRoute>
            },
            {
                path: 'updatemenu/:id',
                element: <AdminHostRoute><UpdateSubmenu></UpdateSubmenu> </AdminHostRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/submenu/${params.id}`),
                
            },
            {
                path: 'add-product',
                element: <AdminHostRoute><AddProduct></AddProduct></AdminHostRoute>
            },
            {
                path: 'add-banner',
                element: <AdminHostRoute><AddBanner></AddBanner></AdminHostRoute>
            },

            {
                path: 'manage-banner',
                element: <AdminHostRoute><ManageBanner></ManageBanner></AdminHostRoute>
            },
            {
                path: 'manage-product',
                element: <AdminHostRoute><ManageProduct></ManageProduct></AdminHostRoute>
            },
            {
                path: 'updateProduct/:id',
                element: <AdminHostRoute><UpdateProduct></UpdateProduct></AdminHostRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                
            },
          
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'order',
                element: <AdminHostRoute><Order></Order></AdminHostRoute>
            },
            {
                path: 'my-order',
                element: <MyOrder></MyOrder>
            }
        ]
    },
    {
        path:'/blogs',
        element:<BlogLayout></BlogLayout>
    }
]);