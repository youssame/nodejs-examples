import { readFile } from "fs/promises";

process.on('uncaughtException', (err) => {
    console.log("uncaughtException : ", err)
})

try {
    await readFile(new URL("not_found_file.txt", import.meta.url), 'utf-8');
} catch (error) {
    throw "ERROR in catch";
}
