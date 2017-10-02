# Processing Knowlege Base


- Issue: An admin tried to initiate a network send but nothing appears to be happening.
- Resolution:
  1. Check if admin bulk queues are processing messages
  2. Check for errors in admin bulk error queue
  3. Query AchRecord Table 
     - `Select * From AchRecord`
       - Look for anything in this table
       - If ***anything*** is in the table it is processing or is partially processed. 
         - This table ***MUST*** be emptied before allowing the admin to try again.
   4. Look at all non paper payments that are suppose to network send today and make sure they look ok ( ***No network send batch id*** )
