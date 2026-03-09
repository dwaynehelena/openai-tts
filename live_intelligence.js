async function getWeather() {
  const response = await fetch("https://wttr.in/London?format=3");
  return (await response.text()).trim();
}

async function getCryptoPrice() {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  const data = await response.json();
  return data.bitcoin.usd;
}

async function getHNTopStory() {
  const topStoriesRes = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
  const topStories = await topStoriesRes.json();
  const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${topStories[0]}.json`);
  const story = await storyRes.json();
  return story.title;
}

async function getIPGeo() {
  const response = await fetch("http://ip-api.com/json/");
  return await response.json();
}

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip.advice;
}

async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  return `${data.setup} - ${data.punchline}`;
}

async function getDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}

async function getUserPersona() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  return `${user.name.first} ${user.name.last}`;
}

async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
}

async function getIpify() {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
}

(async () => {
  try {
    console.log("Weather:", await getWeather());
    console.log("Crypto:", await getCryptoPrice());
    console.log("HN:", await getHNTopStory());
    console.log("IP Geo:", await getIPGeo());
    console.log("Advice:", await getAdvice());
    console.log("Joke:", await getJoke());
    console.log("Dog:", await getDogImage());
    console.log("User:", await getUserPersona());
    console.log("Cat:", await getCatFact());
    console.log("Ipify:", await getIpify());
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
