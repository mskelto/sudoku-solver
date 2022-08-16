export async function fetchAsync (url) {
    let response = await fetch(url);
    return await response.json();
      
}
export async function postAsync(url, postBody) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postBody)
    };
    let response = await fetch(url, requestOptions);
    return response.json();
}