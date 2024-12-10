import React from 'react';
import FolderItem from './FolderItem';

function FolderGrid() {
  const folderNames = [
    'NCCN',
    'Foundational Knowledge',
    'Oncology Basics and Cancer Biology',
    'Types of Cancer and Pathophysiology',
    'Diagnosis and Staging',
    'Diagnostic Procedures',
    'Cancer Staging',
    'Biomarkers and Genetic Testing',
    'Treatment Modalities',
    'Surgery',
    'Radiation Therapy',
    'Chemotherapy and Immunotherapy',
    'Targeted and Hormone Therapies',
    'Emerging Treatments',
    'Patient Management and Support',
    'Symptom Management',
    'Palliative Care',
    'Psychosocial Support',
    'Nutrition and Lifestyle',
    'Clinical Trials and Research',
    'Understanding Clinical Trials',
    'Ongoing Research',
    'Oncology for Specialists',
    'Professional Guidelines',
    'Continuing Education',
    'Case Studies and Reports',
    'Multidisciplinary care',
    'Patient Education and Empowerment',
    'Patient FAQs',
    'Interactive Tools',
    'Glossary of Terms',
    'Technology Integration',
    'Data Management',
    'AI and Machine Learning',
    'Telemedicine',
    'Regulatory and Ethical Considerations',
    'Regulatory Compliance',
    'Ethical Issues',
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
