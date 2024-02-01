import { FC, ReactNode, useEffect, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const MainPage=lazy(()=>import('../pages/MainPage'));
const HomePage=lazy(()=>import('../pages/HomePage'));
const AboutPage =lazy(()=>import('../pages/AboutPage'))
const ResourcesPage =lazy(()=>import('../pages/ResourcesPage'))
const ParticipantStories=lazy(()=>import('../pages/ParticipantStories'));
const BusinessServices=lazy(()=>import('../pages/BusinessServices')); 
const SocialEnterprise =lazy(()=>import('../pages/SocialEnterprise'));
const CorporateNews =lazy(()=>import( '../pages/CorporateNews'))  ;
const RealEstateServices=lazy(()=>import('../pages/RealEstateServices'))   ;
const SocialMediaPage=lazy(()=>import( '../pages/SocialMediaPage'));
const  EmploymentHub=lazy(()=>import( '../pages/EmploymentHub'));
const ActivityHub =lazy(()=>import('../pages/ActivityHub'));
const BusinessHub =lazy(()=>import('../pages/BusinessHub'))   ;
const ContactUsPage=lazy(()=>import('../pages/ContactUs'))   ;
const NDISPrivacy =lazy(()=>import('../pages/NdisPrivacy'))   ;
const TaxReceipts=lazy(()=>import('../pages/TaxReceipts'))   ;
const RefundPolicy=lazy(()=>import('../pages/RefundPolicy'));
const WebsiteDisclaimer=lazy(()=>import('../pages/WebsiteDisclaimer'))   ;
const PrivacyPolicy=lazy(()=>import('../pages/PrivacyPolicy'))   ;
const AdvocacyPage=lazy(()=>import('../pages/Advocacy'))   ;
const DetailsPage =lazy(()=>import( '../pages/DetailsPage'))  ;
const NeuroInclusiveMindset=lazy(()=>import('../pages/NeuroInclusiveMindset'));
const NeurodiverseWorkforce=lazy(()=>import( '../pages/NeurodiverseWorkforce'));
const NeurodiversityHire=lazy(()=>import( '../pages/NeurodiversityHire'));
const ESports=lazy(()=>import('../pages/ESports'));
const SpeciallyMade=lazy(()=>import('../pages/SpeciallyMade'))   ;
const Hamper =lazy(()=>import('../pages/Hamper'))   ;
const ExpansiveNetwork=lazy(()=>import('../pages/ExpansiveNetwork'))   ;
const LatestJobs=lazy(()=>import( '../pages/LatestJobs'))  ;
const EmploymentAdvice=lazy(()=>import('../pages/EmploymentAdvice'))   ;
const SupportForBusinessOwners =lazy(()=>import( '../pages/SupportForBusinessOwners'))  ;
const UpdatedWithEvents =lazy(()=>import('../pages/UpdatedWithEvents'));   
const ContactCoordinator =lazy(()=>import('../pages/ContactCoordinator'))   ;
const DonatePage =lazy(()=>import('../pages/DonatePage'))   ;
const VolunteerPage =lazy(()=>import('../pages/VolunteerPage'))   ;
const SuccessPage =lazy(()=>import('../pages/SuccessPage'))   ;
const FailurePage =lazy(()=>import('../pages/FailurePage'))   ;
const GamingHub =lazy(()=>import( '../pages/GamingHub'))  ;
const PackingPage =lazy(()=>import( '../pages/PackingPage'))  ;

interface MyComponentProps {
  children: ReactNode;
}

const ScrollToTop: FC<MyComponentProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return <>{children}</>;
};

const RoutesApp: FC = () => {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/restaurant-services" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<ParticipantStories />} />
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/social-enterprise" element={<SocialEnterprise />} />
          <Route path="/corporate-news" element={<CorporateNews />} />
          <Route
            path="/real-estate-services"
            element={<RealEstateServices />}
          />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/employment-hub" element={<EmploymentHub />} />
          <Route path="/activity-hub" element={<ActivityHub />} />
          <Route path="/business-hub" element={<BusinessHub />} />
          <Route path="/gaming-hub" element={<GamingHub />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/ndis-privacy" element={<NDISPrivacy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/tax-receipts" element={<TaxReceipts />} />
          <Route path="/website-disclaimer" element={<WebsiteDisclaimer />} />
          <Route path="/advocacy" element={<AdvocacyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:category/:id" element={<DetailsPage />} />
          <Route
            path="/neuro-inclusive-mindset"
            element={<NeuroInclusiveMindset />}
          />
          <Route
            path="/neurodiverse-workforce"
            element={<NeurodiverseWorkforce />}
          />
          <Route
            path="/neurodiversity-hire-process"
            element={<NeurodiversityHire />}
          />
          <Route path="/e-sports" element={<ESports />} />
          <Route path="/specially-made" element={<SpeciallyMade />} />
          <Route path="/packing" element={<PackingPage />} />
          <Route path="/hamper" element={<Hamper />} />
          <Route path="/expansive-network" element={<ExpansiveNetwork />} />
          <Route path="/latest-jobs" element={<LatestJobs />} />
          <Route path="/employment-advice" element={<EmploymentAdvice />} />
          <Route
            path="/support-for-business-owners"
            element={<SupportForBusinessOwners />}
          />
          <Route
            path="/keep-updated-with-events"
            element={<UpdatedWithEvents />}
          />
          <Route
            path="/contact-to-coordinator"
            element={<ContactCoordinator />}
          />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/success_donation" element={<SuccessPage />} />
          <Route path="/failure_donation" element={<FailurePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
        </Routes>
      </Layout>
    </ScrollToTop>
  );
};

export default RoutesApp;
