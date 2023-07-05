import "@/styles/globals.css";
import Layout from "../../components/Layout";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "@/store/reducer/rootReducer";
// import sessionStorage from "redux-persist/es/storage/session";
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const persistConfig = {
    key: "root",
    storage,
    // sessionStorage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  const enhancers = applyMiddleware(thunk);
  const composedEnhancers = composeWithDevTools(enhancers);
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
