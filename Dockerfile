FROM node:18 as build
WORKDIR /app
RUN npm cache clean --force
COPY package.json ./
RUN npm i
COPY . .
RUN npm i -g @angular/cli
RUN ng build --configuration=production

FROM nginx:alpine
COPY --from=build /app/dist/empoylee-management-new/browser /usr/share/nginx/html
EXPOSE 80