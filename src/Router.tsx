import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Home } from "./pages/home";
import { Payment } from "./pages/payment";
import { SuccessPurchase } from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route
          path={"/payment/success/:purchase_id"}
          element={<SuccessPurchase />}
        />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
