const koreanText = document.querySelector("#koreanText")
const JapaneseText = document.querySelector("#JapaneseText")

function init()
{
    console.log(koreanText.value);
}

function OnTranslate()
{
    let koreatext = koreanText.value.split("");
    
    resultText = []
    koreatext.forEach(element => {
        resultText.push(getConstantVowel(element));
    });

    checkJapaneseCode("あ");
    checkJapaneseCode("い");
    checkJapaneseCode("う");
    checkJapaneseCode("え");
    checkJapaneseCode("お");

    checkJapaneseCode("か");
    checkJapaneseCode("き");
    checkJapaneseCode("く");
    checkJapaneseCode("け");
    checkJapaneseCode("こ");
    
}

function checkJapaneseCode(jp)
{
    const letter = 
    [
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
        'あ','い','う','え','お',
    ]
    console.log(`${jp} : ${jp.charCodeAt(0)}`);
}

function getConstantVowel(kor) 
{
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
               'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
               'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
               'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
               'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
               'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const ga = 44032;

    let uni = kor.charCodeAt(0);
            
    uni = uni - ga;
            
    let fn = parseInt(uni / 588);
    let sn = parseInt((uni - (fn * 588)) / 28);
    let tn = parseInt(uni % 28);
    
           
    return {
        f: f[fn],
        s: s[sn],
        t: t[tn]
    };
}



init();