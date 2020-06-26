var newDate = moment().format('LLLL');
$("#currentDay").text(newDate);

function hasStorage() {
	try {
		localStorage.getItem(i);
		return true;
	} catch (exception) {
		return false;
	}
};

function createTimeBlock(hour) {
    var rowEl = $("<div class='row' id='" + hour + "'>");
    var hourEl = $("<div class='hour col-1'>");
    var timeBlockEl = $("<textarea class='time-block future col-10' id='" + hour + "'>");
    var saveBtnEl = $("<button class='btn saveBtn col-1 btn' id='" + hour + "'>");

    if (hour <= 11) {
        hourEl.text(hour + "AM");
    } else if (hour === 12) {
        hourEl.text(hour + "PM");
    } else {
        hourEl.text((hour - 12) + "PM");
    }

    saveBtnEl.html("<i class='far fa-save'></i>");

    $(".container").append(rowEl);
    rowEl.append(hourEl).append(timeBlockEl).append(saveBtnEl);

    if (hasStorage()) {
        timeBlockEl.val(localStorage.getItem(hour));
    }
    
    currentHour = moment().hour();
    if (hour === currentHour) {
        timeBlockEl.attr("class", "time-block present col-10");
    } else if (hour <= currentHour) {
        timeBlockEl.attr("class", "time-block past col-10")
    }
    
}

for (i = 8; i <= 17; i++) {
    createTimeBlock(i); 
}

$(".saveBtn").on("click", function(){
    var time = $(this).attr("id");
    var saveToDo = $(this).siblings("textarea").val().trim();
    localStorage.setItem(time, saveToDo);
});
