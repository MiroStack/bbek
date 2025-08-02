import './index.css';
import Index from './admin/index.tsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LandPage } from './landpage/landpage.tsx';
import { HomePage } from './landpage/view/Home.tsx'
import { AboutPage } from './landpage/view/about/About.tsx';
import { BeOneOfUsPage } from './landpage/view/beoneofus/BeOneOfUs.tsx';
import { EventPage } from './landpage/view/events/Event.tsx';
import { GivePage } from './landpage/view/Give.tsx';
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
import { MemberRecordPage } from './staff/views/church_records/MemberRecord.tsx';
import { EventRecordPage } from './staff/views/church_records/EventRecord.tsx';
import { TithesOfferingPage } from './staff/views/church_records/TitheOffer.tsx';
import { MarriageRecordPage } from './staff/views/church_records/MarriageRecord.tsx';
import { MinistriesStaffPage } from './staff/views/church_records/Ministries.tsx';
import { ChildDedicationPage } from './staff/views/services/ChildDedication.tsx';
import { MessagePage } from './staff/views/maintenance/message.tsx';
import { AuditTrialPage } from './staff/views/maintenance/audit.tsx';
import { WaterBaptism_Page } from './staff/views/services/WaterBaptism.tsx';
import { MemberPage } from './member/member.tsx';
import {DashboardMemberPage} from'./member/views/dashboard.tsx';
import { MinistryStaffPage } from './staff/views/services/MinistryStaff.tsx';
import { MinistriesPage } from './landpage/view/Ministries.tsx';
import { MarriageServicePage } from './staff/views/services/MarriageService.tsx';
import { MyProfile } from './member/views/myprofile/MyProfile.tsx';
import { MyCertificate } from './member/views/myprofile/MyCertificate.tsx';
import { MyDonations } from './member/views/services/MyDonations.tsx';
import { MinistriesMember } from './member/views/services/Ministries.tsx';
import { WaterBaptismMember } from './member/views/services/WaterBaptism.tsx';
import { MarriageMember } from './member/views/services/Marriage.tsx';
import { ChildDedicationMember } from './member/views/services/ChildDedication.tsx';
import { ChurchEventsMember } from './member/views/services/ChurchEvents.tsx';
import { MessageMember } from './member/views/communication/Message.tsx';
import { PrayerRequestMember } from './member/views/communication/PrayerRequest.tsx';

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
            <Route index path="church-record/member-record" element={<MemberRecordPage />} />
            <Route index path="church-record/event-record" element={<EventRecordPage />} />
            <Route index path="church-record/tithe-offering" element={<TithesOfferingPage />} />
            <Route index path="church-record/ministries-record" element={<MinistriesStaffPage />} />
            <Route index path="church-record/marriage-record" element={<MarriageRecordPage />} />

            <Route index path="service/ministry-record" element={<MinistryStaffPage />} />
            <Route index path="service/waterbaptism" element={<WaterBaptism_Page />} />
            <Route index path="service/child-dedication" element={<ChildDedicationPage />} />
            <Route index path="service/marriage-record" element={<MarriageServicePage />} />

            <Route index path="maintenance/message" element={<MessagePage />} />
            <Route index path="maintenance/audit-trial" element={<AuditTrialPage />} />


          </Route>


          <Route path='/member' element={<MemberPage />}>
            <Route index element={<DashboardMemberPage />} />
            <Route path='my-profile' element={<MyProfile/>}/>
            <Route path='my-certificate' element={<MyCertificate/>}/>
            <Route path='my-donation' element={<MyDonations/>}/>
            <Route path='my-ministries' element={<MinistriesMember/>}/>
            <Route path='my-waterbaptism' element={<WaterBaptismMember/>}/>
            <Route path='my-marriage' element={<MarriageMember/>}/>
            <Route path='my-childdedication' element={<ChildDedicationMember/>}/>
            <Route path='my-events' element={<ChurchEventsMember/>}/>
            <Route path='my-message' element={<MessageMember/>}/>
            <Route path='my-prayerrequest' element={<PrayerRequestMember/>}/>
          </Route>


        </Routes>
      </Router>

    </>
  )
}

export default App
