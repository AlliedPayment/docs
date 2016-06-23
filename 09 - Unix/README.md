#Unix


##AWS
Our unix boxes use `ubuntu` as a login.

##Putty
You will need to use Putty and our AWS.pem file to auth.

##Chef log
To watch the Chef log:
- login with `ubuntu`
- `sudo bash`
- `cd /var/log`
- `ls`
- `tail cfn-init.log -f`