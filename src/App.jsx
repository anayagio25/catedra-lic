import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Ahuachapan from "./components/departments/Ahuachapan";
import Cabañas from "./components/departments/Cabañas";
import Chalatenango from "./components/departments/Chalatenango";
import Cuscatlan from "./components/departments/Cuscatlan";
import LaLibertad from "./components/departments/LaLibertad";
import LaPaz from "./components/departments/LaPaz";
import SantaAna from "./components/departments/SantaAna";
import Sonsonate from "./components/departments/Sonsonate";
import Morazan from "./components/departments/Morazan";
import SanVicente from "./components/departments/SanVicente";
import Usulutan from "./components/departments/Usulutan";
import SanMiguel from "./components/departments/SanMiguel";
import Developers from "./components/Developers";
import Header from "./components/Header";
import Map from "./components/Map";
import LaUnion from "./components/departments/LaUnion";
import SanSalvador from "./components/departments/SanSalvador";

function App() {
  return (
    <div className="App vh-100">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Map />} />
          <Route path="devs" element={<Developers />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="santa-ana" element={<SantaAna />} />
          <Route path="ahuachapan" element={<Ahuachapan />} />
          <Route path="sonsonate" element={<Sonsonate />} />
          <Route path="la-libertad" element={<LaLibertad />} />
          <Route path="chalatenango" element={<Chalatenango />} />
          <Route path="san-salvador" element={<SanSalvador />} />
          <Route path="cuscatlan" element={<Cuscatlan />} />
          <Route path="la-paz" element={<LaPaz />} />
          <Route path="san-vicente" element={<SanVicente />} />
          <Route path="cabañas" element={<Cabañas />} />
          <Route path="usulutan" element={<Usulutan />} />
          <Route path="san-miguel" element={<SanMiguel />} />
          <Route path="morazan" element={<Morazan />} />
          <Route path="la-union" element={<LaUnion />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
