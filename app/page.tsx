import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <Image
            src="/profile.jpg"
            alt="Ayushi Baliyan"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Ayushi Baliyan
            </h1>

            <h2 className="text-2xl text-blue-600 font-semibold mb-4">
              Frontend Developer | Full-Stack Web Developer
            </h2>

            <p className="max-w-2xl text-lg text-gray-600">
              Final-year Computer Science undergraduate with experience building
              full-stack web applications using Python, Django, JavaScript,
              React, HTML, CSS and modern web technologies.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:baliyanayushi3@gmail.com"
            className="px-5 py-2 bg-black text-white rounded-lg"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ayushi-baliyan"
            target="_blank"
            className="px-5 py-2 border rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Next.js",
            "Python",
            "Django",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-xl shadow text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* Resume Builder */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">
            Digital Heroes Resume Builder
          </h3>

          <p className="mt-3 text-gray-600">
            A professional resume builder that helps users create and download
            resumes quickly with a clean and user-friendly interface.
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="https://digital-heroes-resume-builder.vercel.app/"
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/ayushi-baliyan"
              target="_blank"
              className="px-4 py-2 border rounded-lg"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Task Tracker */}
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h3 className="text-2xl font-semibold">
            Task Tracker (MERN Stack)
          </h3>

          <p className="mt-3 text-gray-600">
            A full-stack Task Tracker application built with React, Node.js,
            Express.js and MongoDB. It supports CRUD operations, REST APIs,
            responsive UI and real-time task management.
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="https://task-tracker-ayushi8.vercel.app/"
              target="_blank"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/ayushi-baliyan/task-tracker"
              target="_blank"
              className="px-4 py-2 border rounded-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="font-semibold">
            B.Tech – Computer Science & Engineering
          </p>

          <p>GLA University, Mathura</p>

          <p className="text-gray-600">2022 – 2026</p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Email: baliyanayushi3@gmail.com</p>
          <p>Phone: +91 7453895745</p>

          <a
            href="https://github.com/ayushi-baliyan"
            target="_blank"
            className="text-blue-600"
          >
            github.com/ayushi-baliyan
          </a>
        </div>
      </section>
    </main>
  );
}