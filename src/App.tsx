import './index.css';
import Index from './admin/index.tsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LandPage } from './landpage/landpage.tsx';
import {HomePage} from './landpage/view/Home.tsx'
import {AboutPage} from './landpage/view/About.tsx';
import { BeOneOfUsPage } from './landpage/view/BeOneOfUs.tsx';
import { EventPage } from './landpage/view/Event.tsx';
import { GivePage } from './landpage/view/Give.tsx';
import { MinistriesPage } from './landpage/view/Ministries.tsx';
import { LivePage } from './landpage/view/Live.tsx';
import Dashboard from './admin/pages/dashboard.tsx';
import MemberRecord from './admin/pages/member_record.tsx';
import Church_Leaders from './admin/pages/church_leaders.tsx';
import Department_Officers from './admin/pages/department_officers.tsx';
import Events from './admin/pages/events.tsx';
import TithesAndOffering from './admin/pages/tither_and_offering.tsx';
import Inventory_Records from './admin/pages/inventory_records.tsx';
import Ministries from './admin/pages/ministries.tsx';
import Ministry_Record from './admin/pages/minstry_record.tsx';
import Baptism_Record from './admin/pages/baptism_record.tsx';
import Child_Dedication from './admin/pages/child_dedication.tsx';
import Marriage from './admin/pages/marriage.tsx';
import Marriage_Record from './admin/pages/marriage_record.tsx';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/landpage" />} />
          <Route path='/landpage' element={<LandPage />}>
             <Route index  element={<HomePage/>} />
             <Route index path="about" element={<AboutPage/>} />
             <Route index path="beoneofus" element={<BeOneOfUsPage/>} />
             <Route index path="event" element={<EventPage/>} />
             <Route index path="live" element={<LivePage/>} />
             <Route index path="give" element={<GivePage/>} />
             <Route index path="ministries" element={<MinistriesPage/>} />
          </Route>

          {/* Admin layout with nested routes */}
          <Route path="/admin" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route index path="member-record" element={<MemberRecord />} />
            <Route index path="church-leaders" element={<Church_Leaders />} />
            <Route index path="department-officers" element={<Department_Officers />} />
            <Route index path="events" element={<Events />} />
            <Route index path="tithes-and-offering" element={<TithesAndOffering />} />
            <Route index path="inventory-records" element={<Inventory_Records />} />
            <Route index path="ministries" element={<Ministries />} />
            <Route index path="ministry-record" element={<Ministry_Record />} />
            <Route index path="baptism-record" element={<Baptism_Record />} />
            <Route index path="child-dedication" element={<Child_Dedication />} />
            <Route index path="marriage" element={<Marriage />} />
            <Route index path="marriage-record" element={<Marriage_Record />} />
          </Route>


        </Routes>
      </Router>

    </>
  )
}

export default App
