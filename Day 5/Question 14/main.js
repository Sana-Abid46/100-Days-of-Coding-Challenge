// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Mahira Khan", "Mehwish Hayat", "Sana Javed"];
guest.forEach(function (Invite) {
    console.log(" ".concat(Invite, "  I would like to invite you to dinner.    "));
});
