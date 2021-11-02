/*
* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

* Examples
* pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
* pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => {
    const startStrArr = str.split(' ');
    const necessaryWord = 'ay';

    const newArr = startStrArr.map((item) => {
        if (!(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(item))) {
            const firstLetter = item[0];

            return item.slice(1) + firstLetter + necessaryWord;
        }

        return item;
    });

    return newArr.join(' ');
}