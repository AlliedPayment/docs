# Final FAQ


- ***Q:*** Instances are up and responding (I can reach https://billpay.final.alliedpaymentnetwork.com && https://api.final.alliedpaymentnetwork.com/version.json), but users cannot log into SmallbizMVC.
  - ***A:*** Open cmd as administrator and execute `ipconfig /flushdns` to clean dns cache so UI can successfully resolve the API.