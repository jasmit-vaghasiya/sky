import {Button} from './ui/button';
import Link from 'next/link';
import {  MailSearch, Milestone,ShieldCheck ,Lightbulb } from 'lucide-react';
const Cta = () => {
  return (
    <section className=' bg-tertiary dark:bg-secondary/40'>
       <div className="container mx-auto py-12">
      <h2 className="section-title mb-8  text-center mx-auto max-w-full sm:max-w-xl">Aligning cyber risk strategy with business priorities</h2>
      <p className="subtitle mb-8">
        We’re your forward-thinking partner who takes a proactive approach to help you identify and address risks at a very early stage before they can adversely affect you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 border rounded-lg">
          <div className="flex justify-center mb-4">
           <Lightbulb color="#fe6e58" size={72} strokeWidth={0.8} />
           
          </div>
          <h3 className="text-2xl font-semibold mb-4">Proactive Approach</h3>
          <p>
            We understand your business operates within a complex ecosystem with sophisticated and mission-critical IT or OT infrastructure. Our tailored strategies address your specific needs, ensuring proactive measures against cyber threats across the entire OSI model.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <div className="flex justify-center mb-4">
          <Milestone color="#fe6e58" size={72} strokeWidth={0.8} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Increased vigilance</h3>
          <p>
            Our managed security services act as an extension of your team, providing 24/7 vigilance across systems. Reduce the cost of meeting your risk and compliance requirements when you introduce efficient operational security team.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <div className="flex justify-center mb-4">
          <MailSearch color="#fe6e58"  size={72} strokeWidth={0.8} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Effective security controls</h3>
          <p>
            Our configuration audits and managed services works in co-ordination to prioritize risk management over compliance fatigue to ensure your controls are effective. PS: We are vendor agnostic and your risk reduction is our prime focus.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <div className="flex justify-center mb-4">
          <ShieldCheck color="#fe6e58" size={72} strokeWidth={0.8} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Compliance fatigue</h3>
          <p>
            Our expert consultants help your organization achieve and maintain compliance with industry standards and regulations. We build a cybersecurity-first culture by providing rigorous training to your team and push you towards becoming self-sufficient in internal audits.
          </p>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Cta