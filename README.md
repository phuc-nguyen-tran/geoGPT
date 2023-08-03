# GeoGPT - Make spontaneous travel plans anywhere in the world!

## 1. How to run
Open each client and server folder. Run **npm install** command to both folder. After that, run **npm start** for client,
and **nodemon** for server folder.

## 2. Idea
I love geography, actually I can remember all capitals from all nations in the world! I want to go to a country that nobody
knows, but what to do, I don't know. Therefore, GeoGPT is born with the idea of helping people making plans to anywhere
within seconds! The UI is simply a world map with Leaflet.js, really suitable if you want to pick the destination in the
"dart" fashion - point your hand to a screen (not a dart!!!!). When you click into that region, it will pop up information
about places to do in that area, default 7 days.

## 3. Technologies used
- Frontend: React.js, Leaflet.js, GeoJSON
- Backend: Express.js, OpenAI API (GPT-3.5 engine)
- Package Manager: Node.js

## 4. Difficulties faced
### Create a minimalist world map
- When I first used Leaflet.js, it showed up the whole world, literally every single detail. But that's too much detail, and I just want 
the countries and its borders on the world map. After some hours browsing Stack Overflow and Leaflet.js documentation, I found something
called GeoJSON, but I need data for that. After many hours again browsing for the database, I finally found it and my map is done!

## 5. Something I'm proud of
- Satisfy my love for geography (and GPT ngl) through a side project. Also have a chance to know more about countries and their places!
- First time working with an API (OpenAI API) and a really new (maybe niche) UI library (Leaflet) went well.
- Git is no more a pain! (no more submodule!)

## 6. Future improvements
- Deploy it, again (still figuring out how Docker & Kubernetes work)
- Maybe use Redis to cache data from users. Create an authentication system for users if they want to keep track of their responses.