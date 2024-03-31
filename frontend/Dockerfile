
FROM node:latest as build-stage


WORKDIR /app/frontend


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build


FROM nginx:alpine


COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
