export const HANGUL_Start = 0xAC00;
export const HANGUL_END = 0xD7A3;

export const CHO = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
    'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export const JUNG = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
    'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ',
    'ㅣ'
];

export const JONG = [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
    'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
    'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export function decomposeHangul(char: string): string[] {
    const code = char.charCodeAt(0);

    if (code < HANGUL_Start || code > HANGUL_END) {
        return [char];
    }

    const offset = code - HANGUL_Start;
    const jong = offset % 28;
    const jung = ((offset - jong) / 28) % 21;
    const cho = ((offset - jong) / 28 - jung) / 21;

    const result: string[] = [CHO[cho]];

    // To simulate typing, we might want to return intermediate assembled forms,
    // but for pure decomposition let's return Jamo first.
    // Actually for typing effect "ㄱ" -> "가" -> "각", we need:
    // 1. Initial
    // 2. Initial + Medial
    // 3. Initial + Medial + Final (if exists)

    return result;
}

/**
 * Generates a sequence of strings representing the typing process for a given text.
 * e.g., "안녕" -> ["ㅇ", "아", "안", "안ㄴ", "안녀", "안녕"]
 */
export function getTypingSequence(text: string): string[] {
    const sequence: string[] = [];
    let currentText = "";

    for (const char of text) {
        const code = char.charCodeAt(0);

        // Non-Hangul Characters
        if (code < HANGUL_Start || code > HANGUL_END) {
            currentText += char;
            sequence.push(currentText);
            continue;
        }

        const offset = code - HANGUL_Start;
        const jongIndex = offset % 28;
        const jungIndex = ((offset - jongIndex) / 28) % 21;
        const choIndex = ((offset - jongIndex) / 28 - jungIndex) / 21;

        // Step 1: Initial Consonant (e.g., 'ㄱ')
        sequence.push(currentText + CHO[choIndex]);

        // Step 2: Initial + Medial (e.g., '가')
        // Reconstruct syllable with empty Jong
        const syllableWithJung = String.fromCharCode(
            HANGUL_Start + (choIndex * 21 + jungIndex) * 28 + 0
        );
        sequence.push(currentText + syllableWithJung);

        // Step 3: Initial + Medial + Final (e.g., '각') - only if Jong exists
        if (jongIndex > 0) {
            sequence.push(currentText + char);
        }

        currentText += char;
    }

    return sequence;
}
