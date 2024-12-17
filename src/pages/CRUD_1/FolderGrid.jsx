import React from 'react';
import FolderItem from './FolderItem';

function FolderGrid() {
  // const folderNames = [
  //   'Procedures',
  //   'Research Articles',
  //   'Wikipedia',
  //   // 'Types of Cancer and ',
  //   'Diagnosis and Staging',
  //   'Diagnostic Procedures',
  //   // 'Cancer Staging',
  //   // 'Biomarkers and Genetic Testing',
  //   'Treatment Modalities',
  //   'Surgery',
  //   // 'Radiation Therapy',
  //   // 'Chemotherapy and Immunotherapy',
  //   // 'Targeted and Hormone Therapies',
  //   'Emerging Treatments',
  //   'Patient Management and Support',
  //   'Symptom Management',
  //   'Palliative Care',
  //   'Psychosocial Support',
  //   'Nutrition and Lifestyle',
  //   'Clinical Trials and Research',
  //   'Understanding Clinical Trials',
  //   'Ongoing Research',
  //   'Oncology for Specialists',
  //   'Professional Guidelines',
  //   'Continuing Education',
  //   'Case Studies and Reports',
  //   'Multidisciplinary care',
  //   'Patient Education and Empowerment',
  //   'Patient FAQs',
  //   'Interactive Tools',
  //   'Glossary of Terms',
  //   'Technology Integration',
  //   'Data Management',
  //   'AI and Machine Learning',
  //   'Telemedicine',
  //   'Regulatory and Ethical Considerations',
  //   'Regulatory Compliance',
  //   'Ethical Issues',
  // ];

  const folderNames = [
    "Company Overview",            // General information about Zimmer Biomet
    "Products",                    // Information on Zimmer Biomet's products
    "Surgical Procedures",         // Detailed documents on surgical procedures using Zimmer Biomet products
    "Training Materials",          // Training resources and manuals
    "Regulatory Compliance",       // Regulatory guidelines and compliance documents
    "Clinical Research",           // Studies, clinical trials, and research papers
    "Marketing Materials",         // Brochures, presentations, and promotional content
    "Customer Support",            // Customer service guides and FAQs
    "Case Studies",                // Case studies and success stories
    "Technical Specifications",    // Product specifications and technical data sheets
    "Maintenance Guides",          // Maintenance and troubleshooting documents
    "Supply Chain",                // Information on supply chain and logistics
    "Safety Protocols",            // Safety guidelines and best practices
    "Patents And Intellectual Property", // Patents and IP-related documents
    "News And Press",              // News articles, press releases, and media content
    "Training Certifications",     // Certification details for healthcare professionals
    "Sustainability Initiatives",  // Zimmer Biomet’s sustainability and ESG efforts
    "Partnerships And Collaborations", // Documents on industry partnerships and collaborations
    "Global Operations",           // Details on international offices and operations
    "Historical Data",             // Historical records and company timeline
];


  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      {[0, 1, 2, 3, 4].map((rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap gap-4 items-center mt-6 w-full max-md:max-w-full"
        >
          {folderNames
            .slice(rowIndex * 4, (rowIndex + 1) * 4)
            .map((name, index) => (
              <FolderItem key={index} name={name}  />
            ))}
        </div>
      ))}
    </div>
  );
}

export default FolderGrid;
