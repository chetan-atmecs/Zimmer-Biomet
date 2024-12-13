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
    "company-overview",         // General information about Zimmer Biomet
    "products",                 // Information on Zimmer Biomet's products
    "surgical-procedures",      // Detailed documents on surgical procedures using Zimmer Biomet products
    "training-materials",       // Training resources and manuals
    "regulatory-compliance",    // Regulatory guidelines and compliance documents
    "clinical-research",        // Studies, clinical trials, and research papers
    "marketing-materials",      // Brochures, presentations, and promotional content
    "customer-support",         // Customer service guides and FAQs
    "case-studies",             // Case studies and success stories
    "technical-specifications", // Product specifications and technical data sheets
    "maintenance-guides",       // Maintenance and troubleshooting documents
    "supply-chain",             // Information on supply chain and logistics
    "safety-protocols",         // Safety guidelines and best practices
    "patents-and-intellectual-property", // Patents and IP-related documents
    "news-and-press",           // News articles, press releases, and media content
    "training-certifications",  // Certification details for healthcare professionals
    "sustainability-initiatives", // Zimmer Biomet’s sustainability and ESG efforts
    "partnerships-and-collaborations", // Documents on industry partnerships and collaborations
    "global-operations",        // Details on international offices and operations
    "historical-data",          // Historical records and company timeline
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
