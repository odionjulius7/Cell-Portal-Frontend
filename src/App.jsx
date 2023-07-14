import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SuperAdmin from "./pages/SuperAdmin";
import LaisonOfficer from "./pages/LaisonOfficer";
import RegionalOfficer from "./pages/RegionalOfficer";
import CellLeader from "./pages/CellLeader";
import MainLayout from "./components/admin-components/MainLayoutSuper";
import DownloadReport from "./pages/DownloadReport";
import DownloadRegion from "./pages/RegionReport";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import ZoneList from "./pages/ZoneList";
import AllCell from "./pages/AllCell";
import CellMeetingReport from "./pages/CellMeetingReport";
import CellMembers from "./pages/CellMembers";

function App() {
  // role = ["super", "cell-L", "liaison-O", "regional-L"]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route element={<ProtectedRoute roles={["super"]} />}>
            <Route index element={<SuperAdmin />} />
            <Route path="all-report" element={<DownloadReport />} />
            <Route path="zone-list" element={<ZoneList />} />
            <Route path="all-cells" element={<AllCell />} />
            <Route
              path="download/zone/report/:id"
              element={<DownloadRegion />}
            />
          </Route>
          <Route element={<ProtectedRoute roles={["liaison-O"]} />}>
            <Route path="liaison" element={<LaisonOfficer />} />
          </Route>
          <Route element={<ProtectedRoute roles={["regional-L"]} />}>
            <Route path="region" element={<RegionalOfficer />} />
          </Route>
          <Route element={<ProtectedRoute roles={["cell-L"]} />}>
            <Route path="cell" element={<CellLeader />} />
            <Route path="submit-report" element={<CellMeetingReport />} />
            <Route path="cell-members" element={<CellMembers />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="/admin" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute roles={["super"]} element={<SuperAdmin />} />
            }
          />
          <Route
            path="liaison"
            element={
              <ProtectedRoute
                roles={["liaison-O"]}
                element={<LaisonOfficer />}
              />
            }
          />
          <Route
            path="region"
            element={
              <ProtectedRoute
                roles={["regional-L"]}
                element={<RegionalOfficer />}
              />
            }
          />
          <Route
            path="cell"
            element={
              <ProtectedRoute roles={["cell-L"]} element={<CellLeader />} />
            }
          />
          <Route
            path="all-report"
            element={
              <ProtectedRoute roles={["super"]} element={<DownloadReport />} />
            }
          />
          <Route
            path="download-zone-report"
            element={
              <ProtectedRoute
                roles={["regional-L"]}
                element={<DownloadRegion />}
              />
            }
          />
        </Route> */
}

{
  /* <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<SuperAdmin />} />
          <Route path="liaison" element={<LaisonOfficer />} />
          <Route path="region" element={<RegionalOfficer />} />
          <Route path="cell" element={<CellLeader />} />
          <Route path="all-report" element={<DownloadReport />} />
          <Route path="download-zone-report" element={<DownloadRegion />} />
        </Route>
      </Routes>
    </Router> */
}
