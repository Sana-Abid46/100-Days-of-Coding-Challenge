function defaultParameter(userName) {
    if (userName === void 0) { userName = "anonyms"; }
    console.log("Hello ".concat(userName, "!"));
}
;
defaultParameter();
defaultParameter("Sana Abid");
