import React, { useState } from 'react'

const Grocery = () => {
  const questions = [
    { title: 'What does Fraction Al provide?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'What types of datasets are available on the platform?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'How do you bring down data costs?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'What if I want a dataset exclusively for myself?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'How does Blockchain come into the picture?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'What sets Fraction Al apart from other data providers?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
    { title: 'How do get started with sourcing data?', answer: 'We provide you domain specialized labelled data for all steps of training Al models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases' },
  ]
  const [openIndices, setOpenIndices] = useState(null); // Array to track open FAQs

const toggleFAQ = (index) => {
    setOpenIndices(openIndices === index ? null : index);
};

return (

<div className="w-full h-full faq-container text-white mb-28">
    <h1 className='text-5xl  text-center  my-40 font-extrabold'><span className='w-0 h-0 shadow-[10px_-10px_250px_130px] shadow-[#5d2e7e]'></span>FAQ</h1>
  {questions.map((question, index) => (
    <div key={index} className="faq-item w-full  text-left">
        
      <div
        className={`faq-question px-2 w-full flex justify-between`}
        onClick={() => toggleFAQ(index)}
      >
        <h1 className='text-xl text-black  font-bold mb-7'>
            {question.title} </h1>
        <span className="arrow text-black flex">{openIndices === (index) ? '∇' : '∆'}</span>

            
      </div>
      <div className=' h-[1px] bg-[#5d2d7f] mb-3 opacity-50'> </div>
      {openIndices === index && (
        <p className="faq-answer px-2 text-zinc-300 text-md mb-3">{question.answer}</p>
      )}
    </div>
  ))}
</div>
)
}

export default Grocery