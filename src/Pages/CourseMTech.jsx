const CourseMTech = () => {
  return (
    <div className="container my-5">
      {/* <!-- Course Title --> */}
      <h1 className="course-title">M.Tech (Master of Technology)</h1>

      {/* <!-- Description --> */}
      <p>
        Master of Technology (M.Tech) is a postgraduate engineering degree
        program aimed at advanced technical knowledge, research, innovation, and
        specialization in engineering and technology domains. The course
        prepares students for careers in research & development, academia,
        high-end engineering roles, and doctoral studies.
      </p>

      {/* <!-- Course Details --> */}
      <p>
        <span className="highlight">Duration –</span> Two Years (4 Semesters)
      </p>
      <p>
        <span className="highlight">Eligibility –</span> B.Tech / B.E /
        Equivalent Degree
      </p>
      <p>
        <span className="highlight">Medium –</span> Hindi & English
      </p>

      {/* <!-- Documents --> */}
      <h2 className="section-title">Documents required for admission:</h2>

      <p>
        Students should submit the following documents along with 2 colour
        recent photographs at the time of admission. Original documents are
        required for verification.
      </p>

      <ul className="doc-list">
        <li>Passport size photographs – 03</li>
        <li>10th Mark sheet photocopy – 03</li>
        <li>12th Mark sheet photocopy – 03</li>
        <li>Graduation Mark sheets – All Semesters (Photocopies)</li>
        <li>Degree Certificate / Provisional Certificate</li>
        <li>Aadhaar Card photocopy – 03</li>
        <li>Transfer / Migration Certificate</li>
        <li>GATE Scorecard (if applicable)</li>
      </ul>

      {/* <!-- Syllabus --> */}
      <h2 className="section-title">Syllabus</h2>

      {/* <!-- Semester 1 --> */}
      <h3 className="semester-title">Semester – I</h3>
      <p>Advanced Engineering Mathematics</p>
      <p>Core Subject – I (Specialization)</p>
      <p>Core Subject – II (Specialization)</p>
      <p>Elective – I</p>
      <p>Research Methodology</p>

      {/* <!-- Semester 2 --> */}
      <h3 className="semester-title">Semester – II</h3>
      <p>Core Subject – III (Specialization)</p>
      <p>Core Subject – IV (Specialization)</p>
      <p>Elective – II</p>
      <p>Elective – III</p>
      <p>Seminar</p>

      {/* <!-- Semester 3 --> */}
      <h3 className="semester-title">Semester – III</h3>
      <p>Elective – IV</p>
      <p>Elective – V</p>
      <p>Project Work – Phase I</p>
      <p>Industry / Research Internship</p>

      {/* <!-- Semester 4 --> */}
      <h3 className="semester-title">Semester – IV</h3>
      <p>Project Work – Phase II (Thesis)</p>
      <p>Dissertation Submission</p>
      <p>Viva Voce</p>
    </div>
  );
};

export default CourseMTech;
