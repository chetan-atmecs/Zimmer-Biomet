import React from "react";

const featureData = [
  {
    title: "Patients",
    color: "bg-[#08615F]",
    content: [
      "Receiving personalized information about their diagnosis and treatment plan.",
      "Managing appointments and receiving reminders.",
      "Accessing symptom management tools and reporting side effects.",
      "Asking questions and receiving answers about their care.",
      "Tracking progress and updates."
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dbebe3eaadd50ba2ca0f1ee60ce1d963fe2d39fad3f5296b431ea8edfd03ddb?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
  },
  {
    title: "Support Staff",
    color: "bg-[#08615F]",
    content: [
      "Accessing patient vitals and monitoring treatment side effects.",
      "Administering chemotherapy and other treatments with support from Mikaila's scheduling and dosing tools.",
      "Providing patient education materials and guidance.",
      "Logging patient interactions and updates into the EHR."
    
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f57e229690fee2af75e16968ff6e17b729e827a797264321c4f259d1016c810?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
  },
  {
    title: "Oncologist",
    color: "bg-[#08615F]",
    content: [
      "Reviewing patient histories and test results.",
      "Receiving recommendations on diagnostic tests or treatment options.",
      "Accessing updated clinical guidelines and research studies.",
      "Scheduling follow-ups and coordinating care with other specialists.",
      "Using Mikaila for note-taking and documentation during patient consultations."
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