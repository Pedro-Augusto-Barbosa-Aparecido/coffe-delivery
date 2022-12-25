import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Home } from "./pages/home";
import { Payment } from "./pages/payment";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/payment"} element={<Payment />} />
      </Route>
    </Routes>
  );
}
