exports.getDate = function() {
    let today = new Date();
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
  
    let todayFormatted = today.toLocaleDateString("en-US", options);
    return todayFormatted;
}