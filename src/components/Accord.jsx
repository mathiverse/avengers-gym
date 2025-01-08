import React from "react";
import { Accordion } from "flowbite-react";

const FAQAccordion = () => {
  const faqs = [
    { question: "What are the gym timings?", answer: "6 AM to 10 PM daily." },
    { question: "Do you offer personal training?", answer: "Yes, we do!" },
    { question: "What facilities are available?", answer: "Equipment, classes, and trainers." },
    { question: "Is there a trial period?", answer: "We offer a 1-week free trial." },
    { question: "What payment methods are accepted?", answer: "We accept cash, cards, and online payments." },
  ];

  return (
    <div className="bg-lightDark text-white py-16 px-6" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Panel key={index} className="bg-darkRed rounded-lg">
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>{faq.answer}</Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
