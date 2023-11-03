
function calcWordFrequencies() {

    var input = prompt("Enter a list of words with spaces :");


    var words = input.split(" ");


    var wordMap = new Map();


    for (var i = 0; i < words.length; i++) {
        var word = words[i];


        var lowercaseWord = word.toLowerCase();


        if (wordMap.has(lowercaseWord)) {
            var frequency = wordMap.get(lowercaseWord);
            wordMap.set(lowercaseWord, frequency + 1);
        }

        else {
            wordMap.set(lowercaseWord, 1);
        }
    }


    wordMap.forEach(function (frequency, word) {
        console.log(word + ": " + frequency);
    });
}


calcWordFrequencies();
