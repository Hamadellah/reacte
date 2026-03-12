function Header(){
    return(
        <div className=" bg-purple-600 text-white p-4 rounded-lg shadow-md">
   <div className="flex items-center justify-between">
     <h1 className="text-lg font-semibold"> Good Morning, <span className="font-bold">Samuel Walker!</span> </h1>
      <div className="flex items-center gap-4">
         
         <button className="bg-red-500 rounded-lg  h-[30px] relative"> 
          <span className=" material-icons">notifications</span> 
          </button> {/* Profile Picture */}
           <img  src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0=" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white mr-[20px]" /> </div> 
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