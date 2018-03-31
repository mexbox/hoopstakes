FROM node:8

RUN npm install -g nodemon

# install watchman from source

RUN \
	git clone https://github.com/facebook/watchman.git &&\
    cd watchman &&\
    git checkout v4.9.0  # the latest stable release &&\
    ./autogen.sh &&\
    ./configure &&\
    make &&\
    make install

WORKDIR /tmp
COPY package.json package.json
RUN npm install
RUN mkdir -p /opt/app
RUN cp -a /tmp/node_modules /opt/app/
COPY ./public /opt/app
COPY ./src /opt/app
COPY package.json /opt/app
WORKDIR /opt/app

CMD ["npm", "run", "start"]


EXPOSE 3000
