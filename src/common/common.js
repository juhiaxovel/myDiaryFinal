
$(function () {
    $('#datetimepicker2').datetimepicker({
        defaultDate: "11/1/2013",
        locale: 'ru',
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
});
