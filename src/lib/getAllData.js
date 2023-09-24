export async function getAllBooks() {
    try {
        const response = await fetch("/api/books");
        const data = await response.json();
        return data.books;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

export async function getAllVideos() {
    try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        return data.videos;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}