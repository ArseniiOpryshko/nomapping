export function extractImageSrcFromHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgElement = doc.querySelector('img');
    if (imgElement) {
      return imgElement.getAttribute('src');
    }
    return null; 
}
