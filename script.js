var newDate = moment().format('LLLL');
$("#currentDay").text(newDate);


function createTimeBlock(hour) {
    var rowEl = $("<div class='row' id='" + hour + "'>");
    var hourEl = $("<div class='hour col-1'>");
    var timeBlockEl = $("<textarea class='time-block future col-10' id='" + hour + "'>");
    var saveBtnEl = $("<button class='btn saveBtn col-1 btn' id='" + hour + "'>");

    if (hour <= 12) {
        hourEl.text(hour + "AM");
    } else {
        hourEl.text((hour - 12) + "PM");
    }

    saveBtnEl.html("<i class='far fa-save'></i>");

    $(".container").append(rowEl);
    rowEl.append(hourEl).append(timeBlockEl).append(saveBtnEl);

    if (hasStorage()) {
        timeBlockEl.val(localStorage.getItem(hour));
    }
    
    
}

function hasStorage() {
	try {
		localStorage.getItem(i);
		return true;
	} catch (exception) {
		return false;
	}
};

for (i = 9; i <= 21; i++) {
    createTimeBlock(i);
    
    
}


function loadStorage(){

}

$(".saveBtn").on("click", function(){
    var time = $(this).attr("id");
    var saveToDo = $(this).siblings("textarea").val().trim();
    localStorage.setItem(time, saveToDo);
});
