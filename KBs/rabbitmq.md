# RabbitMQ Knowledge Base (RKB)

## Table Of Contents
- [RKB-1 - System experiencing duplicate payments (#rkb-1)
- [RKB-2 - UI says payment creation failed, but the payment was actually created (#rkb-2)

## RKB-1

### System experiencing duplicate payments

TODO finish this RKB using the snippets below

- RabbitMQ health check
  - `curl -i -u admin:admin http://shared.queues.service.consul:15672/api/aliveness-test/%2F`
- Verify admin user exists and has permissions
  -  `curl -i -u admin:admin http://shared.queues.servuce.consul:15672/api/whoami`
- Start RabbitMQ service
  - Locate RabbitMQ instances IP address/es via AWS console (instances section)
  - SSH into unix server that hosts RabbitMQ
    - user: ubuntu
    - [Download PPK file](https://raw.githubusercontent.com/AlliedPayment/BillPay/dev/Certificates/Amazon/brian%40alliedpayment.com.ppk?token=AGnIbfThmRXvVn7oKuq0_VMAGChr_7prks5Z83uvwA%3D%3D)
    - Add PPK file to SSH client           
    ![ppk key in putty](https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/putty-key.PNG?token=AGnIbQKSYzISi32s39wC6Jq02cX2eBmfks5Z83_ywA%3D%3D)

## RKB-2

### UI says payment creation failed, but the payment was actually created
