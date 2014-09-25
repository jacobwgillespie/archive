# Use Cases

## 0 to 25 Churches
This is for the bootstrap stage - costs estimated with 25 churches

* Heroku
  - $0/mo free dyno worker running Unicorn
  - $5/mo four days of an additional dyno for high-traffic times
* Zencoder
  - $0.0125/minute audio processing - churches 1-10 for estimated upload of 320 minutes / church / month (paying $40 at 10)
  - $40/mo for 4000 minutes + $0.01/minute over - churches 11-25 (paying $80/mo at 25)
* ElasticSearch
  - or $20/mo for Linode 512MB instance
  - or $30/mo for Linode 768MB instance
* S3
  - $0.14/GB/mo storage - estimated 20MB/sermon (paying a growing $0.50/mo at 25 churches)
  - $0.12/GB/mo transfer - paying $9/mo (150 sermon plays / mo for 25 churches = 75GB transfer)
* Database
  - $15/mo 20GB PostgreSQL database
  - $20/mo 2GB "fast" JustOneDb

At  5 Churches: cost ~$70, income ~$100

At 10 Churches: cost ~$90, income ~$200

At 25 Churches: cost ~$138, income ~$500

### Price Graph:

![test](file:///Users/jacobwg/Documents/graph.jpg)

## 50 Churches
Farther down the road...

* Heroku
  - $36/mo free dyno worker running Unicorn + 1 additional
  - $10/mo four days of 2 additional dynos for high-traffic times
* Zencoder
  - $300 for 10,000 minutes + $0.03/minute over audio processing - churches 1-10 for estimated upload of 320 minutes / church / month (paying $480 at 50)
* ElasticSearch
  - $60/mo for Linode 1536MB instance
* S3
  - $0.14/GB/mo storage - estimated 20MB/sermon (paying a growing $1/mo at 50 churches)
  - $0.12/GB/mo transfer - paying $18/mo (150 sermon plays / mo for 50 churches = 150GB transfer)
* Database
  - $15/mo 20GB PostgreSQL database

At 50 Churches: cost ~$621, income ~$1000

# Possible Costs

* App Server
	- $0 - free Heroku dyno
	- $36/mo - additional Heroku dyno
	- $0.05/hr - additional Heroku dyno
* Database
	- MongoDB - $10/mo for 512MB
	- CouchDB - $15/mo for 2GB
	- MySQL - $10/mo for 1GB
* SSL - $5/mo SNI or $20/mo subdomain
* Zencoder - video/audio processing
	- $0.05 / minute - video processing
	- $0.05 / 4 minutes - audio processing
	- $40 / mo - 4000 minutes of audio processing
* Search
	- $20/mo - Websolr 250k documents
	- $12/mo - 20MB of documents
* Email
	- Mailgun Free - $0.00 for 300 messages/day
	- Mailgun Basic - $20/mo for 50,000 messages/day


Min Cost: $67

Max Cost: $151