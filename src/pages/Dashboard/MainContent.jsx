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
      The Zimmer Biomet Virtual Assistant is here to guide you through your journey to recovery with personalized support, expert advice, and tailored solutions. Designed with your health and well-being in mind, our virtual assistant helps you navigate Zimmer Biomet's advanced orthopedic technologies, providing easy access to information about treatment options, recovery tips, and product details.
      </div>
    </main>
  );
}

export default MainContent;
