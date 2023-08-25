

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (longUrl, setShortUrl) => {
    const token = window.sessionStorage.getItem('XSRF-TOKEN')
    console.log(token);
    const response = await fetch(`${API_BASE_URL}/encode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: longUrl,
        credentials: 'include'
    });

    if (response.ok) {
        const shortUrl = await response.text();
        setShortUrl(shortUrl)
    } else {
        console.log("Failed to shorten URL")
    }
}

export const deleteUrl = async (shortUrl) => {
    const response = await fetch(`${API_BASE_URL}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'XSRF-TOKEN ' + token
        },
        body: shortUrl,
        credentials: 'include'
    })
    if (response.ok) {
        console.log("url deleted");
    } else {
        console.log("failed to delete url");
    }
}


