import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Page404 from "containers/Page404/Page404";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import PageHome2 from "containers/PageHome/PageHome2";
import ProductDetailPage from "containers/ProductDetailPage/ProductDetailPage";
import ProductDetailPage2 from "containers/ProductDetailPage/ProductDetailPage2";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountBilling from "containers/AccountPage/AccountBilling";
import AccountOrder from "containers/AccountPage/AccountOrder";
import CartPage from "containers/ProductDetailPage/CartPage";
import CheckoutPage from "containers/PageCheckout/CheckoutPage";
import PageCollection2 from "containers/PageCollection2";
import { Toaster } from "react-hot-toast";
import TestDash from "components/TestDash";
import VerticalLayout from "containers/Dashboard/VerticalLayouts/VerticalLayout";
import LayoutPage from "containers/LayoutPage";

export const pages: Page[] = [
  { path: "/", component: PageHome2 },
  //
  { path: "/product-detail", component: ProductDetailPage },
  { path: "/product-detail-2", component: ProductDetailPage2 },
  //
  { path: "/page-collection-2", component: PageCollection2 },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  //
  { path: "/account", component: AccountPage },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-change-password", component: AccountPass },
  { path: "/account-billing", component: AccountBilling },
  { path: "/account-my-order", component: AccountOrder },
  //
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckoutPage },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const dashboardRoutes = [{ path: "/testDash", component: <TestDash /> }];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Routes>
        {pages.map(({ component: Component, path }, index) => {
          return (
            <Route
              key={index}
              element={
                <LayoutPage>
                  <Component />
                </LayoutPage>
              }
              path={path}
            />
          );
        })}

        <Route>
          {dashboardRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<VerticalLayout>{route.component}</VerticalLayout>}
              key={idx}
            />
          ))}
        </Route>
        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
