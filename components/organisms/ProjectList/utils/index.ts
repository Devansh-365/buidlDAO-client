export const getDataFromIPFS = async <T>(url: string) => {
    if(url.length == 0) throw new Error("Empty Url");
    // const ipfsURL = "https://gateway.pinata.cloud/ipfs/" + url.split("//").pop()
    return  (await (await fetch(url)).json()) as T
}