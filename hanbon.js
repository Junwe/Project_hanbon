const koreanText = document.querySelector("#koreanText")
const JapaneseText = document.querySelector("#JapaneseText")

function init()
{
    console.log(koreanText.value);
}

function OnTranslate()
{
    JapaneseText.value = "";
    let koreatext = koreanText.value.split("");
    
    resultText = []
    koreatext.forEach(element => {
        const letter = getConstantVowel(element);
        resultText.push(letter);

        JapaneseText.value += getJapnaeseToKorean(letter);
    });

    console.log(resultText);
}

function getJapnaeseToKorean(letter)
{
    // 행과 단을 찾아야한다.
    // 행은 자음
    // 단은 모음이다.

    const fistIndex = compareFistLetter[letter.f];
    const secIndex= compareSecLetter[letter.s];
    console.log("fistIndex : " + fistIndex);
    console.log("secIndex : " + secIndex);
    console.log(JP_NOMAL_letter[fistIndex][secIndex]);

    return JP_NOMAL_letter[fistIndex][secIndex];
}

// 한글 분리하는 함수
function getConstantVowel(kor) 
{
    const ga = 44032;

    let uni = kor.charCodeAt(0);
            
    uni = uni - ga;
            
    let fn = parseInt(uni / 588);
    let sn = parseInt((uni - (fn * 588)) / 28);
    let tn = parseInt(uni % 28);

    return {
        f: KOREAN_FIRST_LETTER[fn],
        s: KOREAN_MIDDLE_LETTER[sn],
        t: KOREAN_LAST_LETTER[tn]
    };
}

function TestLog()
{
    for(let i=0; i<KOREAN_MIDDLE_LETTER.length;++i)
    {
        console.log(KOREAN_MIDDLE_LETTER[i] +' : '+ KOREAN_MIDDLE_LETTER[i].charCodeAt(0));
    }
}


// 모음 분리기 만들자
init();






const KOREAN_FIRST_LETTER = 
['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const KOREAN_MIDDLE_LETTER = 
['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const KOREAN_LAST_LETTER = 
['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const JP_NOMAL_letter = 
[
//   0    1    2    3   4
    ['あ','い','う','え','お'],//0
    ['か','き','く','け','こ'],//1
    ['さ','し','す','せ','そ'],//2
    ['た','ち','つ','て','と'],//3
    ['な','に','ぬ','ね','の'],//4    
    ['は','ひ','ふ','へ','ほ'],//5
    ['ま','み','む','め','も'],//6
    ['ら','り','る','れ','ろ'],//7
    ['が','ぎ','ぐ','げ','ご'],//8
    ['ざ','じ','ず','ぜ','ぞ'],//9
    ['だ','ぢ','づ','で','ど'],//10
    ['ば','び','ぶ','べ','ぼ'],//11
    ['ぱ','ぴ','ぷ','ぺ','ぽ'],//12
];
// 초성, 행의 번호를 적는다.
const compareFistLetter = 
{
    'ㄱ' : 8,'ㄲ' : 1,'ㄴ' : 4,'ㄷ' : 10,'ㄸ' : 10,'ㄹ' : 7,'ㅁ' : 6,'ㅂ' : 11,
    'ㅃ' : 12,'ㅅ' : 2,'ㅆ' : 2,'ㅇ' : 0,'ㅈ' : 9,'ㅉ' : 9,'ㅊ' : 3,'ㅋ' : 1,'ㅌ' : 3,'ㅍ' : 11,'ㅎ' : 5
};

const compareSecLetter = 
{
    'ㅏ':0,'ㅐ':3,'ㅒ':3,'ㅣ':1,'ㅓ':4,'ㅔ':3,
    'ㅗ':4,'ㅜ':2,'ㅡ':2,
    'ㅙ':40,'ㅚ':01,'ㅝ':43,'ㅞ':43,
    'ㅟ':41,'ㅢ':41
}

const comapreSecLetter_long =
{
    'ㅑ' : 0,'ㅠ':1,'ㅛ':2,'ㅘ':3,
}
/*
[,
'ㅖ',, 'ㅙ', 'ㅚ', 'ㅛ', ,
'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', , 'ㅢ', ];
*/

const JP_LONG_LTEER = 
[
    ['や','ゆ','よ','わ'],
    ['きゃ','きゅ','きょ'],
    ['しゃ','しゅ','しょ'],
    ['ちゃ','ちゅ','ちょ'],
    ['にゃ','にゅ','にょ'],
    ['ひゃ','ひゅ','ひょ'],
    ['みゃ','みゅ','みょ'],
    ['りゃ','りゅ','りょ'],
    ['ぎゃ','ぎゅ','ぎょ'],
    ['じゃ','じゅ','じょ'],
    ['ぢゃ','ぢゅ','ぢょ'],
    ['びゃ','びゅ','びょ'],
    ['ぴゃ','ぴゅ','ぴょ'],  
];

const JP_SYLLABLE_LETTER = 
[
    'っ','ん'
]
// 중성, 단의 번호를 적는다.
const compareMiddleLetter = 
{

}
