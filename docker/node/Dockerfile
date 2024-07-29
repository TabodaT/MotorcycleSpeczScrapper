#playwright requires LTS ubuntu version
FROM ubuntu:22.04

WORKDIR /app
ARG gid
ARG uid
ARG port

RUN apt-get update -yq
RUN apt-get install curl gnupg -yq


RUN apt-get install -y ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update
RUN apt-get install nodejs -y
RUN corepack enable


RUN groupadd -g $gid motogroup
RUN useradd -G www-data,root -u $uid -g $gid -d /home/mototuser mototuser
RUN mkdir -p /home/mototuser && \
    chown -R mototuser:motogroup /home/mototuser && \
    su mototuser

COPY ./client .
## install app dependencies
COPY ./client/package.json .

RUN chown -R mototuser:motogroup ./

USER mototuser

RUN npm install

EXPOSE 3000

CMD npm run dev --host 0.0.0.0 --port 3000

