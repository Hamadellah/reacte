

function Footer(){
  
    return(  
  <div class="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-2">
 
  <button class="flex flex-col items-center text-sm text-purple-600" >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
    </svg>
    Home
  </button>

  <button class="flex flex-col items-center text-sm text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v6m-3-3h6"/>
    </svg>
    Tournament
  </button>


  <button class="flex flex-col items-center text-sm text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
    Profile
  </button>
</div>

    )
}
export default Footer;