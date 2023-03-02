FROM node:18.7.0
WORKDIR /app
COPY package.json .
COPY src/ src/
RUN npm install
COPY . .
CMD ["npm", "start"]