import './index.css';
import Index from './admin/index.tsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LandPage } from './landpage/landpage.tsx';
import { HomePage } from './landpage/view/Home.tsx'
import { AboutPage } from './landpage/view/about/About.tsx';
import { BeOneOfUsPage } from './landpage/view/beoneofus/BeOneOfUs.tsx';
import { EventPage } from './landpage/view/events/Event.tsx';
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
import ScrollToTop from "./landpage/components/ScrollToTop.tsx";
import { MissionPage } from './landpage/view/about/Mission.tsx';
import { VisionPage } from './landpage/view/about/Vision.tsx';
import { LeadershipPage } from './landpage/view/about/Leadership.tsx';
import { OfficersPage } from './landpage/view/about/Officers.tsx';
import { AboutUsPage } from './landpage/view/about/AboutUs.tsx';
import { AllEventsPage } from './landpage/view/events/AllEvents.tsx';
import { UpcomingEventsPage } from './landpage/view/events/UpcomingEvents.tsx';
import { YearlyEventsPage } from './landpage/view/events/YearlyEvents.tsx';
import { WaterBaptismPage } from './landpage/view/beoneofus/WaterBaptism.tsx';
import { SendPrayerPage } from './landpage/view/beoneofus/SendPrayer.tsx';
import Message from './admin/pages/message.tsx';
import Audit_Trail from './admin/pages/audit_trail.tsx';
import Archives from './admin/pages/archives.tsx';
import User_Account from './admin/pages/user_account.tsx';
import Settings from './admin/pages/settings.tsx';
import { StaffPage } from './staff/staff.tsx';
import { DashboardPage } from './staff/views/Dashboard.tsx';

function App() {

  return (
    <>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Navigate to="/landpage" />} />
          <Route path='/landpage' element={<LandPage />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />}>
              <Route index path="aboutus" element={<AboutUsPage />}></Route>
              <Route index path="mission" element={<MissionPage />}></Route>
              <Route index path="vision" element={<VisionPage />}></Route>
              <Route index path="leadership" element={<LeadershipPage />}></Route>
              <Route index path="officers" element={<OfficersPage />}></Route>
            </Route>
            <Route path='beoneofus' element={<BeOneOfUsPage />}>
              <Route index path="waterbaptism" element={<WaterBaptismPage />}></Route>
              <Route index path="sendprayer" element={<SendPrayerPage />}></Route>
            </Route>
            <Route path='events' element={<EventPage />}>
              <Route index path="allevents" element={<AllEventsPage />}></Route>
              <Route index path="upcomingevents" element={<UpcomingEventsPage />}></Route>
              <Route index path="yearlyevents" element={<YearlyEventsPage />}></Route>
            </Route>
            <Route index path="live" element={<LivePage />} />
            <Route index path="give" element={<GivePage />} />
            <Route index path="ministries" element={<MinistriesPage />} />
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
            <Route index path="message" element={<Message />} />
            <Route index path="audit-trail" element={<Audit_Trail />} />
            <Route index path="archives" element={<Archives />} />
            <Route index path="user-account" element={<User_Account />} />
            <Route index path="settings" element={<Settings />} />
          </Route>

          <Route path='/staff' element={<StaffPage />}>
              <Route index element={<DashboardPage />} />
          </Route>
                     

        </Routes>
      </Router>

    </>
  )
}

export default App
