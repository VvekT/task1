#FROM node:latest
FROM node:16.14.2-buster

RUN mkdir /app

WORKDIR /app

# RUN git clone --branch master https://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@github.com/harrymhr/willow_snow.git
# RUN cp -r willow_snow/. .

COPY . .
RUN npm install

CMD npm run dev
