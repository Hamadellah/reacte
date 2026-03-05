function Header(){
    return(
        <div className="mt-[12%] bg-purple-600 text-white p-4 rounded-lg shadow-md">
   <div className="flex items-center justify-between">
     <h1 className="text-lg font-semibold"> Good Morning, <span className="font-bold">Samuel Walker!</span> </h1>
      <div className="flex items-center gap-4">
         
         <button className="relative"> 
          <span className="material-icons">notifications</span> 
          </button> {/* Profile Picture */}
           <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" /> </div> 
           </div> {/* Search Bar */} 
           <div className="mt-4 flex items-center bg-white rounded-lg px-3 py-2">
             <span className="material-icons text-gray-500">search</span>
              <input type="text" placeholder="Search..." className="flex-1 px-2 outline-none text-gray-700" />
               <span className="material-icons text-gray-500">tune</span> 
</div> 
</div>
    )
}
export default Header;