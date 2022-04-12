export async function fetchAsync (url) {
    let response = await fetch(url);
    return await response.json();
      
}