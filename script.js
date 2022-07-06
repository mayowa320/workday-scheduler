let schedule = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
$.each(schedule, function (key, value) {
  let row = $("<div>").addClass("row");
  let hour = $("<div>").addClass("hour").text(key);
  let textarea = $("<textarea>");
  let saveBtn = $("<button>")
    .addClass("saveBtn")
    .html('<i class="fa-solid fa-floppy-disk"></i>');
  row.append(hour, textarea, saveBtn);
  $(".container").append(row);
});
