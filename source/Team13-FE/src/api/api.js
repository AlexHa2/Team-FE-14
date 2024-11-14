// src/api/api.js
export async function fetchItemById(itemId) {
    try {
        const response = await fetch(`https://673164717aaf2a9aff1083a5.mockapi.io/Items/${itemId}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error; // Ném lỗi để xử lý ở nơi sử dụng hàm này
    }
}
