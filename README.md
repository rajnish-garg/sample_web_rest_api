We need mongodb database running, please find the instruction, on the mentioned links to install it on aws

>mongod

#Import Data
http://localhost:4040/import

#Useful links
https://github.com/SIB-Colombia/dataportal-explorer/wiki/How-to-install-node-and-mongodb-on-Amazon-EC2
http://expressjs.com/en/starter/generator.html


#Update:
curl -i -X PUT -H 'Content-Type: application/json' -d '{"band": "BBQ Brawlers"}' http://localhost:4040/musicians/535fe13ac688500000c2b28b

#ADD
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Joe", "band": "Abita Boys", "instrument":"voice"}' http://localhost:4040/musicians

#DELETE
curl -i -X DELETE http://localhost:4040/musicians/56b2b172e203dda937dba595

