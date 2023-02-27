#FROM cypress/base:12.6.0
FROM cypress/included:12.3.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:chromerun"]