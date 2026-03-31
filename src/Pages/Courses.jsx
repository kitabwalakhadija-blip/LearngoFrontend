// import { Link } from "react-router-dom";
// function Courses() {
//   const Course= [

//   ]
//   return (
//     <>
//       <header class="header">
//         <h1>Explore Our Courses</h1>
//         <p>
//           Discover undergraduate and postgraduate programs offered at LearnGo
//         </p>
//       </header>

//       <section class="courses-container">
//         <h2 class="section-title">Undergraduate Programs (UG)</h2>

//         <div class="course-grid">
//           <div class="course-card">
//             <h3>B.Sc (Computer Science, Mathematics, Physics)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>
//               Focuses on core computer science with strong analytical skills.
//             </p>
//             <Link to="/coursebsc3">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Sc (Computer Science, Mathematics, Statistics)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Ideal for students interested in data and programming.</p>
//             <Link to="/coursebsc1">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Sc (Physics, Chemistry, Mathematics)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Strong foundation in physical sciences.</p>
//             <Link to="/coursebsc2">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Sc (Microbiology, Zoology, Chemistry)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>For careers in biological and medical sciences.</p>
//             <Link to="/coursebsc4">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.A (Economics, Political Science, Sociology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Understanding society, governance, and economics.</p>
//             <Link to="/courseba2">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>BCA (Bachelor of Computer Applications)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Prepares students for software and IT careers.</p>
//             <Link to="/coursebca">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>BBA (Bachelor of Business Administration)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Focus on management and entrepreneurship.</p>
//             <Link to="/coursebba">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Com (Bachelor of Commerce)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Accounting, taxation, and finance fundamentals.</p>
//             <Link to="/coursebcom">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Sc (Biotechnology, Botany, Chemistry)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Focuses on life sciences and laboratory research.</p>
//             <Link to="/coursebsc">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.A (English Literature, History, Psychology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Develops communication, analytical, and writing skills.</p>
//             <Link to="/courseba">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Sc (Information Technology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>

//             <p>Focus on networking, databases, and web technologies.</p>
//             <Link to="/coursebsc6">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>B.Voc (Data Analytics)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Skill-based program in data analysis and visualization.</p>
//             <Link to="/coursebvoc">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>B.Tech (Bachleor in Biotechnology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Focuses on Computer Software.</p>
//             <Link to="/coursebtech">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>BMS (Bachleor in Mangement System)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Focuses on life sciences and laboratory research.</p>
//             <Link to="/coursebms">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>B.Arch (Bachleor in Architecture)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>Focuses on arts.</p>
//             <Link to="/coursebarch">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>B.Sc (Information Technology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>

//             <p>Focus on networking, databases, and web technologies.</p>
//             <Link to="/coursebphar">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//         </div>

//         <h2 class="section-title">Postgraduate Programs (PG)</h2>

//         <div class="course-grid">
//           <div class="course-card">
//             <h3>M.Sc (Computer Science)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Advanced computing concepts and system design.</p>
//             <Link to="/coursemsc">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>M.Com</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Advanced finance, accounting, and economics.</p>
//             <Link to="/coursemcom">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>MA (Mass Communication)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Media, journalism, PR, and advertising careers.</p>
//             <Link to="/coursema">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>M.Sc (Information Technology)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Advanced IT, cloud computing, and cybersecurity.</p>
//             <Link to="/coursemsc2">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>MBA (Marketing & Finance)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Leadership, business strategy, and management skills.</p>
//             <Link to="/coursemba">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>

//           <div class="course-card">
//             <h3>MCA (Master of Computer Applications)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Software development, programming, and systems.</p>
//             <Link to="/coursemca">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>MCA (Master of Biotechnology--7)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Software development, programming, and systems.</p>
//             <Link to="/coursemtech">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>ME (Master in Civil Engineering)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Postgraduate degree in engineering specialization..</p>
//             <Link to="/courseme">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>ME (Master in Arts)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>Postgraduate degree in humanities and social sciences</p>
//             <Link to="/coursemart">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>LLM (Master in Law)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>
//               LL.M (Master of Laws): postgraduate degree focused on advanced
//               legal studies and specialization in law.
//             </p>
//             <Link to="/coursemllm">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>LLM (Master in Business Economics)</h3>
//             <p>
//               <strong>Duration:</strong> 2 Years
//             </p>
//             <p>MBE: Postgraduate degree in business economics.</p>
//             <Link to="/coursembe">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>LLM (Master in Dental Surgery)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>
//               MDS: Advanced postgraduate degree in dental surgery and
//               specialization..
//             </p>
//             <Link to="/coursemds">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>M-Des (Master in Design)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>M.Des: Postgraduate degree in design and creative innovation.</p>
//             <Link to="/coursemdes">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>M-Ftech (Master in Fashion Technology)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>MFTech: Postgraduate degree in fashion technology.</p>
//             <Link to="/coursemftech">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//           <div class="course-card">
//             <h3>M-Ed (Master in Eduction)</h3>
//             <p>
//               <strong>Duration:</strong> 3 Years
//             </p>
//             <p>M.Ed: Postgraduate degree in education.</p>
//             <Link to="/coursemed">
//               <button class="linkBtn">Course Detail</button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default Courses;
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Courses() {
//   const [courses, setCourses] = useState([]);

//   // OLD STATIC COURSES
//   const courseData = [
//     {
//       id: 1,
//       title: "B.Sc (Computer Science, Mathematics, Physics)",
//       duration: "3 Years",
//       description:
//         "Focuses on core computer science with strong analytical skills.",
//       link: "/coursebsc3",
//     },
//     {
//       id: 2,
//       title: "B.Sc (Computer Science, Mathematics, Statistics)",
//       duration: "3 Years",
//       description: "Ideal for students interested in data and programming.",
//       link: "/coursebsc1",
//     },
//     {
//       id: 3,
//       title: "B.Sc (Physics, Chemistry, Mathematics)",
//       duration: "3 Years",
//       description: "Strong foundation in physical sciences.",
//       link: "/coursebsc2",
//     },
//     {
//       id: 4,
//       title: "B.Sc (Microbiology, Zoology, Chemistry)",
//       duration: "3 Years",
//       description: "For careers in biological and medical sciences.",
//       link: "/coursebsc4",
//     },
//     {
//       id: 5,
//       title: "B.A (Economics, Political Science, Sociology)",
//       duration: "3 Years",
//       description: "Understanding society, governance, and economics.",
//       link: "/courseba2",
//     },
//     {
//       id: 6,
//       title: "BCA (Bachelor of Computer Applications)",
//       duration: "3 Years",
//       description: "Prepares students for software and IT careers.",
//       link: "/coursebca",
//     },
//     {
//       id: 7,
//       title: "BBA (Bachelor of Business Administration)",
//       duration: "3 Years",
//       description: "Focus on management and entrepreneurship.",
//       link: "/coursebba",
//     },
//     {
//       id: 8,
//       title: "B.Com (Bachelor of Commerce)",
//       duration: "3 Years",
//       description: "Accounting, taxation, and finance fundamentals.",
//       link: "/coursebcom",
//     },
//     {
//       id: 9,
//       title: "B.Sc (Biotechnology, Botany, Chemistry)",
//       duration: "3 Years",
//       description: "Focuses on life sciences and laboratory research.",
//       link: "/coursebsc",
//     },
//     {
//       id: 10,
//       title: "B.A (English Literature, History, Psychology)",
//       duration: "3 Years",
//       description: "Develops communication, analytical, and writing skills.",
//       link: "/courseba",
//     },
//     {
//       id: 11,
//       title: "B.Sc (Information Technology)",
//       duration: "3 Years",
//       description: "Focus on networking, databases, and web technologies.",
//       link: "/coursebsc6",
//     },

//     {
//       id: 12,
//       title: "B.Voc (Data Analytics)",
//       duration: "3 Years",
//       description: "Skill-based program in data analysis and visualization.",
//       link: "/coursebvoc",
//     },
//     {
//       id: 13,
//       title: "B.Tech (Bachelor in Biotechnology)",
//       duration: "3 Years",
//       description: "Focuses on Computer Software.",
//       link: "/coursebtech",
//     },
//     {
//       id: 14,
//       title: "BMS (Bachelor in Management System)",
//       duration: "3 Years",
//       description: "Management and business strategy.",
//       link: "/coursebms",
//     },
//     {
//       id: 15,
//       title: "B.Arch (Bachelor in Architecture)",
//       duration: "3 Years",
//       description: "Architecture and structural design.",
//       link: "/coursebarch",
//     },
//     {
//       id: 16,
//       title: "B.Pharm (Bachelor in Pharmacy)",
//       duration: "3 Years",
//       description: "Pharmaceutical sciences and drug development.",
//       link: "/coursebphar",
//     },

//     {
//       id: 17,
//       title: "M.Sc (Computer Science)",
//       duration: "2 Years",
//       description: "Advanced computing concepts and system design.",
//       link: "/coursemsc",
//     },
//     {
//       id: 18,
//       title: "M.Com",
//       duration: "2 Years",
//       description: "Advanced finance, accounting, and economics.",
//       link: "/coursemcom",
//     },
//     {
//       id: 19,
//       title: "MA (Mass Communication)",
//       duration: "2 Years",
//       description: "Media, journalism, PR, and advertising careers.",
//       link: "/coursema",
//     },
//     {
//       id: 20,
//       title: "M.Sc (Information Technology)",
//       duration: "2 Years",
//       description: "Advanced IT, cloud computing, and cybersecurity.",
//       link: "/coursemsc2",
//     },
//     {
//       id: 21,
//       title: "MBA (Marketing & Finance)",
//       duration: "2 Years",
//       description: "Leadership, business strategy, and management skills.",
//       link: "/coursemba",
//     },
//     {
//       id: 22,
//       title: "MCA (Master of Computer Applications)",
//       duration: "2 Years",
//       description: "Software development, programming, and systems.",
//       link: "/coursemca",
//     },
//     {
//       id: 23,
//       title: "M.Tech (Biotechnology)",
//       duration: "2 Years",
//       description: "Advanced biotechnology research and innovation.",
//       link: "/coursemtech",
//     },
//     {
//       id: 24,
//       title: "ME (Civil Engineering)",
//       duration: "2 Years",
//       description: "Postgraduate degree in engineering specialization.",
//       link: "/courseme",
//     },
//     {
//       id: 25,
//       title: "MA (Arts)",
//       duration: "2 Years",
//       description: "Postgraduate degree in humanities and social sciences.",
//       link: "/coursemart",
//     },
//     {
//       id: 26,
//       title: "LLM (Master in Law)",
//       duration: "2 Years",
//       description: "Advanced legal studies and specialization in law.",
//       link: "/coursemllm",
//     },
//     {
//       id: 27,
//       title: "MBE (Business Economics)",
//       duration: "2 Years",
//       description: "Postgraduate degree in business economics.",
//       link: "/coursembe",
//     },
//     {
//       id: 28,
//       title: "MDS (Dental Surgery)",
//       duration: "3 Years",
//       description: "Advanced postgraduate degree in dental surgery.",
//       link: "/coursemds",
//     },
//     {
//       id: 29,
//       title: "M.Des (Master in Design)",
//       duration: "3 Years",
//       description: "Postgraduate degree in design and creative innovation.",
//       link: "/coursemdes",
//     },
//     {
//       id: 30,
//       title: "MFTech (Fashion Technology)",
//       duration: "3 Years",
//       description: "Postgraduate degree in fashion technology.",
//       link: "/coursemftech",
//     },
//     {
//       id: 31,
//       title: "M.Ed (Master in Education)",
//       duration: "3 Years",
//       description: "Postgraduate degree in education.",
//       link: "/coursemed",
//     },
//   ];

//   // FETCH COURSES FROM DATABASE
//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/Coursetable");
//       setCourses(res.data);
//     } catch (error) {
//       console.log("Error fetching courses:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // MERGE STATIC + DATABASE COURSES
//   const allCourses = [...courseData, ...courses];

//   return (
//     <>
//       <header className="header">
//         <h1>Explore Our Courses</h1>
//         <p>
//           Discover undergraduate and postgraduate programs offered at LearnGo
//         </p>
//       </header>

//       <section className="courses-container">
//         <div className="course-grid">
//           {allCourses.map((course, index) => (
//             <div className="course-card" key={course._id || course.id || index}>
//               <h3>{course.title}</h3>

//               <p>
//                 <strong>Duration:</strong> {course.duration}
//               </p>

//               <p>{course.description}</p>

//               <Link to={course.link || `/course/${course._id}`}>
//                 <button className="linkBtn">Course Detail</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Courses;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [courseSearch, setCourseSearch] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    // this is coming from top navbar search
    // user types PCM / PCB / Commerce / Arts there
    setSearchTerm(query.get("search") || "");
  }, [location.search]);

  const normalize = (str) => {
    return (str || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .trim();
  };

  const streamCourses = [
    {
      title: "B.Sc (Computer Science, Mathematics, Statistics)",
      stream: ["PCM", "Science"],
    },
    {
      title: "B.Sc (Computer Science, Mathematics, Physics)",
      stream: ["PCM", "Science"],
    },
    {
      title: "B.Sc (Microbiology, Zoology, Chemistry)",
      stream: ["PCB", "Science"],
    },
    {
      title: "B.A (English Literature, History, Psychology)",
      stream: ["Arts"],
    },
    {
      title: "B.Voc (Data Analytics)",
      stream: ["PCM", "Commerce", "Science"],
    },
    {
      title: "B.Sc (Information Technology)",
      stream: ["PCM", "Commerce", "Science"],
    },
    {
      title: "B.Tech (Bachelor in Biotechnology)",
      stream: ["PCB", "Science"],
    },
    {
      title: "BMS (Bachelor in Management System)",
      stream: ["Commerce", "Arts"],
    },
    {
      title: "B.Arch (Bachelor in Architecture)",
      stream: ["PCM", "Science"],
    },
    {
      title: "B.Pharm (Bachelor in Pharmacy)",
      stream: ["PCB", "Science"],
    },
    {
      title: "M.Sc (Computer Science)",
      stream: ["PCM", "Science", "Commerce"],
    },
    {
      title: "M.Com",
      stream: ["Commerce"],
    },
    {
      title: "MA (Mass Communication)",
      stream: ["Arts", "Commerce"],
    },
    {
      title: "M.Sc (Information Technology)",
      stream: ["PCM", "Commerce", "Science"],
    },
    {
      title: "MBA (Marketing & Finance)",
      stream: ["Commerce", "Arts", "Science"],
    },
    {
      title: "MCA (Master of Computer Applications)",
      stream: ["PCM", "Commerce", "Science"],
    },
    {
      title: "M.Tech (Biotechnology)",
      stream: ["PCB", "Science"],
    },
    {
      title: "ME (Civil Engineering)",
      stream: ["PCM", "Science"],
    },
    {
      title: "MA (Arts)",
      stream: ["Arts"],
    },
    {
      title: "LLM (Master in Law)",
      stream: ["Arts", "Commerce"],
    },
    {
      title: "MBE (Business Economics)",
      stream: ["Commerce"],
    },
    {
      title: "MDS (Dental Surgery)",
      stream: ["PCB", "Science"],
    },
    {
      title: "M.Des (Master in Design)",
      stream: ["Arts", "Science"],
    },
    {
      title: "MFTech (Fashion Technology)",
      stream: ["Arts", "Science"],
    },
    {
      title: "M.Ed (Master in Education)",
      stream: ["Arts", "Commerce", "Science"],
    },
    {
      title: "BCA (Bachelor of Computer Applications)",
      stream: ["PCM", "Commerce", "Science"],
    },
    {
      title: "BBA (Bachelor of Business Administration)",
      stream: ["Commerce", "Arts"],
    },
    {
      title: "B.Com (Bachelor of Commerce)",
      stream: ["Commerce"],
    },
    {
      title: "B.Sc (Biotechnology, Botany, Chemistry)",
      stream: ["PCB", "Science"],
    },
  ];

  // FETCH COURSES FROM DATABASE
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/Coursetable");
      setCourses(res.data);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (!courses) return <h2>Loading....</h2>;

  const matchedTitles =
    searchTerm.trim() === ""
      ? courses.map((course) => course.title)
      : streamCourses
          .filter((course) =>
            course.stream.some((s) =>
              s.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
          )
          .map((course) => course.title);

  const getPriority = (course) => {
    const title = course.title.toLowerCase();
    const currentSearch = searchTerm.toLowerCase();

    if (currentSearch === "commerce") {
      if (title.includes("b.com")) return 1;
      if (title.includes("bba")) return 2;
      if (title.includes("bms")) return 3;
      if (title.includes("bca")) return 4;
      if (title.includes("m.com")) return 10;
      if (title.includes("mba")) return 11;
      if (title.startsWith("m.")) return 20;
      return 30;
    }

    if (currentSearch === "pcm" || currentSearch === "science") {
      if (title.includes("b.tech")) return 1;
      if (title.includes("b.sc")) return 2;
      if (title.includes("bca")) return 3;
      if (title.includes("b.arch")) return 4;
      if (title.includes("b.pharm")) return 5;
      if (title.startsWith("m.")) return 20;
      return 30;
    }

    if (currentSearch === "pcb") {
      if (title.includes("b.pharm")) return 1;
      if (title.includes("biotechnology")) return 2;
      if (title.includes("microbiology")) return 3;
      if (title.includes("b.sc")) return 4;
      if (title.startsWith("m.")) return 20;
      return 30;
    }

    if (currentSearch === "arts") {
      if (title.includes("b.a")) return 1;
      if (title.includes("bba")) return 2;
      if (title.includes("bms")) return 3;
      if (title.includes("law")) return 4;
      if (title.startsWith("m.")) return 20;
      return 30;
    }

    return 50;
  };

  const finalCourses = courses
    .filter((course) => {
      const matchesStream =
        searchTerm.trim() === "" || matchedTitles.includes(course.title);

      const matchesCourseSearch =
        courseSearch.trim() === "" ||
        normalize(course.title).includes(normalize(courseSearch));

      return matchesStream && matchesCourseSearch;
    })
    .sort((a, b) => getPriority(a) - getPriority(b));

  return (
    <>
      <header className="header">
        <h1>Explore Our Courses</h1>
        <p>
          Discover undergraduate and postgraduate programs offered at LearnGo
        </p>
      </header>

      <section className="courses-container">
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search course name like B.Sc, BBA, MBA..."
            className="form-control"
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
          />
        </div>

        <div className="course-grid">
          {finalCourses.map((course) => (
            <div className="course-card" key={course._id}>
              <h3>{course.title}</h3>

              <p>
                <strong>Duration:</strong> {course.duration}
              </p>

              <p>{course.description}</p>

              <Link to={course.link}>
                <button className="linkBtn">Course Detail</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
