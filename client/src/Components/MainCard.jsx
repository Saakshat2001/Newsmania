import React from 'react'

export default function MainCard( {toiArticles , heading} ) {
    if (!toiArticles) {
        return <div>No articles available</div>;
      }
 const docLink = toiArticles.link?toiArticles.link:toiArticles.docs;
 const description = heading==='Hindustan Times'?toiArticles.description.substring(3, toiArticles.description.length-4):toiArticles.description;
 toiArticles=toiArticles.item.slice(0,5);
  return (
    
 // console.log(toiArticles, '-------------------------------------------------,,,'),
    <div class="md:ml-20 flex flex-col text-2xl text-black max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 mb-24">
       <div className='flex flex-row justify-center bg-gray-500 py-4'>
            <h3 className='text-gray-50'> {heading} </h3>
        </div>
   
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{description}</h5>
        </a>
        
        {toiArticles.map((article) => (
       <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <div>
         <li>{article.title}</li>

          </div>
     
        </ul>))
    }

        <a href={docLink} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>

        </div>
    </div>


  )
}
