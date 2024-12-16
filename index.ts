import { run } from "./functions";

(() => {
    const firstWord = process.argv[2] ?? '';
    const secondWord = process.argv[3] ?? '';

    run(firstWord, secondWord);
})();
