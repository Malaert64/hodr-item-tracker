/* Disable right-click context menus. */
$(document).bind("contextmenu", function() {
    return false;
});

/* MOVEMENT */

/* Left-click to activate the icon, left-click again to disable it.
 * I copy-pasted this setup for every icon except for the Hint Card counter.
 */
$("#lizard-tail").on("click", function() {
    if ($("#lizard-tail").hasClass("grayscale") === true) {
        $("#lizard-tail").removeClass("grayscale");
    } else {
        $("#lizard-tail").addClass("grayscale");
    }
});

$("#silph-feather").on("click", function() {
    if ($("#silph-feather").hasClass("grayscale") === true) {
        $("#silph-feather").removeClass("grayscale");
    } else {
        $("#silph-feather").addClass("grayscale");
    }
});

$("#griffins-wing").on("click", function() {
    if ($("#griffins-wing").hasClass("grayscale") === true) {
        $("#griffins-wing").removeClass("grayscale");
    } else {
        $("#griffins-wing").addClass("grayscale");
    }
});

/* WARPING */

$("#death-talk").on("click", function() {
    if ($("#death-talk").hasClass("grayscale") === true) {
        $("#death-talk").removeClass("grayscale");
    } else {
        $("#death-talk").addClass("grayscale");
    }
});

$("#card-counter, #hint-cards").mousedown(function(event) {
    var curr_img = $("#card-counter").attr("src");

    switch (event.which) {
        case 1:
            /* If left-clicked, increase Hint Card count by 1. */
            if (curr_img === "./Assets/Counter0.png") {
                $("#card-counter").attr("src", "./Assets/Counter1.png");
            } else if (curr_img === "./Assets/Counter1.png") {
                $("#card-counter").attr("src", "./Assets/Counter2.png");
            } else if (curr_img === "./Assets/Counter2.png") {
                $("#card-counter").attr("src", "./Assets/Counter3.png");
            } else if (curr_img === "./Assets/Counter3.png") {
                $("#card-counter").attr("src", "./Assets/Counter4.png");
            } else if (curr_img === "./Assets/Counter4.png") {
                $("#card-counter").attr("src", "./Assets/Counter5.png");
            } else if (curr_img === "./Assets/Counter5.png") {
                $("#card-counter").attr("src", "./Assets/Counter6.png");
            } else {
                $("#card-counter").attr("src", "./Assets/Counter0.png");
            }
        case 2:
            /* Middle mouse button does nothing. Just break. */
            break;
        case 3:
            /* If right-clicked, decrease Hint Card count by 1. */
            if (curr_img === "./Assets/Counter0.png") {
                $("#card-counter").attr("src", "./Assets/Counter6.png");
            } else if (curr_img === "./Assets/Counter1.png") {
                $("#card-counter").attr("src", "./Assets/Counter0.png");
            } else if (curr_img === "./Assets/Counter2.png") {
                $("#card-counter").attr("src", "./Assets/Counter1.png");
            } else if (curr_img === "./Assets/Counter3.png") {
                $("#card-counter").attr("src", "./Assets/Counter2.png");
            } else if (curr_img === "./Assets/Counter4.png") {
                $("#card-counter").attr("src", "./Assets/Counter3.png");
            } else if (curr_img === "./Assets/Counter5.png") {
                $("#card-counter").attr("src", "./Assets/Counter4.png");
            } else {
                $("#card-counter").attr("src", "./Assets/Counter5.png");
            }
    }
});

/* VLAD RELICS */

$("#eye-of-vlad").on("click", function() {
    if ($("#eye-of-vlad").hasClass("grayscale") === true) {
        $("#eye-of-vlad").removeClass("grayscale");
    } else {
        $("#eye-of-vlad").addClass("grayscale");
    }
});

$("#heart-of-vlad").on("click", function() {
    if ($("#heart-of-vlad").hasClass("grayscale") === true) {
        $("#heart-of-vlad").removeClass("grayscale");
    } else {
        $("#heart-of-vlad").addClass("grayscale");
    }
});

$("#rib-of-vlad").on("click", function() {
    if ($("#rib-of-vlad").hasClass("grayscale") === true) {
        $("#rib-of-vlad").removeClass("grayscale");
    } else {
        $("#rib-of-vlad").addClass("grayscale");
    }
});

$("#nail-of-vlad").on("click", function() {
    if ($("#nail-of-vlad").hasClass("grayscale") === true) {
        $("#nail-of-vlad").removeClass("grayscale");
    } else {
        $("#nail-of-vlad").addClass("grayscale");
    }
});

$("#fang-of-vlad").on("click", function() {
    if ($("#fang-of-vlad").hasClass("grayscale") === true) {
        $("#fang-of-vlad").removeClass("grayscale");
    } else {
        $("#fang-of-vlad").addClass("grayscale");
    }
});

$("#vlads-ring").on("click", function() {
    if ($("#vlads-ring").hasClass("grayscale") === true) {
        $("#vlads-ring").removeClass("grayscale");
    } else {
        $("#vlads-ring").addClass("grayscale");
    }
});

/* INVENTORY */

$("#lure-key").on("click", function() {
    if ($("#lure-key").hasClass("grayscale") === true) {
        $("#lure-key").removeClass("grayscale");
    } else {
        $("#lure-key").addClass("grayscale");
    }
});

$("#skull-key").on("click", function() {
    if ($("#skull-key").hasClass("grayscale") === true) {
        $("#skull-key").removeClass("grayscale");
    } else {
        $("#skull-key").addClass("grayscale");
    }
});

$("#floodgate-key").on("click", function() {
    if ($("#floodgate-key").hasClass("grayscale") === true) {
        $("#floodgate-key").removeClass("grayscale");
    } else {
        $("#floodgate-key").addClass("grayscale");
    }
});

$("#crushma-stone").on("click", function() {
    if ($("#crushma-stone").hasClass("grayscale") === true) {
        $("#crushma-stone").removeClass("grayscale");
    } else {
        $("#crushma-stone").addClass("grayscale");
    }
});

$("#crushma-boots").on("click", function() {
    if ($("#crushma-boots").hasClass("grayscale") === true) {
        $("#crushma-boots").removeClass("grayscale");
    } else {
        $("#crushma-boots").addClass("grayscale");
    }
});

$("#mk-bracelet").on("click", function() {
    if ($("#mk-bracelet").hasClass("grayscale") === true) {
        $("#mk-bracelet").removeClass("grayscale");
    } else {
        $("#mk-bracelet").addClass("grayscale");
    }
});

$("#night-goggles").on("click", function() {
    if ($("#night-goggles").hasClass("grayscale") === true) {
        $("#night-goggles").removeClass("grayscale");
    } else {
        $("#night-goggles").addClass("grayscale");
    }
});

/* SPELLBOOKS */

$("#ice-book").on("click", function() {
    if ($("#ice-book").hasClass("grayscale") === true) {
        $("#ice-book").removeClass("grayscale");
    } else {
        $("#ice-book").addClass("grayscale");
    }
});

$("#fire-book").on("click", function() {
    if ($("#fire-book").hasClass("grayscale") === true) {
        $("#fire-book").removeClass("grayscale");
    } else {
        $("#fire-book").addClass("grayscale");
    }
});

$("#bolt-book").on("click", function() {
    if ($("#bolt-book").hasClass("grayscale") === true) {
        $("#bolt-book").removeClass("grayscale");
    } else {
        $("#bolt-book").addClass("grayscale");
    }
});

$("#wind-book").on("click", function() {
    if ($("#wind-book").hasClass("grayscale") === true) {
        $("#wind-book").removeClass("grayscale");
    } else {
        $("#wind-book").addClass("grayscale");
    }
});

$("#summoning-tome").on("click", function() {
    if ($("#summoning-tome").hasClass("grayscale") === true) {
        $("#summoning-tome").removeClass("grayscale");
    } else {
        $("#summoning-tome").addClass("grayscale");
    }
});