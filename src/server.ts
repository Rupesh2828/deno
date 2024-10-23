const PORT = 7000;
const handler= (req:Request) => {
    return new Response ("Hello deno", {status: 200})

}

console.log(`HTTP webserver running at: ${PORT}`);
Deno.serve({ port: PORT }, handler);