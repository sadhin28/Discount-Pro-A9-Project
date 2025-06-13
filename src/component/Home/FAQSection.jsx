import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { ChevronDown } from "lucide-react";
function FAQSection() {
    const faqs = [
        {
            "question": "What is Discount PRO?",
            "answer": "Discount PRO is a user-friendly platform designed to help shoppers in Bangladesh save money by collecting and aggregating discount codes from various e-commerce stores. It simplifies the process of finding deals, making it easier to access active coupons, promotional offers, and cashback deals all in one place. Whether you're shopping for fashion, electronics, or groceries, Discount PRO ensures you never miss a chance to save."
        },
        {
            "question": "How do I use a discount code?",
            "answer": "Using a discount code with Discount PRO is straightforward. When you find a coupon on the app, you can copy the code by clicking on it. Once copied, head to the respective store’s checkout page during your shopping session. Paste the code in the designated 'Promo Code' or 'Discount Code' field to instantly apply the discount to your purchase. This seamless process ensures you maximize your savings with minimal effort."
        },
        {
            "question": "Is it free to use Discount PRO?",
            "answer": "Absolutely! Discount PRO is 100% free to use. There are no hidden fees or subscription charges to access the app's features. Users can browse, search, and utilize the available coupons without paying a single penny. The goal is to make saving money as accessible as possible for everyone."
        },
        {
            "question": "Can I subscribe to receive updates?",
            "answer": "Yes, Discount PRO offers a convenient subscription service for users who want to stay informed about the latest deals. By entering your email address, you’ll receive regular updates about new coupons, exclusive offers, and cashback opportunities directly in your inbox. This ensures you never miss a great deal."
        },
        {
            "question": "Are the coupons verified?",
            "answer": "We ensure that all the coupons are verified before listing them on the app to guarantee that they are valid. This way, users can confidently use the codes, knowing that they will work as expected at checkout."
        }
    ]

    return (
        <section className="max-w-9xl  mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion data-aos="zoom-in" className="space-y-4 ">
                {faqs.map((faq, idx) => (
                    <AccordionItem
                        
                        key={idx}
                        header={
                            <div className="flex  justify-between items-center w-full text-left font-medium text-lg text-gray-800">
                                {faq.question}
                                <ChevronDown className="ml-2 shrink-0 transition-transform duration-200 accordion-chevron text-[#19BC9B]" />
                            </div>
                        }
                        className="  rounded-lg overflow-hidden"
                        contentProps={{
                            className: "p-4 text-gray-600 bg-gray-50",
                        }}
                        buttonProps={{
                            className:
                                "w-full px-4 py-3 text-left border-t-1 bg-[#E7F8F7] focus:outline-none focus:ring-2 focus:ring-[#19BC9B] rounded-t-lg",
                        }}
                        contentTransition
                    >
                        {faq.answer}
                    </AccordionItem>
                ))}
            </Accordion>

            <style jsx>{`
        .szh-accordion__item--expanded .accordion-chevron {
          transform: rotate(180deg);
         
        }
      `}</style>
        </section>

    );
}

export default FAQSection;