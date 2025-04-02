FROM nginx:alpine

# Custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Assets to serve
COPY flyer.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html
COPY images/ /usr/share/nginx/html/