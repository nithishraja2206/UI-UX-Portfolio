import { blogProps } from "../../src/utils/blogDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ title, image, url, date, available, index }: blogProps) => {
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
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531] p-1"
    >
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[60%] w-full md:h-[70%]">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={840}
            className="h-full w-full rounded-lg bg-contain bg-center object-cover"
          />
        </div>

        <h3 className="mt-3 text-center text-[18px] leading-[1em] tracking-tight text-[#fff] line-clamp-2">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-4 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]">
        {available ? (
          <>
            <p className="font-instrument">{date}</p>
            <Link
              href={url}
              target="_blank"
              className="rounded-full"
              aria-label="Open Blog Post"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="h-[35px] w-[35px] rounded-full bg-[#0E1016] p-2 text-[22px] text-white md:h-[25px] md:w-[25px] md:text-[22px] lg:h-[35px] lg:w-[35px]  lg:text-[30px]"
                data-blobity
                data-blobity-radius="30"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
          </>
        ) : (
          <>
            <p>Coming soon</p>
            <div className="mb-10 md:mb-14"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
