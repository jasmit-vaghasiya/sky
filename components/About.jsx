import DevAboutImg from "./DevAboutImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {  GlobeLock, Layers, BugPlay ,ShieldQuestion,Gauge,BrainCircuit,Network } from 'lucide-react';
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneIcon,
    GraduationCap,
    Calendar,
    Briefcase,
    PhoneCall} from 'lucide-react';
import {
        Card,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle
    } from '@/components/ui/card';
    
const aboutData = [
    {
            icon: <ShieldQuestion size={72} strokeWidth={0.8} />,
            title: 'Vulnerability Management',
        description: 'Penetration testing of your IT assets with vulnerability management and prioritization. Web App Pentesting ,  Mobile App Pentesting ,  Network Penetration Testing ,  Azure Penetration Testing'
    },
    {
        icon: <GlobeLock size={72} strokeWidth={0.8} />,
        title: 'Privacy Assessment',
        description: 'Embedding privacy programs in your data lifecycle to ensure data democratisation, data curation and privacy by design.Privacy Program,ePrivacy Discovery,Data Classification,Product Assessment.'
    },
    {
        icon: <Network  size={72} strokeWidth={0.8} />,
        title: 'Network Security',
        description: 'Firewalls and Intrusion Detection Systems (IDS): Deploy firewalls and IDS to monitor and control network traffic.Segmentation: Segment networks to limit the spread of potential breaches and contain threats.Secure Communication.'
    },
    {
        icon: < Gauge size={72} strokeWidth={0.8} />,
        title: 'Managed Services',
        description: 'We become your extended security team to help you manage your security perimeters. SOC Monitoring 24/7 , Attack Surface Management , Third Party Risk Management , Cloud Security , Data & Privacy Management.'
    },
    {
        icon: <Layers size={72} strokeWidth={0.8} />,
        title: 'Compliance',
        description: 'We help you prepare, build and sustain your internal audits by training your team through the complexities of compliance and industrial regulations.PCI , HIPAA , SOC 2 (Type I & Type II) , DPDP Act, 2023 , ISO 27001:202.'
    },
    {
        icon: <BrainCircuit size={72} strokeWidth={0.8} />,
        title: 'AI Security',
        description: 'Providing managed security solutions to secure ML/DL and LLM/GenAI models to protect you IPs and investments. Flexible EDR Mechanism , Protect your AI - IP , DAST and IAST for AI , RASP or WAF for AI , SAST for AI.'
    },
];

    

const about = () => {
    return ( <section className='mb-12 xl:mb-36 pt-50 xl:pt-24 '>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 md:mb-16 xl:mb-24 text-center mx-auto max-w-full sm:max-w-xl'>
            Key Elements for a Robust Cybersecurity Strategy
            </h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 bg-gray-100 dark:bg-background'>

                {aboutData.map((item, index) =>{
                    return (
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center border-gray-400 and dark:border-gray-700 items-center relative shadow-md dark:shadow-lg' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background 
                                flex justify-center items-center'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

        </div>
    </section>
    
    )
}

export default about