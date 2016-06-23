#Amazon Web Services Assets

Amazon Web Services (AWS) forms the backbone of the Allied Payment network.

There are multiple asset groups which form production, testing and demo stacks. Each stack is a replication of each other.
`(TODO: find out if there are size differences between stacks.)`

`(TODO: explain [Consul](https://www.consul.io/).)`

In each stack, there are two Elastic Load Balancers (ELB) that sit in front of a virtual private cloud (VPC). The VPC is split into two availability zones (AZ) and subdivided as subnets. 
Those subnets and their hosts are described as follows:

##API/UI 172.16.2.0/24
Hosts the APIUI services in AZ A hosted on these boxes:
* API/UI-1 - Windows
* API/UI-2 - Windows
* Worker-1 - Windows
* Worker-2 - Windows
* Demo API/UI-1 - Windows
* Demo Worker - Windows

##DMZ - 172.16.0/24
Hosts the HAProxies, NAT and utility QAS in AZ A on the following boxes:
* Prod-HAProxy-1 - *nix
* Prod-HAProxy-2 - *nix
* NAT - *nix
* Utility QAS - Windows

##SQL - 172.16.6.0/24
Hosts the SQL Server box in AZ A. This is not running on Amazon Relational Database Service (RDS) and is running on top on an EC2 instance that persists during the deployment process.

##Consul - 172.16.14.0/24
This subnet hosts Consul, MemCache and RabbitMQ instances in AZ A.

(TODO: Add more)
