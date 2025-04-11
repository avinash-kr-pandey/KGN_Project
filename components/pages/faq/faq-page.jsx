import React, { useState } from "react";

const tabContent = {
  "REFURBISHMENT PROCESS": [
    {
      question: "What is Lead Acid Battery Refurbishment?",
      answer:
        "Lead Acid Battery Refurbishment is a highly complex process that aims to restore the Batteries back to their original capacity.",
    },
    {
      question: "How does the Lead Acid Battery Refurbishment Process work?",
      answer:
        "It involves a series of steps from the initial Battery Inspection, cutting the Cells, cleaning the Electrodes, Charging and Discharging over multiple cycles using programmed state-of-the-art machines with final Quality Check.",
    },
    {
      question: "What types of Lead Acid Batteries can be Refurbished?",
      answer:
        "All kinds of Lead Acid Batteries like Traction, Stationary, Valve Regulated Lead Acid (VRLA), Telecom, GEL and AGM.",
    },
    {
      question: "What other kinds of Batteries can be Refurbished?",
      answer: "Currently, Nickel Cadmium (Ni-Cd) Batteries.",
    },
    {
      question:
        "What is the difference between Reconditioning / Regeneration and Refurbishment?",
      answer:
        "Reconditioning Batteries is a process of repairing the physical damage. Regeneration involves reconditioning as well as the change of electrolytes. Refurbishment includes reconditioning, regeneration as well as our breakthrough creation BSI technology to give the Battery a second life.",
    },
    {
      question: "Can a completely dead Battery be Refurbished?",
      answer:
        "Yes, it can be done, but it is not commercially viable. It is recommended that the Battery should have 10% to 20% life remaining in order to receive full benefits of Refurbishment.",
    },
  ],
  BENEFITS: [
    {
      question: "What life can be achieved after Refurbishment?",
      answer:
        "Almost the same as per the original life of a new Battery if following the KGE’s recommended operating guidelines.",
    },
    {
      question: "What are the benefits of Refurbishing a Lead Acid Battery?",
      answer:
        "Cost Savings, Extended Battery Life, Superior Performance, Environmental impact supporting sustainability goals and appeals to environmentally conscious organizations.",
    },
    {
      question: "How much time does it take to Refurbish a Lead Acid Battery?",
      answer: "It takes around 7 to 10 business days.",
    },
    {
      question: "Is Refurbishment process environmental friendly?",
      answer: "Yes 100%, Eco-friendly formula with zero discharge.",
    },
  ],
  SERVICES: [
    {
      question: "How much does it cost to Refurbish a Lead Acid Battery?",
      answer: "Less than half of the cost of a new Battery.",
    },
    {
      question: "Do you offer any warranty on Refurbished Lead Acid Batteries?",
      answer:
        "Yes, 12 to 18 months depending on the initial condition of the Battery received.",
    },
    {
      question: "Do you offer any other services for Lead Acid Batteries?",
      answer:
        "Yes, our highly experienced technicians can train the operating personnel for the proper use and maintenance of the Lead Acid Batteries to attain an exceptional performance. Annual Maintenance Contract (AMC) service can be provided.",
    },
    {
      question: "How can I send my Battery for Refurbishment?",
      answer:
        "Contact us through our website and we can discuss the next steps. Generally, our technician will visit your site to assess the initial Battery condition for refurbishment.",
    },
  ],
  "SAFETY & OTHER": [
    {
      question: "Is it safe to Refurbish a Lead Acid Battery?",
      answer:
        "Yes, it is completely safe and over 2.5 million Batteries refurbished worldwide using our technology in last 15 years.",
    },
    {
      question: "What happens to the Batteries which cannot be refurbished?",
      answer:
        "Normally we need minimum two Batteries of the same model and specifications.  If a Battery cannot be refurbished then it will be returned back to the customer along with the refurbished Battery.",
    },
    {
      question:
        "Is Battery Refurbishment a better option than buying a new Battery?",
      answer:
        "Yes, it has a great potential and the benefits are mentioned above.",
    },
    {
      question: "What is the initial Battery inspection cost at Customer site?",
      answer: "Initially, Free of cost.",
    },
  ],
};


const FaqPage = () => {
  const [selectedTab, setSelectedTab] = useState("REFURBISHMENT PROCESS"); // Set to a valid tab
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq__page section-padding">
      <div className="container">
        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-pill shadow-sm font-weight-semibold transition-all duration-300 ${
                selectedTab === tab
                  ? "btn btn-success text-white"
                  : "btn btn-outline-success"
              }`}
              style={{
                backgroundColor:
                  selectedTab === tab ? "#57b33e" : "transparent",
                color: selectedTab === tab ? "#fff" : "#000000",
                borderColor: "#57b33e",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-2 w-100">
          {tabContent[selectedTab] &&
            tabContent[selectedTab].map((faq, index) => (
              <div key={index} className="mb-3">
                <div
                  className="w-1/2 d-flex justify-content-between align-items-center cursor-pointer text-white p-3 rounded"
                  onClick={() => toggleFaq(index)}
                  style={{
                    backgroundColor: "#f8f8f8", // Corrected background color
                    color: "#000000", // Text color for the question
                    cursor: "pointer",
                  }}
                >
                  <p className="mb-0 font-weight-medium cursor-pointer text-black">{`Q${
                    index + 1
                  }. ${faq.question}`}</p>
                  <span className="fs-1 font-weight-bold cursor-pointer text-black">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {openIndex === index && faq.answer && (
                  <div className="p-3 text-muted">{faq.answer}</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
