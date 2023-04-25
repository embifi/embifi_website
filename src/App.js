import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import Blog from "./Pages/Blog";
import LendingPartners from "./Pages/LendingPartners";
import Login from "./Pages/Login";
import EmployeeDetails from "./Pages/EmployeeDetails";
import PersonalDetails from "./Pages/PersonalDetails";
import WriteBlog from "./Pages/WriteBlog";
import MyBlogs from "./Pages/MyBlogs";
import BlogDetails from "./Pages/BlogDetails";
import BLogs from "./Pages/BLogs";
import ViewBlog from "./Pages/ViewBlog";
import ProtectedRoute from "./auth/ProtectedRoute";
import UserContextProvider from "./context/UserContext";
import PublicRoute from "./auth/PublicRoute";
import TermsPage from "./Pages/TermsPage";
import TeamsPage from "./Pages/TeamsPage";

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <GlobalContext>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:section" element={<Home />} />
          <Route exact path="/privacy-policy" element={<Terms />} />
          <Route exact path="/terms" element={<TermsPage />} />
          <Route exact path="/lending-partners" element={<LendingPartners />} />
          {/* <Route exact path="/team" element={<OurTeam />} /> */}
          {/* Sample Blog for SEO purpose */}
          <Route
            exact
            path="/blog/the-primary-dos-dnd-donts-of-a-personal-loan-to-maintain-financial-security"
            element={<Blog />}
          />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/our-team" element={<TeamsPage />} />
          <Route exact path="/blogs" element={<BLogs />} />
          <Route exact path="/view-blog/:blogTitle/" element={<ViewBlog />} />

          <Route element={<PublicRoute />}>
          <Route exact path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route exact path="/employee-details" element={<EmployeeDetails />} />
          <Route exact path="/personal-details" element={<PersonalDetails />} />
          <Route exact path="/write-blog" element={<WriteBlog />} />
          <Route exact path="/my-blog" element={<MyBlogs />} />
          <Route exact path="/blog-details" element={<BlogDetails />} />
          </Route>
        </Routes>
      </GlobalContext>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
