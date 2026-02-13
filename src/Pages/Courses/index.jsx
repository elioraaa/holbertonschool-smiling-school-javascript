import MainNavbar from "../../components/NavBar/MainNavbar.jsx";
import CoursesP from "../../components/Courses/courses.jsx";
import Footer from "../../components/Footer/footer.jsx";
import VideoPart from "../../components/Courses/videos.jsx";
import VideoFilter from "../../components/Courses/sortby.jsx";
import { useState } from "react";

const CoursesPage = () => {
    const [filters, setFilters] = useState({
        search: "",
        level: "All",
        sort: "Most Popular"
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoFilter filters={filters} onFilterChange={handleFilterChange} />
            <VideoPart filters={filters} />
            <Footer />
        </>
    );
};

export default CoursesPage;
