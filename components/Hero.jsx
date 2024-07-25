import Link from 'next/link';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

import { FaCircleArrowDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className='bg-gray-200 dark:bg-gray-900 py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Secured Digital World</div>
                        <h3 className='h1 mb-4'>Strategic Solutions for Penetration and Threats</h3>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            The CyberGuard Platform offers cutting-edge Penetration Testing, Configuration Assessment, and Managed Security Services. Our AI-driven technology and expert team deliver robust protection across applications, networks, and cloud environments, safeguarding your critical assets.
                        </p>
                        {/* buttons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* image */}
                    <div className='col-span- hidden sm:block'>
                        <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                            <img src='/hero/hero.svg' alt='Background Image' className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
                {/* icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <FaCircleArrowDown className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
