const TournmentCard = ({ tournamentData }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
<div className="mt-[5%] bg-purple-600 text-white p-4 rounded-lg shadow-md">
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

      <div className="mt-[4%] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournamentData.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {t.title}
            </h2>

            {/* Status */}
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block
                ${
                  t.status === "On Going"
                    ? "bg-green-100 text-green-700"
                    : t.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {t.status}
            </span>

            {/* Description */}
            <p className="text-slate-600 mb-4">{t.description}</p>

            {/* Participants */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Participants:</span> {t.participantsCount} • {t.visibility}
            </p>

            {/* Format */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Format:</span> {t.format}
            </p>

            {/* Date */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Date:</span> {t.date}
            </p>

            {/* Location */}
            <p className="text-slate-600">
              <span className="font-medium">Location:</span> {t.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournmentCard;