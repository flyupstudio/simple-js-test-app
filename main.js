/**
 * Created by maximvlasenko on 12/21/16.
 */


const words = [
    'spacejump',
    'apples',
    'graphics',
    'javascript',
    'peaches'
];
// length: 6 = only use words with 6 chars
// length: [6,8] = only use words with between 6 and 8 chars
// upper_case = first means football -> Football
// upper_case = last means football -> footbalL
// strip = vowels means football -> ftbll
// strip = consonants means football -> ooa
const configs = [{
    upper_case:'first',
    length:[6,8]
},
    {
        upper_case:'last',
        strip:'vowels',
        length:[6,8]
    },{
    upper_case:'last',
    length:[7,9],
    strip:'vowels'
},{
    length:[7,9],
    strip:'consonants'
}];

function vowels(word){
    return word.replace(/[aeiou]/ig,'');
}

function consonants(word){
    return word.replace(/[qwrtypsdfghjklzxcvbnm]/ig,'');
}

function upper_case(word, index){
    return (index != 0 ? word.substring(0, index) : '' ) +
            word.substr(index, 1).toUpperCase() +
            ( index == 0 ? word.substring(index + 1, word.length) : '');
}

function applyConfig(words, configs) {
    let result = [];
    result = words.map(function(word){
        let result = [];
        result = configs.map(function(conf){
            let result = word;

            if ((typeof conf.length == 'number' && word.length == conf.length) ||
                (typeof conf.length == 'object' &&
                (word.length >= conf.length[0] && word.length <= conf.length[1]))
            ) {
                switch (conf.strip) {
                    case 'vowels' :
                        result = vowels(result);
                        break;
                    case 'consonants':
                        result = consonants(result);
                        break;
                }
                switch (conf.upper_case) {
                    case 'first':
                        result = upper_case(result, 0);
                        break;
                    case 'last':
                        result = upper_case(result, result.length - 1);
                        break;
                }
            }
            return result;
        });
        return result;
    });
    return result;
}


console.log(applyConfig(words, configs));