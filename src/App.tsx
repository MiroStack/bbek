import './index.css';
import Index from './admin/index.tsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LandPage } from './features/landpage/landpage.tsx';
import { Home } from './features/landpage/view/Home.tsx'
import { AboutPage } from './features/landpage/view/about/About.tsx';
import { BeOneOfUsPage } from './features/landpage/view/beoneofus/BeOneOfUs.tsx';
import { GivePage } from './features/landpage/view/Give.tsx';
import { LivePage } from './features/landpage/view/Live.tsx';
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
import ScrollToTop from "./features/landpage/components/ScrollToTop.tsx";
import { MissionPage } from './features/landpage/view/about/Mission.tsx';
import { VisionPage } from './features/landpage/view/about/Vision.tsx';
import { LeadershipPage } from './features/landpage/view/about/Leadership.tsx';
import { OfficersPage } from './features/landpage/view/about/Officers.tsx';
import { AboutUsPage } from './features/landpage/view/about/AboutUs.tsx';
import { AllEventsPage } from './features/landpage/view/events/AllEvents.tsx';
import { WaterBaptismPage } from './features/landpage/view/beoneofus/WaterBaptism.tsx';
import { SendPrayerPage } from './features/landpage/view/beoneofus/SendPrayer.tsx';
import Message from './admin/pages/message.tsx';
import Audit_Trail from './admin/pages/audit_trail.tsx';
import Archives from './admin/pages/archives.tsx';
import User_Account from './admin/pages/user_account.tsx';
import Settings from './admin/pages/settings.tsx';
import { StaffPage } from './features/staff/staff.tsx';

import { MemberRecordPage } from './features/staff/views/church_records/MemberRecord.tsx';
import { EventRecordPage } from './features/staff/views/church_records/EventRecord.tsx';
import { TithesOfferingPage } from './features/staff/views/church_records/TitheOffer.tsx';
import { MarriageRecordPage } from './features/staff/views/church_records/MarriageRecord.tsx';
import { MinistriesStaffPage } from './features/staff/views/church_records/Ministries.tsx';
import { ChildDedicationPage } from './features/staff/views/services/ChildDedication.tsx';
import { MessagePage } from './features/staff/views/maintenance/message.tsx';
import { AuditTrialPage } from './features/staff/views/maintenance/audit.tsx';
import { WaterBaptism_Page } from './features/staff/views/services/WaterBaptism.tsx';
import { MemberPage } from './features/member/member.tsx';
import { DashboardMemberPage } from './features/member/views/dashboard.tsx';
import { MinistryStaffPage } from './features/staff/views/services/MinistryStaff.tsx';
import { AllMinistries } from './features/landpage/view/ministries/AllMinistries.tsx';
import { MarriageServicePage } from './features/staff/views/services/MarriageService.tsx';
import { MyProfile } from './features/member/views/myprofile/MyProfile.tsx';
import { MyCertificate } from './features/member/views/myprofile/MyCertificate.tsx';
import { MyDonations } from './features/member/views/services/MyDonations.tsx';
import { MinistriesMember } from './features/member/views/services/Ministries.tsx';
import { WaterBaptismMember } from './features/member/views/services/WaterBaptism.tsx';
import { MarriageMember } from './features/member/views/services/Marriage.tsx';
import { ChildDedicationMember } from './features/member/views/services/ChildDedication.tsx';
import { ChurchEventsMember } from './features/member/views/services/ChurchEvents.tsx';
import { MessageMember } from './features/member/views/communication/Message.tsx';
import { PrayerRequestMember } from './features/member/views/communication/PrayerRequest.tsx';
import { Homepage } from './features/landpage/view/home/Homepage.tsx';
import { LeadersAndOfficers } from './features/landpage/view/about/LeadersAndOfficers.tsx';
import { PlanYourVisit } from './features/landpage/view/PlanYourVisit.tsx';
import { EventPage } from './features/landpage/view/events/Event.tsx';
import { LearnMoreEvent } from './features/landpage/view/events/LearnMoreEvent.tsx';
import { LearnMoreMinistries } from './features/landpage/view/ministries/LearnMoreMinistries.tsx';
import { MinistryPage } from './features/landpage/view/ministries/Ministry.tsx';
import { LoaderPage } from './features/landpage/components/redirect_page/loader_page.tsx';
import { AdminPage } from './features/administrator/adminPage.tsx';
import { DashboardAdminPage } from './features/administrator/views/DashboardAdmin.tsx';
import { MemberRecordPageAdmin } from './features/administrator/views/church_records/MemberRecord.tsx';
import { EventRecordPageAdmin } from './features/administrator/views/church_records/EventRecord.tsx';
import { TithesOfferingAdminPage } from './features/administrator/views/church_records/TitheOffer.tsx';
import { MinistriesAdminPage } from './features/administrator/views/church_records/Ministries.tsx';
import { WaterBaptismAdminPage } from './features/administrator/views/services/WaterBaptism.tsx';
import { ChildDedicationAdminPage } from './features/administrator/views/services/ChildDedication.tsx';
import { MarriageServiceAdminPage } from './features/administrator/views/services/MarriageService.tsx';
import { MessageAdminPage } from './features/administrator/views/maintenance/message.tsx';
import { AuditTrialAdminPage } from './features/administrator/views/maintenance/audit.tsx';
import { DashboardPage } from './features/staff/views/Dashboard.tsx';
import { ChurchLeadersAdminPage } from './features/administrator/views/church_records/ChurchLeaders.tsx';
import { DepartmentOfficersAdminPage } from './features/administrator/views/church_records/DepartmentOfficers.tsx';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Navigate to="/landpage" />} />
          <Route path="/redirect" element={<LoaderPage />} />
          <Route path='/landpage' element={<LandPage />}>
            <Route index element={<Home />} />
            <Route path='about' element={<AboutPage />}>
              <Route index path="aboutus" element={<AboutUsPage />}></Route>
              <Route index path="leadersandofficers" element={<LeadersAndOfficers />}></Route>
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
              <Route index path="learn-more-event" element={<LearnMoreEvent />}></Route>
            </Route>

            <Route index path="live" element={<LivePage />} />
            <Route index path="give" element={<GivePage />} />

            <Route path="ministries" element={<MinistryPage />}>
              <Route index path="allministry" element={<AllMinistries />}></Route>
              <Route path="learn-more-ministry" element={<LearnMoreMinistries />}></Route>
            </Route>

            <Route index path="plan-your-visit" element={<PlanYourVisit />} />
          </Route>

          {/* Admin layout with nested routes */}
          {/* <Route path="/admin" element={<Index />}>
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
          </Route> */}
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashboardAdminPage />} />
             <Route index path="church-record/church-leaders" element={<ChurchLeadersAdminPage />} />
                <Route index path="church-record/department-officers" element={<DepartmentOfficersAdminPage />} />
            <Route index path="church-record/member-record" element={<MemberRecordPageAdmin />} />
            <Route index path="church-record/event-record" element={<EventRecordPageAdmin />} />
            <Route index path="church-record/tithe-offering" element={<TithesOfferingAdminPage />} />
            <Route index path="church-record/ministries-record" element={<MinistriesAdminPage />} />
            <Route index path="church-record/marriage-record" element={<MarriageRecordPage />} />

            <Route index path="service/waterbaptism" element={<WaterBaptismAdminPage />} />
            <Route index path="service/child-dedication" element={<ChildDedicationAdminPage />} />
            <Route index path="service/marriage-record" element={<MarriageServiceAdminPage />} />

            <Route index path="maintenance/message" element={<MessageAdminPage />} />
            <Route index path="maintenance/audit-trial" element={<AuditTrialAdminPage />} />
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
            <Route path='my-profile' element={<MyProfile />} />
            <Route path='my-certificate' element={<MyCertificate />} />
            <Route path='my-donation' element={<MyDonations />} />
            <Route path='my-ministries' element={<MinistriesMember />} />
            <Route path='my-waterbaptism' element={<WaterBaptismMember />} />
            <Route path='my-marriage' element={<MarriageMember />} />
            <Route path='my-childdedication' element={<ChildDedicationMember />} />
            <Route path='my-events' element={<ChurchEventsMember />} />
            <Route path='my-message' element={<MessageMember />} />
            <Route path='my-prayerrequest' element={<PrayerRequestMember />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
