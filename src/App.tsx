
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewContact from "./component/ViewContact";
import CreateContactForm from "./component/CreateContactForm";
import EdditContactForm from "./component/EditContactForm";
import ContactChartsAndMaps from "./component/Maps";
import LineChart from "./component/Chart";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import configureStore from "./Redux/store/contactStore";

// Initialze the client
const queryClient = new QueryClient();
const store = configureStore([]);

export default function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewContact />} />
            <Route path="/contact-form" element={<CreateContactForm />} />
            <Route path="/edit-contact-form" element={<EdditContactForm />} />
            <Route path="/maps" element={<ContactChartsAndMaps />} />
            <Route path="/charts" element={<LineChart />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </QueryClientProvider>

  );
}