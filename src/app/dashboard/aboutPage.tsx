import Image from "next/image";
import AboutImage from "../../../public/about-img.jpg";

const aboutPage = () => {
  return (
    <div className=" py-16 px-4">
      <div className="p-4 ">
        <p className="text-4xl font-bold text-center text-stone-500 uppercase">
          Never forget a workout. Train, Track, Triumph!
        </p>
      </div>

      <div className="flex flex-col md:flex-row pa-10 gap-4">
        <Image
          src={AboutImage}
          alt="gym-tracker-img"
          className="pa-10 rounded-lg"
          width={500}
        />
        <p className="text-xl font-bold m-auto text-stone-500 normal-case md:p-20 p-8">
          Gym tracker is a powerful fitness tool designed to track and categorize your
          workouts with ease. It allows users to log exercise types, monitor
          progress, and visualize activity trends over time.
        </p>
      </div>
    </div>
  );
};

export default aboutPage;
