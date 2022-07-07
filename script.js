let schedule = {
  9: "",
  10: "hiiiii",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
let storedSchedule = localStorage.getItem("schedule");
if (storedSchedule) {
  schedule = JSON.parse(storedSchedule);
}
let time = new Date();
let currentHour = time.getHours();
$.each(schedule, function (key, value) {
  let row = $("<div>").addClass("row");
  let hour = $("<div>").addClass("hour").text(key);
  let textarea = $("<textarea>")
    .val(value)
    .on("input", function (event) {
      schedule[key] = this.value;
    })
    .addClass(
      currentHour > +key ? "past" : currentHour === +key ? "present" : "future"
    );
  let saveBtn = $("<button>")
    .addClass("saveBtn")
    .html('<i class="fa fa-save"></i>')
    .on("click", function () {
      localStorage.setItem("schedule", JSON.stringify(schedule));
    });
  row.append(hour, textarea, saveBtn);
  $(".container").append(row);
});
