FROM nginx:latest

COPY ./meu-perfil /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off" ]