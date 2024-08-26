export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        controller: request[1],
        id: request[2],
        params: url[3]
    }
}