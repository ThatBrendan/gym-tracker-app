import Image from "next/image";
import AboutImage1 from "../../../public/about-img-1.jpg";
import AboutImage2 from "../../../public/about-img-2.jpg";

const aboutPage = () => {
  return (
    <div className=" py-16 px-4">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2">
        <p className="text-4xl font-bold text-center text-stone-500 uppercase">
          Never forget a workout. Train, Track, Triumph!
        </p>
        <p className="text-xl font-bold text-center text-stone-500 lowercase">
          This is a powerful fitness tool designed to track and categorize your
          workouts with ease. It allows users to log exercise types, monitor
          progress, and visualize activity trends over time.
        </p>
      </div>

      <div className=" flex justify-center mt-16">
        <div className="">
          <Image
            src={AboutImage1}
            alt="gym-tracker-img"
            width={200}
            className="rounded-xl"
          />
        </div>

        <div className="">
          <Image
            src={AboutImage2}
            alt="gym-tracker-img"
            width={200}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
