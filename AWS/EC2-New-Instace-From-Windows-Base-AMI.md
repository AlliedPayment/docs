# How To Create A New Instance Using Base Windows AMI

- [Log into AWS console](https://console.aws.amazon.com)
- [Navigate to EC2](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1)
- Click Launch Instance Button which opens the [Launch Instance Wizard](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:)
![img1]



- Select the `Windows Base AMI`
![img2]


- Select the instance's size then click `Next: Configure Instance Details` 
![img3]

- Configure the instance
  - After setting up VPC Click Review And Launch 
![img4]

- Add Tags
  - Click Edit Tags
    - Set Key = `Name`
    - Set Value = `<Some Identifier>` example `Nate Test`

- Click Launch


[img1]: https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/aws-ec2-dashboard.PNG?token=AGnIbcQVNO8GuW-Jr_7MjcIC8gV7KL7Rks5ZrrkawA%3D%3D
[img2]: https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/aws-ec2-instance-wizard.PNG?token=AGnIbfCnBo7jGdnVDks4faPemMRCulXeks5ZrrqJwA%3D%3D
[img3]: https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/aws-ec2-instance-size.PNG?token=AGnIbf8NQ0WJStTm-386w8_0fZ-lqK7Bks5ZrrtswA%3D%3D 
[img4]: https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/aws-ec2-configure-instance.PNG?token=AGnIbeR90lyO637Kowbj8OzGbLUj3Jbnks5ZrscowA%3D%3D
