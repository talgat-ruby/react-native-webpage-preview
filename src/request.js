const API_URL = 'http://motyar.info/webscrapemaster/api?';
const TITLE = 'title';
let DESCRIPTION = '';
let IMAGE = '';

const AllowedURL = (url) => {
  return /^(http(s*):\/\/)*www\.(youtube|sports)\.\w{2,3}/.test(url);
};

const notURL = (url) => {
  return !(/^(http(s*):\/\/)*www./.test(url));
};

const Request = (url, callback) => {
  if(AllowedURL(url)) { 

    if(url.includes("youtube")) {
      DESCRIPTION = 'meta[itemprop="description"]';
      IMAGE = 'link[itemprop="thumbnailUrl"]';
    } else {
      DESCRIPTION = 'meta[name="description"]';
      IMAGE = 'link[rel="image_src"]';
    }

    fetch(`${API_URL}url=${url}&xpath=${TITLE},${DESCRIPTION},${IMAGE}`)
    .then(res => {
      return res.json();
    }).then(resJSON => {
      callback({
        title: resJSON[0].text,
        text: resJSON[1].content,
        imgUrl: resJSON[2].href
      });  
    }).catch(err => {
      alert(err.message);
    });

  } else if(notURL(url)){
    alert("Please check whether URL correct");
  } else {
    alert("Only from websites sports.ru and youtube.com");
  }
};

export default Request;