function Getbadgstatus (status){
  if (status === "On Going") {
    return "bg-green-100 text-green-700";
  } 
  if (status === "Completed") {
    return "bg-blue-100 text-blue-700";
  }
  return "bg-yellow-100 text-yellow-700";

}
export default Getbadgstatus;