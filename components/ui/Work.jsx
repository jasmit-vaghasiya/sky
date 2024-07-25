'use client';
import Link from "next/link";
import { Button } from "./button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination ,Autoplay} from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';


const projectData = [
    {
        image: '/work/4.png',
        category: 'medical security ',
        name: 'Healthcare', 
        description: 'Ensure HIPAA compliance and secure patient data with our expert strategic guidance, tailored to meet the unique needs of healthcare providers.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'trading security system',
        name: 'fintech',
        description: 'Enhance customer trust and safeguard financial systems by leveraging our expert guidance to create robust cybersecurity strategies tailored for....',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Automation Manufacturing',
        name: 'Manufacturing',
        description: 'ManufacturingProtect your production lines and intellectual property from cyber threats with our customized security strategies, designed specifically for the....',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'SAAS , PASS , IAAS',
        name: 'software as a service',
        description: 'Strengthen your cloud infrastructure and application security with our specialized strategies, ensuring your SaaS offerings are secure and.....',
        link: '/',
        github: '/',
    },
    
];
const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/* text */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center
                xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
                xl:items-start'>
                    <h2 className='section-title mb-4'>Industry Help  Projects</h2>
                    <p className='subtitle mb-8'>"Fortifying Industries with Custom Cybersecurity Initiatives."</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper
            className='h-[480px]'
            breakpoints={{
                640: {
                    slidesPerView: 2
                },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500, // Delay between slides in ms
                disableOnInteraction: false, // Keep autoplay enabled after user interactions
            }}
        >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                </SwiperSlide>
            ))}
        </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work