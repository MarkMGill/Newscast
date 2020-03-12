# Newscast
News and weather site built by me from scratch using React, Redux, and calls to newsAPI and openweathermap API with geolocation.

# Functionality
When the site starts up, you are asked to share your location.  If yes is selected, your geolocation coordinates are added for the 
initial call to the openweathermap API that displays the weather.  You can enter any city in any country in the box, click submit
and the weather displays.  Also when the page starts up, news stories from newsAPI are loaded. You can select any story to read the
article.  Note: only part of the article is displayed, but the URL to the full story is there to click on. Getting the full article
is part of the newsAPI's subscribe service, and I'm just using the free partial articles for site display. 

# Technologies Used
* React
* JavaScript
* Bootstrap
* Responsive Web Design
* AJAX call to newsAPI and openweathermap API
* Geolocation
