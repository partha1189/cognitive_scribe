FROM node:6.9.2
#Print Hello Docker
RUN echo "Hello Docker"
# File Author / Maintainer
MAINTAINER Partha Sen <parthase@in.ibm.com>
EXPOSE 5000
ADD ./app /nodejs-demo
RUN cd /nodejs-demo
WORKDIR /nodejs-demo
CMD ["npm","run","start"]



# install deps
#ADD package.json /tmp/package.json
#RUN cd /tmp && npm install

# Copy deps
#RUN mkdir -p /opt/nodejs-app && cp -a /tmp/node_modules /opt/nodejs-app

# Setup workdir
#WORKDIR /opt/nodejs-app
#COPY . /opt/nodejs-app
