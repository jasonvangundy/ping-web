# ping-web

node app that writes/reads a timestamp value to/from a redis backend.  

# setup

install vagrant (e.g. osx)

  vagrant install plugin vagrant-berkshelf
  
# try it out

```
git clone https://github.com/jasonvangundy/ping-web.git
cd ping-web
vagrant up --provision
for i in `seq 1 10`; do {curl http://10.10.10.99/ping; sleep 1;} done
```
