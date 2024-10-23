const decoder = new TextDecoder("utf-8")
const data = await Deno.readFile('./test.txt')
console.log(decoder.decode(data));



//this is in nodejs.

// import { promises as fs } from 'fs'; // Importing the 'fs' module for file system operations

// async function readFile(filePath: string): Promise<void> {
//   try {
//     const data = await fs.readFile(filePath, 'utf-8'); // Asynchronously reading the file
//     console.log(data); // Logging the file content to the console
//   } catch (err) {
//     console.error('Error reading file:', err); // Error handling
//   }
// }

// const filePath = './example.txt'; // Path to the file you want to read
// readFile(filePath); // Calling the function to read the file
