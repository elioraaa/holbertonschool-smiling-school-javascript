import MainNavbar from "../../components/NavBar/MainNavbar.jsx";
import CoursesP from "../../components/Courses/courses.jsx";
import Footer from "../../components/Footer/footer.jsx";
import VideoPart from "../../components/Courses/videos.jsx";
import VideoFilter from "../../components/Courses/sortby.jsx";

const CoursesPage = () => {
    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoFilter />
            <VideoPart />
            <Footer />
        </>
    );
};

export default CoursesPage;
