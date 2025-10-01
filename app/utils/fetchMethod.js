// utils/fetchMethod.js
export async function fetchMethod(
    url,
    method = "GET",
    data = null,
    token = null,
    passCredentials = false
) {
    console.log("fetchMethod:", url, method, data, token);

    // Determine if running on the server (SSR)
    const isServer = typeof window === "undefined";

    // Base URL:
    // - Server: use absolute backend URL from env
    // - Client: use relative path (Next.js rewrite proxy)
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        : "";

    // Ensure proper URL
    const finalUrl = url.startsWith("http") ? url : `${baseUrl}${url.startsWith("/") ? url : "/" + url}`;

    const headers = {};
    if (data) headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const options = {
        method: method.toUpperCase(),
        headers,
        redirect: "manual",
        credentials: passCredentials ? "include" : "same-origin",
    };

    if (method.toUpperCase() !== "GET" && data !== null) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(finalUrl, options);

        if (response.status >= 300 && response.status < 400) {
            return { status: response.status, data: {}, headers: response.headers };
        } else if (response.status === 204) {
            return { status: response.status, data: {} };
        } else {
            let responseData;
            try {
                responseData = await response.json();
            } catch {
                responseData = await response.text();
            }
            return { status: response.status, data: responseData, headers: response.headers };
        }
    } catch (error) {
        console.error(`Error from ${method} ${finalUrl}:`, error);
        throw error;
    }
}
