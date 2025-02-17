import React from 'react';
import FileListHeader from './FileListHeader';
import FileListItem from './FileListItem';

const fileData = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/411c79b44b50afb5d35e771bc74709c75a9d676b559901dabb93fc19c90cbc05?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Implantable Medical Devices and Healthcare Affordability Exposing the Spiderweb (2023, Routledge_Productivity Press).docx',
    owner: 'me',
    location: 'NCCN',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/411c79b44b50afb5d35e771bc74709c75a9d676b559901dabb93fc19c90cbc05?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Medical Devices Improving Health Care Through a Multidisciplinary Approach (2022, Springer).docx',
    owner: 'me',
    location: 'NCCN',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2fd79eb5b923c94edde7c7aae63dfc6a4e1e2ecc1f81d529d317eadb7f6a6bfc?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Medical Robotics History, Challenges, and Future Directions (Innovative Medical Devices) (2024, Springer).ppt',
    owner: 'me',
    location: 'NCCN',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d57fa0a193fa595711315747eab5fa4580d5c110a69b2b0e5e975e5a2116703d?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Significant and Nonsignificant Risk Medical Devices(2024, Springer).pdf',
    owner: 'me',
    location: 'NCCN',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d57fa0a193fa595711315747eab5fa4580d5c110a69b2b0e5e975e5a2116703d?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Statistical Methods and Analyses for Medical Devices (2023, Springer).pdf',
    owner: 'me',
    location: 'NCCN',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2fd79eb5b923c94edde7c7aae63dfc6a4e1e2ecc1f81d529d317eadb7f6a6bfc?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6',
    name: 'Total Hip Replacement Case Series from a Leading Registry (2017, Springer).ppt',
    owner: 'me',
    location: 'NCCN',
  },
];

const FileList = () => {
  return (
    <div className="flex flex-col mt-4 w-full text-black max-md:max-w-full">
      <FileListHeader />
      <div className="flex flex-col w-full text-sm leading-none max-md:max-w-full">
        {fileData.map((file, index) => (
          <FileListItem key={index} {...file} />
        ))}
      </div>
    </div>
  );
};

export default FileList;
