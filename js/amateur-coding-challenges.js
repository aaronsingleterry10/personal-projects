(function () {

    function startFinishStep(start, finish, step) {
        let num = 0;
        for (let i = start; i <= finish; i = i + step) {
            num = num + i;
        }
        return num;
    }
    console.log(startFinishStep(1, 4, 1));
    console.log(startFinishStep(4, 10));
    console.log(startFinishStep(3, 7, 2));
    console.log(startFinishStep(1, 4, 2));

})();