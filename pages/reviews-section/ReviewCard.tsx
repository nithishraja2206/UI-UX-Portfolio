import { reviewProps } from "./reviewDetails";
import Image from "next/image";
import { motion } from "framer-motion";
import slash from "../../public/review-slash.svg";

const ReviewCard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  index,
}: reviewProps) => {
  const abbreviateName = (name: string): string => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName} ${lastName[0]}.`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{ amount: "some", once: true }}
      className="relative flex h-full w-full max-w-[438px] flex-col justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px]"
    >
      {/* Slash Icon */}
      <Image
        src={slash}
        alt="quote"
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      {/* Testimonial Content (Flexible Height) */}
      <p className="mt-7 mb-9 flex-grow text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      {/* User Info (Always at the Bottom) */}
      <div className="mt-auto flex items-center gap-3">
        <Image
          src={profileImg}
          alt={name}
          width={1600}
          height={840}
          className="h-[41px] w-[41px] rounded-full object-cover grayscale"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-[500] leading-[16px] text-[#95979D]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
