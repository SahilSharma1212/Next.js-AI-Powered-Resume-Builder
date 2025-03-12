import React from "react";

export default function SubtleBlue() {
  return (
    <div className="max-w-4xl mx-auto border-2 border-gray-300 shadow-lg p-6 bg-white font-sans">
      <header className="text-center border-b-2 border-gray-300 pb-4 mb-4">
        <h1 className="text-3xl font-bold">SOPHIA BROWN</h1>
        <h2 className="text-xl text-blue-700 font-semibold">Lead Software Engineer | Backend Expertise | Cloud Enthusiast</h2>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-1">
          <section className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-1">CONTACT</h3>
            <p>+1-(234)-555-1234</p>
            <p>help@enhancv.com</p>
            <p>Seattle, Washington</p>
            <p className="text-blue-600">LinkedIn</p>
          </section>

          <section className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-1">PROJECTS</h3>
            <ul className="list-disc pl-5">
              <li><strong>Open Source Coupon Management System</strong> - Built with Django. <span className="text-blue-600">GitHub</span></li>
              <li><strong>Fuel Points Microservice</strong> - Deployed on AWS Lambda. <span className="text-blue-600">GitHub</span></li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-1">KEY ACHIEVEMENTS</h3>
            <ul className="list-disc pl-5">
              <li><strong>System Optimization Award</strong> - Improved system performance by 40%.</li>
              <li><strong>Best Tech Lead 2019</strong> - Led a team that boosted efficiency by 50%.</li>
              <li><strong>Speaker at Tech Conference</strong> - Presented on Kubernetes.</li>
              <li><strong>Innovative Solution Patent</strong> - Developed a cloud-based solution.</li>
            </ul>
          </section>
        </div>

        {/* Right Section */}
        <div className="col-span-2">
          <section className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-1">SUMMARY</h3>
            <p>
              Lead Software Engineer with 10+ years of experience specializing in backend development and cloud technologies. Proven track record in processing high-volume transactions and strategic leadership.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-1">EXPERIENCE</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Senior Software Engineer</h4>
              <p className="text-gray-600">Amazon | 04/2019 - Present | Seattle, WA</p>
              <ul className="list-disc pl-5">
                <li>Redesigned a transaction system, increasing throughput by 50%.</li>
                <li>Implemented Kafka for real-time data streaming.</li>
                <li>Developed microservices architecture using Kubernetes.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">Software Engineer</h4>
              <p className="text-gray-600">Microsoft | 03/2016 - 03/2019 | Redmond, WA</p>
              <ul className="list-disc pl-5">
                <li>Developed a scalable API using .NET Core.</li>
                <li>Led the migration of on-prem systems to Azure.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold border-b pb-1">EDUCATION</h3>
            <p className="font-semibold">Master of Science in Computer Science</p>
            <p className="text-blue-700">University of Washington</p>
            <p>01/2011 - 01/2013</p>
            <p>Seattle, WA</p>
          </section>
        </div>
      </div>
    </div>
  );
};
