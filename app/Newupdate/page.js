import React from 'react'

const page = () => {
  return (
    <>
    
    <div className='p-14 items-center justify-between bg-slate-100'>
         <div  className='items-center'>
         <h1 className='text-center text-4xl '>boat recurment for freshar | apply now</h1>
          <p className='text-center'> Posted by jobsforyou.ver</p>
         </div>
         <div>
        <img src="https://job4freshers.co.in/wp-content/uploads/2023/01/job4freshers-81.webp?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1" alt="" />
         </div>
         <div className='bg-white'>
          <p className='text-center p-16'>
          Capgemini Recruitment drive 2023: Capgemini is hiring Test Analyst through off campus Placement for Bangalore. A student from various disciplines can apply for the Capgemini off campus drive 2023. Interested and eligible candidates can read more details below. Details are given below:
          </p>
         </div>

      {/* this is about capgemini */}

         <div className='p-14 items-center justify-between'>
          <h1 className='text-center text-2xl bold'>About capgemini:</h1>
          <p className='text-center p-16'>
          Capgemini is a global leader in partnering with companies to transform and manage their 
          business by harnessing the power of technology. The Group is guided everyday by its purpose <br /> of unleashing human energy through technology for an inclusive and sustainable future.
          </p>
         </div>

         <div>
         <a href="https://jobs.capgemini.com/in-en/job/Bangalore-Test-Analyst-KA/986175501/?feedId=338001" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
  APPLY HERE
</a>
         </div>

    </div>
   
    </>
  )
}

export default page
