import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Google Cloud Study Jams 2023",
      issuingOrganization: "Google",
      issueDate: "",
      credentialID: "",
      credentialURL: "https://drive.google.com/file/d/1A5N1r5ycyN6L-k3lCY_ze229CzaCb-2I/view?usp=sharing",
    },
    {
      id: 2,
      name: "Web Development Intern",
      issuingOrganization: "Codsoft",
      issueDate: "28/08/2023",
      credentialID: "96aea8a",
      credentialURL: "https://drive.google.com/file/d/1kOtfdF-KBqREplrQb8SWucWUZLGjlCEc/view?usp=sharing",
    },
    {
      id: 3,
      name: "Web development intern",
      issuingOrganization: "OASIS INFOBYTE",
      issueDate: "09/10/2023",
      credentialID: "OIB/A1/IP755",
      credentialURL: "https://drive.google.com/file/d/1AM1LJTzl98wr5YNg9okiI-VAD1OcgdlT/view?usp=sharing",
    },
    
    {
      id: 4,
      name: "What is Generative AI",
      issuingOrganization: "LinkedIn Learning",
      issueDate: "09/09/2023",
      credentialID: "",
      credentialURL: "https://drive.google.com/file/d/1D18MTZHhOZDc1EcMkyKXrUYALeXoPvvt/view?usp=sharing",
    },
    {
      id: 5,
      name: "Microsoft Excel",
      issuingOrganization: "Skill Tech",
      issueDate: "24/02/2023",
      credentialID: "00004230",
      credentialURL: "https://drive.google.com/file/d/1u0UzEIekAvkYLB3jV0pvN5lvB6QV41QV/view?usp=sharing",
    },
    {
      id: 6,
      name: "Introduction to html",
      issuingOrganization: "SkillUp",
      issueDate: "23/01/2023",
      credentialID: "4111582",
      credentialURL: "https://drive.google.com/file/d/1u0UzEIekAvkYLB3jV0pvN5lvB6QV41QV/view?usp=sharing",
    },
   
   
    // More certifications can be added here
  ];

  return (
    <div name="Certification"
    className="max-w-screen2xl container mx-auto px-4 md:px-20 my-16"
  >
      {/* Header */}
      <h1 className="text-3xl font-bold mb-5">Certifications</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map(cert => (
          <div key={cert.id} className="border-2 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
            {/* Certification Name */}
            <h2 className="text-xl font-bold mb-2">{cert.name}</h2>
            
            {/* Certification Details */}
            <p className="text-gray-700 mb-1"><strong>Organization:</strong> {cert.issuingOrganization}</p>
            <p className="text-gray-700 mb-1"><strong>Issue Date:</strong> {cert.issueDate}</p>
            <p className="text-gray-700 mb-1"><strong>Credential ID:</strong> {cert.credentialID}</p>
            
            {/* Credential URL */}
            <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Credential
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
