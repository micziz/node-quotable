import fetch from 'node-fetch';

export async function getRandomQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}
