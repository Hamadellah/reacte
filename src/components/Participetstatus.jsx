function getParticipantStatus(status) {
  if (status === "Confirmed") {
    return {
      bg: "bg-green-100",
      text: "text-green-600",
    };
  }

  return {
    bg: "bg-orange-100",
    text: "text-orange-600",
  };
}

export default getParticipantStatus;