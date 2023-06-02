import { createRoot } from "react-dom/client";
import { Chart, registerables } from "chart.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { MetronicI18nProvider } from "./_metronic/i18n/Metronici18n";
import "./_metronic/assets/sass/style.scss";
import "./_metronic/assets/sass/plugins.scss";
import "./_metronic/assets/sass/style.react.scss";
import { AppRoutes } from "./app/routes/AppRoutes";
import { AuthProvider, setupAxios } from "./app/components/auth";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./app/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "./app/helpers/apiRequest";

setupAxios(axiosInstance);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <Provider store={store}>
          <AuthProvider>
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={10000}
              hideProgressBar={false}
            />
          </AuthProvider>
        </Provider>
      </MetronicI18nProvider>
    </QueryClientProvider>
  );
}
