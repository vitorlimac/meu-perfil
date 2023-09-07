# Use a imagem base oficial do Nginx
FROM nginx:latest

# Copie os arquivos HTML, CSS e JavaScript do seu aplicativo para o diretório padrão do Nginx
COPY ./ /usr/share/nginx/html

# Exponha a porta 80 para tráfego HTTP
EXPOSE 80
