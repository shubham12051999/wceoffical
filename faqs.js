$('.question-and-answer').click(function() {
    $(this).find(".answer").toggleClass("hidden")
    $(this).find(".question-chevron").toggleClass("hidden")
})