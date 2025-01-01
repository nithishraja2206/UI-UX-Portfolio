import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Steve Mintz",
			subtitle: "Communications Director @ Michigan Tech",
			comment: "Nithish played an important role as the Web Content Manager for the Michigan Tech University website. His contributions were instrumental in improving both the design and functionality of the site, providing users with the information they needed to learn more about our programs. He spearheaded several page redesigns and implemented impactful updates that enhanced user experience and accessibility across the platform. His attention to detail, creativity, and ability to manage complex content projects were invaluable to our team. There was never a project that Nithish was unwilling to take on. I enjoyed collaborating with Nithish, and I’m confident his skills will continue to shine in future roles.",
		},
		{
			id: 2,
			image: Image3,
			title: "Aritra Chakrabarty",
			subtitle: "President @ ISA, Michigan Tech",
			comment: "As a member of the Indian Students Association (ISA) executive board and Webmaster, Nithish played a crucial role in enhancing our digital presence. He led the design and development of the ISA website, creating a visually appealing and user-friendly platform that aligned with our mission. His strategic SEO efforts significantly boosted website visibility and traffic, strengthening our connection with both current and prospective members. Beyond his technical skills, Nithish was a collaborative and detail-oriented team player, consistently turning ideas into impactful digital experiences. His contributions have been invaluable to ISA’s continued success, and I am confident he will excel in any future endeavor.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials