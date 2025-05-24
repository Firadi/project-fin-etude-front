# Step 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependencies files first for caching
COPY package.json package-lock.json ./

# Install dependencies, allowing legacy peer deps to resolve react-beautiful-dnd issue
RUN npm ci --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build the project (Vite, React, or other tool must be configured correctly)
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built assets to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Remove default Nginx config and add your own if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf  <-- Optional

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
