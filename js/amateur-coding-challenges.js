(function () {

    function startFinishStep(start, finish, step) {
        let num = 0;
        for (let i = start; i <= finish; i = i + step) {
            num = num + i;
        }
        return num;
    }
    // console.log(startFinishStep(1, 4, 1));
    // console.log(startFinishStep(4, 10));
    // console.log(startFinishStep(3, 7, 2));
    // console.log(startFinishStep(1, 4, 2));

    function hasEnglish(input) {
        let userInput = input.toLowerCase();
        let word = "english";
        return userInput.indexOf(word) > 0;
    }
    // console.log(hasEnglish("SMFENgliSHasnD"));
    // console.log(hasEnglish("FaagdnglishAGG"));

    function twoArrayTwoInts(array) {
        let sumOfPosNums = 0;
        let sumOfNegNums = 0;
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                sumOfPosNums += 1;
            } else {
                sumOfNegNums = sumOfNegNums + array[i];
            }
        }
        newArray.push(sumOfPosNums, sumOfNegNums);
        return newArray;
    }
    // let myArr = [1, -6, 5, 4, 3, -7, -10, 201, -3];
    // console.log(twoArrayTwoInts(myArr));

    function translateToNum(input) {

    }
    let myString = "challenge";
    let singleChar = myString[0];
    let input = myString.split("");
    let num = 0;
    // console.log(input)
    // console.log(input["a"]);
    console.log()
    // let results = input.reduce((wordCounts, word) => {
    //     if (typeof wordCounts[word] === 'undefined') {
            // console.log(wordCounts);
            // console.log("word: " + word);
            // console.log(wordCounts[word]);
            // wordCounts[word] = 1;
            // console.log(wordCounts[word])
        // } else {
            // console.log("wordCounts: " + wordCounts);
            // console.log("word: " + word);
            // console.log(wordCounts[word]);
            // wordCounts[word] += 1;
            // console.log(wordCounts[word])
        // }
        // return wordCounts;
    // }, "");
    // console.log(results);
    // for (let i = 0; i < myString.length; i++) {
    //     console.log(myString.indexOf(myString[i]));
        // if (myString[i] === singleChar) {
        //     num += 1;
        // } else {
        //     singleChar = myString[i];
        // }
        // console.log(num);
    // }
})();