# Chọn image Node.js để xây dựng ứng dụng
FROM node:20-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package.json ./
COPY package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Chạy image sản phẩm trên Nginx (hoặc server static)
FROM nginx:alpine

# Sao chép file build từ bước trước vào thư mục của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Mở port 80 cho server
EXPOSE 3002

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
