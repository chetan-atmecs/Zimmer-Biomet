import React from 'react';

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-wrap mt-6 w-full text-xl leading-8 dummy  rounded-lg min-h-[359px] text-slate-600 max-md:max-w-full">
      <img
        loading="lazy"
        src="src\assets\images\overview1.jpg"
        alt="Virtual Assistant for Oncologists"
        className="aspect-[1.49] min-w-[240px] w-[536px] max-md:max-w-full"
      />
      <div className="flex-1 shrink gap-2.5 self-stretch p-6 h-full min-w-[240px] max-md:px-5 max-md:max-w-full">
        The Virtual Assistant for Oncologists is designed to empower healthcare
        professionals with AI-driven support, enhancing decision-making and
        patient care. By streamlining workflows, providing real-time data
        insights, and enabling personalized patient interactions, this
        innovative tool allows oncologists to focus on delivering the best
        possible outcomes. With its integration into existing systems and
        advanced analytics, the Virtual Assistant represents the future of
        oncology care, driving efficiency and precision in every aspect of
        treatment.
      </div>
    </main>
  );
}

export default MainContent;
