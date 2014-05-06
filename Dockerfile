# Dockerfile for dining-api

FROM shykes/nodejs

RUN apt-get update
RUN apt-get upgrade

# Add 10gen official apt source to the sources list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list

# Hack for initctl not being available in Ubuntu
RUN dpkg-divert --local --rename --add /sbin/initctl
RUN ln -s /bin/true /sbin/initctl

# Install MongoDB
RUN apt-get update
RUN apt-get install -y mongodb-10gen

# Create the MongoDB data directory
RUN mkdir -p /data/db

RUN apt-get install -y git-core

RUN git clone https://github.com/pennappslabs/dining-api.git

RUN (cd /dining-api/ && npm install)
EXPOSE 3000

CMD mongod
CMD (cd /dining-api/ && node server.js)
