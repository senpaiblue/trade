// Home.tsx
"use client";
import GradientButton from './Gradientbutton';

const Home = () => {
  return (
    <section className="bg-[#F1F1F3] md:flex-col md:flex rounded-2xl px-8 py-8 lg:flex lg:flex-row flex-col justify-between items-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto md:mx-0 mb-8 md:mb-0">
        <p className="text-[#101828] pb-2">We help to</p>
        <h1 className="text-[#101828] font-semibold text-6xl">Save, Invest & Grow</h1>
        <p className="text-[#101828] font-medium pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="max-w-lg mx-auto md:mx-0">
        <h3 className="text-[#101828] font-semibold text-2xl">Enquiry Form</h3>
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full text-black mt-4 border border-[#D6D6D6] rounded-2xl px-4 py-4 placeholder:text-[#B4B4B4] bg-tansparent" 
        />     
        <input 
          type="text" 
          placeholder="Email" 
          className="w-full text-black border border-[#D6D6D6] rounded-2xl px-6 py-4 mt-4 placeholder:text-[#B4B4B4] bg-tansparent" 
        />
        <input 
          type="text" 
          placeholder="Phone" 
          className="w-full text-black border border-[#D6D6D6] rounded-2xl px-4 py-5 mt-4 placeholder:text-[#B4B4B4] bg-tansparent " 
        />
        <GradientButton text="Get Started" onClick={() => console.log('Get Started clicked')} />
      </div>
    </section>
  );
};

export default Home;