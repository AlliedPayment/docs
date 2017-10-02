# Processing Knowlege Base (PKB)

## Table Of Contents
- [PKB-1 - Can't view check file or check file is missing](#pkb-1)
- [PKB-2 - An admin tried to initiate a network send but nothing appears to be happening](#pkb-2)

## PKB-1

### Can't view check file or check file is missing

1. Navigate to the production queues UI to start troubleshooting.
    - [http://queues.service.consul:15672/#/queues](http://queues.service.consul:15672/#/queues)
2. Check the `allied.admin.bulk` queue to verify if it's still working through messages.
    - There will be 1 message per check plus an additional message to create the file.
    - If there are a bunch of messages in the queue, the queue has consumers, and the messages are being handled in a timely manner simply wait for the messages to be processed.
3. Check the `allied.admin.bulk.Error` queue.
    - Inpsect any messages that are in the queue.
      - Note the timestamp of the message you are inspecting. Is the message relevant to your current issue?
4. Once the messages are all processed and there are not any relevant error messages in the error queue you can check if the check file exists in S3.
    - Using an S3 file explorer [utility](http://s3browser.com/), navigate to the `allied.checks.prod` bucket.
    - Sort the files in descending order by the `LastModified` column
      - Is the top file from today? 
        - Is the timestamp correct for the targeted check run? (if running 3pm checks the file shouldn't be for 11am)
          - If so then, you should be able to `"View Checks"` and `"Send File"` via Allied Admin's Network File Management.
      - If not, wait for approximately 15 mins (checking S3 in the interim).
        - If no file becomes available after 15 mins, "retrigger" the check file creation by clicking on `"Create Checks"` via Allied Admin's Network File Management -> Payment Files Not Sent

## PKB-2

### An admin tried to initiate a network send but nothing appears to be happening

1. Check if admin bulk queues are processing messages
1. Check for errors in admin bulk error queue
1. Query AchRecord Table 
    - `Select * From AchRecord`
      - Look for anything in this table
      - If ***anything*** is in the table it is processing or is partially processed. 
        - This table ***MUST*** be emptied before allowing the admin to try again.
1. Look at all non paper payments that are suppose to network send today and make sure they look ok ( ***No network send batch id*** )
1. Instruct the admin to retry the ***network send***
