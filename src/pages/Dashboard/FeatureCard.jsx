import React from "react";

const featureData = [
  {
    title: "Patients",
    color: "bg-[#08615F]",
    content: [
      "Receiving personalized information about their diagnosis, surgery, and post-operative care plan.",
      "Managing appointments for consultations, surgeries, follow-ups, and receiving timely reminders.",
      "Accessing tools for symptom management, pain tracking, and reporting concerns like swelling or discomfort.",
      "Asking questions and receiving answers about their implants, rehabilitation exercises, and recovery process.",
      "Tracking progress with updates on mobility milestones and recovery goals."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dbebe3eaadd50ba2ca0f1ee60ce1d963fe2d39fad3f5296b431ea8edfd03ddb?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
  },
  {
    title: "Support Staff",
    color: "bg-[#08615F]",
    content: [
      "Accessing patient vitals and monitoring post-surgery recovery metrics like range of motion and pain levels.",
      "Assisting with implant-related procedures and rehabilitation plans with support from Mikaila's scheduling and resource allocation tools.",
      "Providing patient education materials on implant usage, care, and rehabilitation exercises.",
      "Logging patient interactions, recovery updates, and any complications into the EHR."
    
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f57e229690fee2af75e16968ff6e17b729e827a797264321c4f259d1016c810?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
  },
  {
    title: "Specialist",
    color: "bg-[#08615F]",
    content: [
      "Reviewing patient histories, imaging results, and pre/post-surgery reports.",
      "Receiving recommendations on appropriate implants, surgical techniques, or rehabilitation plans tailored to patient needs.",
      "Accessing updated clinical guidelines for prosthetic devices, including usage protocols and post-implant care.",
      "Scheduling follow-ups and coordinating care with physical therapists, surgeons, and other specialists.",
      "Using Mikaila for note-taking, documenting implant maintenance instructions, and capturing observations during patient consultations."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f57e229690fee2af75e16968ff6e17b729e827a797264321c4f259d1016c810?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
  }
];

function FeatureCard({ title, color, content, image }) {
  return (
    <div className={`flex flex-col self-stretch p-6 ${color} rounded-lg border border-solid border-white border-opacity-20  max-md:px-5 max-md:max-w-full`}>
      <h2 className="text-2xl">{title}</h2>
      <img loading="lazy" src={image} alt="" className="object-contain mt-3 w-full aspect-[333.33] " />
      <ul className="mt-3 list-disc pl-5">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img loading="lazy" src={image} alt="" className="object-contain mt-3 w-full aspect-[333.33]" />
      <div className="mt-3 text-right">
        <a href="#" className="text-white hover:underline">Learn more</a>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <section className="flex gap-4 items-center mt-6 text-base font-medium text-white">
      {featureData.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
}

export default FeatureCards;